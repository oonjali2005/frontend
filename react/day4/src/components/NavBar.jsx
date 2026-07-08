import React from 'react'

const NavBar = () => {
    
  return (
    <>
     <div className='p-5 bg-amber-800  text-amber-50 flex justify-between '>
         <div><h4>logo</h4></div>
         <div className='flex gap-3'>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
            <a href=''>Help</a>
         </div>
     </div>
    </>
  )
}

export default NavBar