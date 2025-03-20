import React from 'react'
import Firstcomp from './propcontainer/Firstcomp'
import Secondcomp from './propcontainer/Secondcomp'
import Thirdcomp from './propcontainer/Thirdcomp'
import Fourthcomp from './propcontainer/Fourthcomp'
import Statemngt from './Statemngt'
import Button from './Button'

// let a = "Apples"
// let b = "Bananas"
const user ={
  area:'jalimudi',
  address:'house',
  age:25
}
const excomp={
  name:'Rahul',
  age:25,
  address:'jalimudi'

}

function App() {
  return (
    <div>
      <Firstcomp  name='manoj'/>
      < Secondcomp name={user.area}/>
     <Thirdcomp name={user.address}/>
      <Fourthcomp excomp={excomp}/>
      <Statemngt />
      <Button/>
      
     </div>
  )
}

export default App