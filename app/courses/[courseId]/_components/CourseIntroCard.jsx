"use client";
import React from 'react';
import Image from 'next/image';

function CourseIntroCard({ course }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-center sm:items-start p-5 sm:p-8 md:p-10 border shadow-md rounded-lg w-full">
      <div className="flex-shrink-0">
        <Image 
          src="/knowledge.png" 
          width={70} 
          height={70} 
          alt="Knowledge icon"
          className="w-16 h-16 sm:w-[70px] sm:h-[70px]"
        />
      </div>

      <div className="text-center sm:text-left w-full">
        <h2 className="font-bold text-xl sm:text-2xl">
          {course?.courseLayout.course_title}
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-700">
          {course?.courseLayout?.course_summary}
        </p>

        <h2 className="mt-3 text-sm sm:text-lg text-blue-700 font-medium">
          Total Chapters: {course?.courseLayout?.chapters?.length || 0}
        </h2>
      </div>
    </div>
  );
}

export default CourseIntroCard;
