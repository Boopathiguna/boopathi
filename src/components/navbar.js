export default function Navbar(){
    const data=[1,2,3,4,5];
    const arun=[{id:1,username:"ram",age:26},
        {id:2,username:"boo",age:30},
        {id:3,username:"arun",age:24}]
    return(
        <div>
            <h1>im in Navbar components</h1>
            {data.map((num,i)=><li key={i}>{num}</li>)}
            {arun.map((d)=><li key={d.id}>{d.username}-{d.age}</li>)}
        </div>

    )
}