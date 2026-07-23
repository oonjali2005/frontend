import React from 'react'
import EmployeDetails from '../pages/EmployeDetails'

const EmployePage = () => {

  const emp = {name:"Oonjali", email:"oonjali@gmail.com",department:"CSE"}
  return (
    <>
    <EmployeDetails details={emp} />
    
    
    
    </>
  )
}

export default EmployePage