import React from 'react'

const App = () => {
  let data=0
  const handleclick=()=>{

  }
  data=10
  return (
    <>
    <p>{data}</p>
    <button className='border' onClick={handleclick}>click</button>
    </>
  )
}

export default App

