import { useState,createContext,useContext } from "react";
const contextPKg =createContext();
export default function Context2(){
    const [course,setcourse]=useState("REACT");
    return(
       <contextPKg.Provider value={course}>
    <div>
            <h1>{course}course started</h1>
            <Comp1/>
        <Comp2/>
        <Comp3/>
        <Comp4/>
        <Comp5/>
        </div>

        </contextPKg.Provider>
      
        
       
    )}
    function Comp1(){
        return(
            <h1>comp1</h1>
        )
    }
function Comp2(){
        return(
            <h1>comp2</h1>
        )
    }
function Comp3(){
        return(
            <h1>comp3</h1>
        )
    }
function Comp4(){
        return(
            <h1>comp4</h1>
        )
    }
function Comp5(){
        const cr=useContext(contextPKg)
        return(
            <>
            <h1>{cr}course ended</h1>
            </>

        )
    }
