"use client"
import React, { useState,useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import CourseIntroCard from './_components/CourseIntroCard';

function Courses() {
    const {courseId} = useParams();
    const [course,setCourse] = useState();
    
    const GetCourse = async ()=>{
        const coursget = await axios.get('/api/courses?courseId='+courseId);
        setCourse(coursget.data.result);
    }

    useEffect(()=>{
        GetCourse();
    },[])

  return (
    <div>
     <DashboardHeader/>
     <div className='mx-10 md:mx-36 lg:px-60 mt-10'>
      <CourseIntroCard course={course}/>
      </div>
    </div>
  )
}

export default Courses
