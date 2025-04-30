import { generateNotesAiModel, GenerateQuizAiModel, generateStudyTypeContent } from "../configs/AiModel";
import { inngest } from "./client";
import  db  from "../configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE, USER_TABLE } from '../configs/schema';
import {eq} from 'drizzle-orm';


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    //get the event data
    const { user } = event.data;
    const result = await step.run(
      "Check user and crate new user if not in DB",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

        if (result?.length == 0) {
          const userResponse = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
            return userResponse;
        }
          return result;
    
       })

      //send welcome email;

      //send email notification after 3 days of user creation
    ;
    return "Success"; 
  }
);

export const GenerateNotes = inngest.createFunction(
  { id: "generate-course" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    const { course } = event.data;
    console.log("course here", course);

    try {
      await step.run("Generate Chapter Notes", async () => {
        const Chapters = course?.courseLayout?.chapters || [];

        console.log("chapters in the chaptersss", Chapters);

        for (let index = 0; index < Chapters.length; index++) {
          const chapter = Chapters[index];

          const PROMPT = `
You are a skilled academic content generator.

Generate fully-structured **HTML-based exam preparation notes** based on the following chapter.

### INSTRUCTIONS:
You are given:
- A chapter title
- A chapter summary
- A mapping of topic numbers to topic names

Use this exact structure:

1. Start with the chapter title in an <h2> tag.
2. Follow with the summary in a <p> tag.
3. For each topic (loop through the topic mapping):
   - Create a section with an <h3> heading containing the topic number and title (e.g., "3.1 Recognizing Hunger and Fullness Cues")
   - Provide clear, concise notes in bullet format using <ul><li>...</li></ul>
   - Include examples, strategies, and common misconceptions if applicable
   - Emphasize key terms using <strong>
   - DO NOT SKIP ANY TOPIC
   - Do NOT return anything except HTML (no JSON, no markdown, no headers)

Use only these HTML tags: <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, <code>, <pre>

### CHAPTER DATA:
${JSON.stringify(chapter)}

Return only HTML content, nothing else.
`;

          const result = await generateNotesAiModel.sendMessage(PROMPT);
          const aiResp = await result.response.text();

          console.log("ai response", aiResp);
          await db.insert(CHAPTER_NOTES_TABLE).values({
            chapterId: index,
            courseId: course?.courseId,
            notes: aiResp,
          });
        }
        return "Completed";
      });
    } catch (error) {
      console.log("error in the notes generation section", error);
    }

    // ✅ Update the course status after notes generation is done
    await step.run("Update Course Status to Ready", async () => {
      await db
        .update(STUDY_MATERIAL_TABLE)
        .set({
          status: "Ready",
        })
        .where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId));

      return "Success";
    });
  }
);

export const GenerateStudyTypeContent = inngest.createFunction(
    {id : "Generate Study Type Content"},
    {event : "studyType.content"},
    
    async ({event, step})=>{
      const {studyType,prompt,courseId,recordId} = event.data;
      console.log("Study Type Content", studyType, prompt, courseId, recordId);
      
      const AiResult = await step.run("Generate Flascard using AI",async()=>{
        const result =
        studyType?.toLowerCase().trim() === "Flashcard"
    ? await generateStudyTypeContent.sendMessage(prompt)
    : await GenerateQuizAiModel.sendMessage(prompt);

        const AIResult = JSON.parse(result.response.text());
        return AIResult
      })

      console.log("Flashcard AI result", AiResult);

      const DbResult = await step.run("Save result to DB",async()=>{
           const result = await db.update(STUDY_TYPE_CONTENT_TABLE).set({
            content : JSON.stringify(AiResult),
            status : "Ready"
           }).where(eq(STUDY_TYPE_CONTENT_TABLE.id,recordId ))

           return "Data Inserted"
      })

      console.log("DbResult", DbResult);
    }

  )
