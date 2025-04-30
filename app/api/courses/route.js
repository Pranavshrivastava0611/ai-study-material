import  db  from "../../../configs/db";
import { desc, eq } from "drizzle-orm"; // ✅ Import eq() properly
import { NextResponse } from "next/server";
import { STUDY_MATERIAL_TABLE } from "../../../configs/schema";

export async function POST(req) {
    try {
        const { createdBy } = await req.json();
        
        // ✅ Validate input
        if (!createdBy) {
            return NextResponse.json({ error: "Missing createdBy field" }, { status: 400 });
        }

        // ✅ Fetch courses from the database
        const result = await db
            .select()
            .from(STUDY_MATERIAL_TABLE)
            .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy)).orderBy(desc(STUDY_MATERIAL_TABLE.id));

        return NextResponse.json({ result:result });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    const reqURL = req.url;
    const {searchParams} = new URL(reqURL);
    const courseId  = searchParams?.get('courseId');

    const course =await db.select().from(STUDY_MATERIAL_TABLE).where(eq(STUDY_MATERIAL_TABLE?.courseId,courseId));
    return NextResponse.json({result : course[0]});
}
