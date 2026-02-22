import React from 'react'

export default function Overlay({setOverlay}) {
  return (
    <div className='absolute z-10 top-0 left-0 w-dvw h-dvh bg-black/80 flex justify-center items-center'>
        <div className=" w-1/3 h-1/3 bg-[#1B1B1B]  rounded-xl p-10">
           



           <button onClick={()=> setOverlay(prev => !prev )} className='px-3 py-1 bg-white rounded-sm relative top-11/12 left-11/12'>close</button>
        </div>
      
    </div>
  )
}
