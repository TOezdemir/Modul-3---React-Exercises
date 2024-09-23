import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)
    const add = ()=>{
        setCount((count)=>(count+ 1))
    }

    const take = () =>{
        setCount((count)=>(count -1))
    }

    const reset = () =>{
        setCount(0)
    }

    return(
        <div className="flex flex-wrap justify-center">
            <button onClick={take} className="m-2 p-2 rounded-lg bg-sky-200">-</button>
            <button className="p-2 rounded-lg bg-sky-400" >{count}</button>
            <button onClick={add} className="m-2 p-2 rounded-lg bg-sky-200">+</button>
            <button onClick={reset} className="p-2 rounded-lg bg-sky-100">Reset</button> 
        </div>
        
    
    )
}

export default Counter