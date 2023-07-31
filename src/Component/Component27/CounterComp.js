import React from 'react';
import { useState }from "react";
import "../../App.css"

export default function CounterComp(){
    const [counter,setCounter]=useState(0);
    const Increment=()=>{
        setCounter (counter +1);

    }; 
    const Decrement=()=>{
        setCounter (counter -1);

    };
 return (
    <div class="mt-5 pt-5">
      <h1>Counter :{counter}</h1>
      <button onClick= {Increment}>Increment</button>
      <button  className="gap" onClick={Decrement}>Decrement</button>
    </div>
  );
 }
