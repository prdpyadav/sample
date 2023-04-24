import React from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Question = () => {
  return (
    <div className='flex justify-between p-2 border lg:w-56 bg-gray-100 lg:h-8'>
      <div className='font-extrabold cursor-pointer'>
        <FaRegArrowAltCircleLeft />
      </div>
      <div className='mt-[-4px]'>Question 6 of 45</div>
      <div className='font-extrabold cursor-pointer'>
        <FaRegArrowAltCircleRight />
      </div>
    </div>
  )
}

export default Question