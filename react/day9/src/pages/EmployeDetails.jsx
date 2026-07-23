import React from 'react'

const EmployeDetails = ({details}) => {
  return (
    <>
   <div className='flex item-center justify-center'>
    <div className='bg-green-200 w-60 text-center '>
      <h2 className='text-2xl'>Student Details</h2>
      <p>Name:{details.name}</p>
      <p>Email:{details.email}</p>
      <p>Department:{details.department}</p>
    </div>
    </div>
    
    </>
  )
}

export default EmployeDetails