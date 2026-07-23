import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import StudentDetails from './component/StudentDetails'
import Navbar from './component/Navbar'
import EmployePage from './component/EmployePage'
import ProductDetails from './component/ProductDetails'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/StudentPage' element = {<StudentDetails/>}/>
      <Route path='/EmployeDetails' element={<EmployePage/>}/>
      <Route path ='/ProductPage'element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App