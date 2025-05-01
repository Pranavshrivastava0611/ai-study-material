"use client";

import React, { useEffect, useState } from 'react';
import MaterialCardItem from './MaterialCardItem';
import axios from 'axios';

function StudyMaterialSection({ courseId, course }) {
  const [studyTypeContent, setStudyTypeContent] = useState();

  const getStudyMaterial = async () => {
    try {
      const result = await axios.post('/api/study-type', {
        courseId: courseId,
        studyType: 'ALL',
      });
      console.log("result from the studyMaterial", result?.data);
      setStudyTypeContent(result.data);
    } catch (error) {
      console.error("Error fetching study material:", error);
    }
  };

  useEffect(() => {
    getStudyMaterial();
  }, []);

  const materialList = [
    {
      name: 'Notes/Chapters',
      desc: 'Read notes to prepare it',
      icon: '/notes.png',
      path: '/notes',
      type: 'notes',
    },
    {
      name: 'Flashcard',
      desc: 'Flashcards help to remember the concepts',
      icon: '/flashCard.png',
      path: '/flashcards',
      type: 'flashCard',
    },
    {
      name: 'Quiz',
      desc: 'Great way to test your knowledge',
      icon: '/quiz.png',
      path: '/quiz',
      type: 'quiz',
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        📚 Study Material
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materialList.map((item, index) => (
          <MaterialCardItem
            key={index}
            item={item}
            studyTypeContent={studyTypeContent}
            course={course}
            refreshData={getStudyMaterial}
          />
        ))}
      </div>
    </section>
  );
}

export default StudyMaterialSection;
