"use client"

import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'
import axios from 'axios'



function StudyMaterialSection({courseId,course}) {

    const [studyTypeContent,setStudyTypeContent] = useState();
    const getStudyMaterial = async () => {
        try {
            const result = await axios.post('/api/study-type', {
                courseId: courseId,
                studyType: 'ALL'
            });
            console.log("result from the studyMaterial", result?.data);
            setStudyTypeContent(result.data);
        } catch (error) {
            console.error("Error fetching study material:", error);
        }
    };
    

    useEffect(()=>{
        getStudyMaterial();
    },[])
    const materialList = [
         {
            name : 'Notes/Chapters',
            desc : 'Read notes to prepare it',
            icon : '/notes.png',
            path:'/notes',
            type : 'notes'
         },{
            name : 'Flashcard',
            desc : 'Flashcard help to remember the concepts',
            icon : '/flashCard.png',
            path:'/flashcards',
            type : 'flashCard'
         },{
            name : 'Quiz',
            desc : 'Great way to test your knowledge',
            icon : '/quiz.png',
            path:'/quiz',
            type : 'quiz'
            
         }
    ]
  return (
    <div>
       <h2 className='font-medium text-xl'>Study Material</h2>
       <div className='grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-x-4 mt-3'>
        {materialList.map((item,index)=>(
     
            <MaterialCardItem item={item} key={index} studyTypeContent={studyTypeContent} course={course} refreshData={getStudyMaterial}/>
  
        ))}
       </div>
    </div>
  )
}

export default StudyMaterialSection
