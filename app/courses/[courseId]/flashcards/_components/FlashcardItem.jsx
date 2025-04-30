"use client"
import React from 'react'
import ReactCardFlip from 'react-card-flip'

function FlashcardItem({isFlipped,handleClick,front,back}) {

  return (
    <div className='flex items-center justify-center'>
       <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='bg-primary p-2 text-white shadow-2xl flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]' onClick={handleClick}>
          <h2 className=''>{front}</h2>
        </div>
        <div className='bg-white shadow-2xl  p-2 text-primary flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]' onClick={handleClick}>
          <h2 className=''>{back}</h2>
        </div>

      </ReactCardFlip>
    </div>
  )
}

export default FlashcardItem
