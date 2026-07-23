import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='flex justify-between bg-pink-300 p-5 text-2xl item-center'>
    <div className='mx-10 bg-violet-500 text-white p-3 rounded-10  '>
        Logo
    </div>
    <div className='flex justify-center gap-5 mx-10 '>
       <Link to="/">Home</Link> 
       <Link to="/StudentPage">Student</Link>
       <Link to="/EmployeDetails">Employe</Link>
       <Link to="/ProductPage">Product</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar