import { useState,useEffect} from "react";
export default function Effect2(){
    const [count,setcount]=useState(1);
    function handlestate(){
        setcount(count+1)
    }
    useEffect(()=>{
        document.title=`count:${count}`
    },[])
    return(
        <div>
            <h3>state  value:{count}</h3>
            <button onClick={handlestate}>Increment state</button>
        </div>

    )
}