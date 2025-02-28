import { generateNotesAiModel } from "@/configs/AiModel";
import { inngest } from "./client";
import { db } from '@/configs/db';
import { CHAPTER_NOTES_TABLE, USER_TABLE } from '@/configs/schema';
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
  {id : 'generate-course'},
  {event : 'notes.generate'},
  async ({event,step}) => {
    const {course} = event.data;

    const notesResult = await step.run('Generate Chapter Notes', async () => {
      const Chapters = course?.courseLayout;
      let index  = 0;
      Chapters.forEach(async (chapter)=>{
        const PROMPT = `Generate exam material detail content for each chapter , Make sure to include all topic point in the content , make sure to give content in HTML format (Do not add HTMLKL, Head ,Body,title tag),The chapters :  ${chapter} `;
        const result = await generateNotesAiModel.sendMessage(PROMPT);
        const aiResp = result.response.text();

        await db.insert(CHAPTER_NOTES_TABLE).values(
          {
            chapterId : index,
            courseId : course?.courseId,
            notes : aiResp
          }
        )
        index = index + 1;
      })
      return 'Completed'
    });


  }
)

//update Status to 'Ready'

const updateCourseStatusResult = await step.run('Update Course Status to Ready',async ()=>{
  const result = await db.update(STUDY_MATERIAL_TABLE).set({status : 'Ready'}).where(eq(STUDY_MATERIAL_TABLE.courseId,course?.courseId));
  return "Success";
}); 