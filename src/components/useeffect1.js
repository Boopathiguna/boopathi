import { useEffect, useState } from "react";
export default function Effect1(){
    const[count,setcount]=useState(0);
    function handlestate(){
        setcount(count+1)
    }
    useEffect(()=>{
        document.title=`count:${count}`
    })
    return(
        <div>
            <h3>state value:{count}</h3>
            <button onClick={handlestate}>Increment state</button>
        </div>

    )
}