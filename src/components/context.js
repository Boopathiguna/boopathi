import { useState } from "react";
export default function Context(){
    const[course,setcourse]=useState("REACT");
    return(
        <div>
            <h1>{course}course started</h1>
            <Comp1 data={course}/>
            
            
        </div>
    )
    function Comp1(){
        return(
            <div>
                <h1>Comp1</h1>
                <Comp2 />
            </div>
        )
    }
    function Comp2(props){
        return(
            <div>
                <h1>Comp2</h1>
                <Comp3/>
            </div>
        )
    }
    function Comp3(props){
        return(
            <div>
                <h1>Comp3</h1>
                <Comp4 />
            </div>
        )
    }
    function Comp4(){
        return(
            <div>
                <h1>{course}Course ended </h1>
            </div>
        )
    }
}