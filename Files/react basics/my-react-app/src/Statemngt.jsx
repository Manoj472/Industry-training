import React, { useEffect } from 'react'
import { useState } from 'react'

const Statemngt = () => {
 
    const [city, setCity] = useState('hyderabad');
 
    if(city === "hyderabad")
 {
    setCity("jalimudi")
 }
 
 useEffect(()=>{
    if(city === "hyderabad")
        {
           setCity("jalimudi")
        }
    else{
        setCity("mumbai")
    }
 },[])
  return (
    <div>
        <h1>iam from {city}</h1>
    </div>
  )
}

export default Statemngt