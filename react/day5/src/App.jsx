import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Contact from './component/Contact'
import Help from './component/Help'



const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Help" element={<Help/>}/>
   </Routes>
    </>
  )
}

export default App
