import { useEffect, useState } from "react"


function App() {
  const [count,setCount] = useState(0)
  const [nextCount,setNextCount] = useState(0)
  // first type 
  useEffect(()=>{
    console.log("Not count wala useEffect")
  },[])
  
  // second type 
  useEffect(()=>{
    
      console.log("count wala useEffect")
  },[count])

  // third type
  useEffect(()=>{
console.log("Third useEffect was called")
  })
  return (
    <>
       <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{nextCount}</h1>
      <button onClick={()=>setNextCount(nextCount+1)}>+</button>

    </>
  )
}


export default App


// //useState function code


// // import Button from './Button'

// // import rrd from 'react-router-dom'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { useState } from 'react'
// function App() {

// const [count,setCount]=useState(0)
//   const [ name,setName ]=useState("Nitesh")
  
//   return(
//     <>
// <h1>{count}</h1>
// <button onClick={()=>setCount(count + 1)}>+</button>
// <button onClick={()=>setCount(count - 1)}>-</button>
// <h2>{name}</h2>
// <button onClick={()=>setName("Boka")}>Change Name</button>
// </>
// )
// }
// export default App

