import React from 'react'
import { useState } from 'react'

export default function CardPrice({
  title,
  description,
  features = [],
  buttonText,
  setBank
}) {
  return (
    <div className='w-1/5 h-2/3 bg-[#171717] border border-[#2D2D2D] rounded-[10px]'>
      <h1 className='text-4xl font-bold text-white text-center mt-5'>{title}</h1>
      <p className='w-3/4 text-sm text-white text-justify mx-auto mt-5'>{description}</p>
      <ul className='text-sm text-zinc-600 list-disc w-3/4 text-left mt-5 mb-5 mx-auto'>
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button onClick={()=>setBank(prev => !prev)} className='bg-white hover:bg-blue-200 text-black  py-2 px-4 rounded mx-auto block'>{buttonText}</button>
    </div>
  )
}
