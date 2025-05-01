"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../../../../components/ui/button';
import { RefreshCcw } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function MaterialCardItem({ item, studyTypeContent, course, refreshData }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const GenerateContent = async () => {
    setLoading(true);
    let chapters = '';
    course?.courseLayout?.chapters?.forEach((chapter) => {
      chapters += (chapter?.chapter_title || chapter?.chapterTitle) + ',';
    });

    try {
      const result = await axios.post('/api/study-type-content', {
        courseId: course?.courseId,
        type: item.name,
        chapters: chapters,
      });

      console.log("Generated content:", result);
      refreshData(true);
    } catch (err) {
      console.error("Error generating content:", err);
    }

    setLoading(false);
  };

  const isContentReady = () => {
    const content = studyTypeContent?.result?.[item.type];

    if (!content) return false;

    if (Array.isArray(content)) {
      return content.length > 0;
    }

    // Handle object content like quiz
    if (typeof content === 'object' && content?.questions) {
      return Array.isArray(content.questions) && content.questions.length > 0;
    }

    return false;
  };

  const ready = isContentReady();

  const handleViewClick = () => {
    if (ready) {
      router.push(`/courses/${course?.courseId}${item.path}`);
    }
  };

  return (
    <div
      className={`border shadow-md rounded-lg p-5 flex flex-col items-center ${
        !ready && 'grayscale'
      }`}
    >
      <h2
        className={`p-1 px-2 rounded-full text-[10px] mb-2 text-white ${
          ready ? 'bg-green-500' : 'bg-gray-500'
        }`}
      >
        {ready ? 'Ready' : 'Generate'}
      </h2>

      <Image src={item.icon} alt={item.name} height={50} width={50} />
      <h2 className="font-medium">{item.name}</h2>
      <p className="text-gray-500 text-sm text-center">{item.desc}</p>

      <Button
        className="mt-3 w-full"
        variant="outline"
        onClick={!ready ? GenerateContent : handleViewClick}
        disabled={loading}
      >
        {loading && <RefreshCcw className="animate-spin mr-2" />}
        {!ready ? 'Generate' : 'View'}
      </Button>
    </div>
  );
}

export default MaterialCardItem;
