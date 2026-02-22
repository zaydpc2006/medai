import { useState } from 'react'

import Rocket from './assets/rocket.svg'
import Arrow from './assets/arrow.svg'
import Overlay from './Overlay'
import Mic from './assets/mic.svg'
export default function Chat() {
   const [overlay , setOverlay] = useState(false);



  return (
    <>
    {overlay && <Overlay setOverlay={setOverlay}/>}
    <div className='w-full h-dvh bg-black m-0 justify-center items-center flex flex-col gap-5'>
            <h2 className='text-white text-6xl font-semibold '>Doc Ai</h2>
            <h2 className='text-zinc-800 text-lg'>You Medical AI assistent</h2>

        <div className='bg-[#171717] w-2/5 h-25 rounded-[10px] border border-[#2D2D2D] flex flex-col justify-around p-2 gap-3'>
        <input type="text" placeholder='Type to start' className='text-white w-9/12 h-10 bg-trasparent outline-none p-2'/>
     
        <span className='flex gap-120'>
            <div onClick={()=>setOverlay(!overlay)}  className='cursor-pointer flex opacity-40 gap-2 font-extralight  items-center bg-[#101010] h-7 w-30 outline-none rounded-[10px] p-2  text-white'>
              <img src={Rocket} className='w-4 h-4 opacity-30'/>
              <h2>Rapid V2</h2>
            </div>
            <span className='flex gap-4'>
              <button className='p-1 bg-transparent rounded-full '><img src={Mic} alt="" /></button>
              <button className='p-1 bg-white rounded-full '><img src={Arrow} alt="" /></button>

            </span>
       </span>
        </div>
       
    </div>
  
    </>
  )
}
