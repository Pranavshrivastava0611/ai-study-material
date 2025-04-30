"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '../../../../components/ui/button'
import { useRouter } from 'next/navigation'

function ViewNotes() {
  const {courseId} = useParams()
  const [notes,setNotes] = useState([]);
  const [stepCount,setStepCount] = useState(0);
  const router = useRouter();
   const GetNotes = async () =>{
    const result = await axios.post("/api/study-type",{
      courseId : courseId,
      studyType : 'notes'
    })

    console.log("result from",result.data);
    setNotes(result.data);
  }

  useEffect(()=>{
    GetNotes();
  },[])
  return notes && (
    <div>
      <div className="flex gap-5 items-center">
        {stepCount !== 0 && (
          <Button
            variant="outline"
            onClick={() => setStepCount(stepCount - 1)}
            size="sm"
          >
            Previous
          </Button>
        )}
        {notes.map((item, index) => (
          <>
            <div
              key={index}
              className={`w-full h-2 rounded-full ${
                index < stepCount ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
          </>
        ))}
        {stepCount !== notes.length && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStepCount(stepCount + 1)}
          >
            Next
          </Button>
        )}
      </div>
      <div>
        <div dangerouslySetInnerHTML={{__html:notes[stepCount]?.notes}}/>
        {notes.length==stepCount && 
        <div className='flex gap-7 items-center flex-col justify-center'>
          
          <h2>
            End of Notes
          </h2>
            <Button onClick={()=> router.back()}>Go to Course Page</Button>
          </div>

        }
      </div>
    </div>
  );
}

export default ViewNotes
