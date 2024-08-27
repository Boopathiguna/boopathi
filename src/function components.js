import { useState } from "react";
export default function Functioncomponents(){
    const[count,setcount]=useState(0);
    function handlestateIncrement(){
        setcount(count+1);
    }
    function handlestateDecrement(){
        setcount(count-1);
    }
    return(
        <div>
            <h1>im in function components</h1>
            <h3>state value:{count}</h3>
            <button onClick={handlestateIncrement}>Increment</button>
            <button onClick={handlestateDecrement}>Decrement</button>

        </div>




    )
}