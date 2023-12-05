import React,{useState} from 'react'

const Hook=()=>{
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1)
    }
    return(
        <div>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>

    );
};
     export default Hook;
