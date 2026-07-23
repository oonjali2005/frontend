import React from 'react'

const StudentPage = ({name,age,course}) => {
  return (
    <>
    <div className='flex item-center justify-center'>
    <div className='bg-green-200 w-60 text-center '>
      <h2 className='text-2xl'>Student Details</h2>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Course:{course}</p>
    </div>
    </div>
    
    
    </>
  )
}

export default StudentPage