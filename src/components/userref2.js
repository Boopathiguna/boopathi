import { useRef, useState } from "react";
export default function Usercomp2(){
    const data1=useRef(null);
    const data2=useRef(null);
    const data3=useRef(null);
    function handleRef1(){
        data1.current.focus();
        data1.current.style.backgroundColor="yellow";
        data2.current.style.backgroundColor="";
        data3.current.style.backgroundColor="";

    }
    function handleRef2(){
        data2.current.focus();
        data1.current.style.backgroundColor="";
        data2.current.style.backgroundColor="yellow";
        data3.current.style.backgroundColor="";


    }
    function handleRef3(){
        data3.current.focus();
        data1.current.style.backgroundColor="";
        data2.current.style.backgroundColor="";
        data3.current.style.backgroundColor="yellow";
        
    }
    return(
        <div>
            <input ref={data1}></input>    <button onClick={handleRef1}>click here</button><br/>
            <input ref={data2}></input>    <button onClick={handleRef2}>click here</button><br/>
            <input ref={data3}></input>     <button onClick={handleRef3}>click here</button><br/>
           
        
        </div>
    )

}