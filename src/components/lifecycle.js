import { useState } from "react";
export default function Lifecycle(){
    const[data,setdata]=useState(false);
    function handleclick(){
        setdata(!data)
    }
    return(
        <>
        <button onClick={handleclick}>click here to add or delete product</button>
        {data==true?<Lifecycle/>:null}
        </>
    )

}