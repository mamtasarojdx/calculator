import React, { useReducer } from 'react'
import "./UseReducer.css"

const initialState = 0;

const reducer = (currentState,action)=>{
   switch(action){
    case "increment":
        return currentState+5
    case "decrement":
        return currentState-5
    case "reset":
        return initialState
    default:
        return currentState
   }
}

function UseReducer() {
    const[count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
     <section className='reducer-1'>
      <h1 className='count'>Count: {count}</h1>
      <div className='reducer-2 d-flex align-items-center'>
      <h1 onClick={()=>dispatch("increment")} id='increment-1'>+</h1>
      <h1 onClick={()=>dispatch("decrement")} id='decrement-1'>-</h1>
      <h2 onClick={()=>dispatch("reset")} id='reset-1'>Reset</h2></div>
      </section>
    </div>
  )
}
export default UseReducer
