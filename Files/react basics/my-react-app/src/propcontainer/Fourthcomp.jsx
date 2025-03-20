

import React from 'react'

const Fourthcomp = (props) => {
    const  {name,age,address} = props.excomp
  return (
    <div>
        <div>{name}</div>
        <div>{age}</div>
        <div>{address}</div>
        
    </div>
  )
}

export default Fourthcomp