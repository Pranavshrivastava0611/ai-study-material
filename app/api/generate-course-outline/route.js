import { courseOutlineAIModel } from "../../../configs/AiModel";
import { NextResponse } from "next/server";
import  db  from "../../../configs/db";
import { STUDY_MATERIAL_TABLE } from "../../../configs/schema";
import { inngest } from "../../../inngest/client";

export async function POST(req) {
    try {
        // Read request body only once
        const { courseId, topic, studyType, difficultyLevel, createdBy } = await req.json();
        
        console.log("Received Request:", { courseId, topic, studyType, difficultyLevel, createdBy });

        // Fix: Use studyType instead of undefined courseType
        const PROMPT = `Generate a study material for ${topic} for ${studyType} and level of difficulty will be ${difficultyLevel} with summary of course, List of chapters(Max 6) along with summary and emoji icon for each chapter ans for the whole course also  , Topic list in each chapter in JSON format.`;

        //
        const aiResponse = await courseOutlineAIModel.sendMessage(PROMPT);
        const aiResponseText =  aiResponse.response.text(); // Ensure this is awaited
        const aiResult = JSON.parse(aiResponseText);

        // Fix: Store JSON data properly in the database
        const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
            courseId: courseId,
            courseType: studyType, // Fixed from courseType to studyType
            createdBy: createdBy,
            topic: topic,
            courseLayout: JSON.stringify(aiResult), // Store as JSON string
        }).returning({resp : STUDY_MATERIAL_TABLE});

        console.log("ai response", JSON.stringify(aiResult));


        const result = await inngest.send({
            name : "notes.generate",
            data : {
                course : dbResult[0].resp
            }
        });
        console.log("course", dbResult[0].resp);

        console.log(result);

        console.log("Database Inserted:", dbResult);

        return NextResponse.json({ result: dbResult[0] });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
