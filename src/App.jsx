import { useState } from 'react'

import Chat from './Chat'
import Navbar from './Navbar'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chat />} />
    </Routes>
    <Navbar />

    </BrowserRouter>
  )
}

export default App
