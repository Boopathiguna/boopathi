import { useState,useRef } from "react";
export default function UseRefcomp(){
    const [count,setcount]=useState(0);
    const data=useRef(0);
    function handlestate(){
        setcount(count+1)
        console.log(count);
        
    }
    function handleref(){
        data.current=data.current+1
        console.log(data.current);
        
    }
    return(
        <div>
            <h1>state value:{count}</h1>
            <h1>Ref value:{data.current}</h1>
            <button onClick={handlestate}>Increment state value</button>
            <button onClick={handleref}>Increment ref value

            </button>
        </div>

    )
}