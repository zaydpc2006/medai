import React from 'react'
import {Link} from 'react-router-dom'
import vip from './assets/vip.svg'
import home from './assets/home.svg'
export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-10 h-dvh border-r-white border flex flex-col justify-center items-center gap-5'>
       <Link to="/"><img src={home} className='w-6 h-6'/></Link>
        <Link to="/vip"><img src={vip} className='w-6 h-6'/></Link>
    </div>
  )
}
