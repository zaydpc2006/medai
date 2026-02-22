import React from 'react'
import { useState } from 'react'
export default function Bank({setBank}) {
  const [code, setCode] = useState(false);
  const [card, setCard] = useState("");
   const [numcod, setNumCod] = useState("");
console.log( "code", code);
  const handleChange = (e) => {
    // remove all non-digits
    let value = e.target.value.replace(/\D/g, "");
    // add space every 4 digits
    value = value.replace(/(.{4})/g, "$1 " ).trim();
    setCard(value);
  };

 

return (
  <>
    {code && <Code setCode={setCode} />}
    <div className='absolute z-10 top-0 left-0 w-dvw h-dvh bg-black/80 flex justify-center items-center '>
      <div className=" flex flex-col gap-6 w-1/4 h-1/3 bg-[#1B1B1B]  rounded-xl p-5 text-white">
        <h2 className='text-white'>Card Number</h2>
        <input maxLength={19}  onChange={handleChange} value={card} className='bg-[#171717] w-4/5 h-7 rounded-[5px] border border-[#2D2D2D] ' type="text" />
        <span className='flex gap-6 w-full '><span>
            <h2>Expr Date</h2><input type="month" className='bg-[#171717] w-5/5 h-7 rounded-[5px] border border-[#2D2D2D] '  />  </span><span><h2>CVV</h2><input maxLength={4} className='bg-[#171717] w-3/5 h-7 rounded-[5px] border border-[#2D2D2D] ' type="password" /></span></span>
        <button onClick={()=>setCode(code => !code)} className='bg-white text-black px-4 py-2 rounded-md shadow-white shadow-md'>Confirme Payment</button>
        <button onClick={()=> setBank(prev => !prev )} className='px-3 py-1 text-black bg-white rounded-sm relative top-11/12 left-11/12'>close</button>
      </div>
    </div>
  </>
)
}
 export function Code({setCode}) {
    const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 " ).trim();
    setNumCod(value);
  };
     const [numcod, setNumCod] = useState("");
  return (
    <div className='absolute z-20 top-0 left-0 w-dvw h-dvh bg-black/80 flex justify-center items-center'>
        <div className=" w-1/3 h-1/6 bg-[#1B1B1B]  rounded-xl p-10">
           <h2 className='text-white'>Code Number</h2>
        <input maxLength={9} placeholder='XXXX XXXX'  onChange={handleChange} value={numcod} className='bg-[#171717] w-4/5 h-7 rounded-[5px] text-white border border-[#2D2D2D] ' type="text" />



           <button  className='m-1 px-3 py-1 bg-white rounded-sm '>Validate</button>
            <button onClick={()=>setCode(code => !code)} className='px-3 py-1 bg-white rounded-sm '>CLOSE</button>
        </div>
      
    </div>
  )
}