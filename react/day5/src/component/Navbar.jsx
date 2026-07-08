import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='p-5 bg-blue-700  text-amber-50 flex justify-between '>
         <div><h4>logo</h4></div>
         <div className='flex gap-3'>
           <Link to="/">Home</Link>
           <Link to="/Contact">Contact</Link>
           <Link to="/Help">Help</Link>
         </div>
     </div>
    </>
  )
}

export default Navbar