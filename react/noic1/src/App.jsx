import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test1 from './Test1'
import Counter from './Counter'

function App() {
 
  let x =10;
  let y = 20;

  function myFunction() {return "Hello";}
  function sum(a, b) {return a+b}

  return (
   <div>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita veniam, ea maxime modi illum, quasi, in dolor laborum recusandae aspernatur doloremque aliquid ipsa sed voluptates animi vel quo? Nulla, dignissimos?</p>
    
    <p>{x+y}</p>

    {myFunction()} {/* function callin */}
    <br></br>
    {sum(5,5)}

    <Test1 />
    <br />
    <Counter />

   </div>   
  )
}

export default App
