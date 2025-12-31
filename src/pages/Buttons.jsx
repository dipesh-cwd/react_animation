import React from 'react'
import  {Sample}  from '../components'

const Buttons = () => {
  return (
    <>
    
    <Sample children ="Click Me 1 !" stiffness={900} damping={0} type="spring" />
     
      
    <Sample children ="Click Me 2 !" stiffness={500} damping={1} />

     
    <Sample children ="Click Me 3 !" stiffness={700} damping={2} />


     
    <Sample children ="Click Me 4 !" stiffness={300} damping={3} />
    
    <Sample children ="Perfect Animation"/>
    </>
    
  )
}

export default Buttons;
