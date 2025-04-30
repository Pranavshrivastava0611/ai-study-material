"use client"
import React from 'react';
import { CourseCountContext } from "../_context/CourseCountContext";
import DashboardHeader from './_components/DashboardHeader';
import Sidebar from './_components/Sidebar';
import { useState } from 'react';


function DashboardLayout({children}) {
  const [totalCourses, setTotalCourses] = useState(0);
  return (
    <CourseCountContext.Provider value={{ totalCourses, setTotalCourses }}>
    <div>
        <div className='md:w-64 hidden md:block fixed'>
          <Sidebar/>
        </div>
        <div className='md:ml-64 '>
          <DashboardHeader/>
          <div className='p-10'>
            {children}
          </div>

        </div>
    </div>
    </CourseCountContext.Provider>
  )
}

export default DashboardLayout
