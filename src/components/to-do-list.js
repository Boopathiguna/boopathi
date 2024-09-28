import { useState } from "react";
export default function Todolist(){
    const [task,settask]=useState([]);
    const[newtask,setnewtask]=useState("");
    function handleinput(e){
        setnewtask(e.target.value);

    }
    function addtask(){
        if(newtask.length!==0){
            settask(t=>[...t,newtask]);
        }
    }
    function deletetask(index){
        const updatetask=task.filter((e,i)=>i)
        settask(updatetask);

    }
    return(
        <div>
            <h2>
                TO-DO-LIST:
            </h2>
            <input type="text" placeholder="enter task" onChange={handleinput}/>
            <button onClick={addtask}>Add Task</button>
            <div>
                <ol>
                    {task.map((t,i)=>
                    <li key={i}>{t}
                    <button onClick={()=>deletetask(i)}>Delete</button>
                    </li>
                    )}
                </ol>
            </div>
        </div>

    )
}