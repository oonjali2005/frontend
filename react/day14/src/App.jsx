import { useState } from "react"

const App = () => {
  const[data,setData]=useState("")
  const[store,setStore]=useState("")
   const handlechage=(e)=>{
     setData(e.target.value)
   }
   const handleSubmit=(e)=>{
    e.preventDefault()
    

    
   }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter your Details' value={data} onChange={handlechage}/>
      <input type='submit' value="Register"/>
    </form>
    </>
  )
}

export default App
