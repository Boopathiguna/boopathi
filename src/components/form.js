import { useState } from "react";
export default function Form(){
    const [data,setData]=useState();
    const handlestate=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData((previousdata)=>({
            ...previousdata,[name]:value
        }))
        console.log(data);
        
    }

    return(
        <div>
            <input type="text" name="username" onChange={handlestate}/>
            <hr/>
            <input type="email" name="email" onChange={handlestate}/>
            <hr/>
            <input type="password" name="password" onChange={handlestate}/>
            <hr/>
            <select onChange={handlestate} name="courses">
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='JS'>JS</option>
                <option value='REACT'>React</option>
                <option value='python'>python</option>
                </select>

        </div>

    )
}