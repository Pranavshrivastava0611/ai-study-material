"use client";

import React from "react";

function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters || []; // Avoids undefined error

  return (
    <div className="mt-5">
      <h2 className="font-medium text-xl">Chapters</h2>
      <div className="mt-3">
        {CHAPTERS.length > 0 ? (
          CHAPTERS.map((chapter, index) => (
            
            <div key={index} className="flex gap-5 items-center p-4 border shadow-md rounded-lg  mb-2 cursor-pointer">
                <h2 className="text-2xl">{chapter?.emoji}</h2>
                <div>
                    <h2 className="font-medium">{chapter?.chapter_title}</h2>
                    <p className="line-clamp-2 text-gray-400 text-sm">{chapter.chapter_summary}</p>
                </div>
              
            </div>
          ))
        ) : (
          <p className="text-gray-500">No chapters available</p>
        )}
      </div>
    </div>
  );
}

export default ChapterList;
