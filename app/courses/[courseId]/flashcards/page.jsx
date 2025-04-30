"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import FlashcardItem from "./_components/FlashcardItem";
import { 
  Carousel, 
  CarouselItem, 
  CarouselContent, 
  CarouselNext, 
  CarouselPrevious 
} from "../../../../components/ui/carousel";

function Flashcard() {
  const { courseId } = useParams();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [api,setApi] = useState();

  useEffect(()=>{
    if(!api){
        return ;
    }

    api.on('select',()=>{
        setIsFlipped(false);
    })
  },[api])

  const GetFlashCards = async () => {
    const result = await axios.post('/api/study-type', {
      courseId: courseId,
      studyType: 'Flashcard'
    });
    console.log("result from the flashcard", result.data);
    setFlashCards(result.data.content);
  };
  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    console.log("flashcards", flashCards);
  }, [flashCards]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl text-center">Flashcards</h2>
      <p className="text-center mt-2 text-gray-600">
        Flashcards: The Ultimate Tool to Lock in Concepts!
      </p>

      <div className="flex items-center justify-center mt-10">
        <div className="relative w-full max-w-2xl">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {flashCards.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center"
                >
                  <FlashcardItem
                    isFlipped={isFlipped}
                    handleClick={handleClick}
                    front={item.front}
                    back={item.back}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
