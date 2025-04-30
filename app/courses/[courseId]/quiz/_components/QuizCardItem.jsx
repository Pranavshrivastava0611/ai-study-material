"use client"
import React from 'react'

import { useState } from 'react'

function QuizCardItem({quiz,userSelectedOption}) {
    const [selectedOption, setSelectedOption] = useState()
  return (
    <div className='mt-10 p-5'>
      <h2 className='font-medium text-3xl text-center'>{quiz.questionText}</h2>
      <div className='grid grid-cols-2 gap-5 mt-6 '>
        {quiz.options.map((option,index)=>(
        <h2 key={index} className={`w-full bg-gray-200 rounded-full p-3 text-center text-lg py-4 hover:bg-gray-300 cursor-pointer ${selectedOption==option && `bg-primary text-white hover:bg-primary`}`} variant="outline" onClick={()=>{
            setSelectedOption(option);
            userSelectedOption(option)
        }}>{option}</h2>
        ))}
      </div>
    </div>
  )
}

export default QuizCardItem
