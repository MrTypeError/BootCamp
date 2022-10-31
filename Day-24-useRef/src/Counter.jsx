import React from 'react'
import { useRef } from 'react'

export default function Counter() {
    const count = useRef(0);
    function handleClick(){
       count.current = count.current+1; 
       alert("clicked Count" + count.current);
    }
  return (
    <button onClick={handleClick}>Click Me</button>
  )
}
