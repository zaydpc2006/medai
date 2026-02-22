import { useState } from 'react'

import Chat from './Chat'
import Vip from './Vip'
import Navbar from './Navbar'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chat />} />
            <Route path='/vip' element={<Vip />} />
    </Routes>
    <Navbar />

    </BrowserRouter>
  )
}

export default App
