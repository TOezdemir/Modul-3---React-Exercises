import { useState } from "react"

function Switch(){

    const [inverted, setInverted] = useState(false)
    const handleClick = () =>{
    setInverted(!inverted)
    document.body.classList.toggle("dark-mode");
}
    return(
        <div className="flex justify-center">
            
            <button onClick={handleClick} className={ inverted ? 
                "mt-20 p-2 rounded-lg border-solid border-2 border-black bg-black text-white": 
                "mt-20 p-2 rounded-lg border-solid border-2 border-white bg-white text-black"}
                >{inverted ? 
                    "Change to Day" : 
                    "Change to Night"}
                </button>
        </div>
    )
}

export default Switch