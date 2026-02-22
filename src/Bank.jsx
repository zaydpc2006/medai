import React from 'react'
import { useState } from 'react'
export default function Bank({setBank}) {

  const [card, setCard] = useState("");

  const handleChange = (e) => {
    // remove all non-digits
    let value = e.target.value.replace(/\D/g, "");

    // add space every 4 digits
    value = value.replace(/(.{4})/g, "$1 " ).trim();
    value = value.replace(/(.{9})(.+)/g, "$1?$2" ).trim();
    setCard(value);
  };

  return (
       <div className='absolute z-10 top-0 left-0 w-dvw h-dvh bg-black/80 flex justify-center items-center'>
        <div className=" w-1/4 h-1/3 bg-[#1B1B1B]  rounded-xl p-10 text-white">
        <h2 className='text-white'>Card Number</h2>
        <input maxLength={69}  onChange={handleChange} value={card} className='bg-[#171717] w-4/5 h-7 rounded-[10px] border border-[#2D2D2D] ' type="text" />
        <span className='flex w-full '><span>
            <h2>Expr Date</h2><input type="month" className='bg-[#171717] w-5/5 h-7 rounded-[10px] border border-[#2D2D2D] '  /></span><span><h2>CVV</h2><input className='bg-[#171717] w-5/5 h-7 rounded-[10px] border border-[#2D2D2D] ' type="password" /></span></span>

           





           <button onClick={()=> setBank(prev => !prev )} className='px-3 py-1 bg-white rounded-sm relative top-11/12 left-11/12'>close</button>
        </div>
    </div>
  )
}
