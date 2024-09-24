import { useState } from "react"



                //Wieso rot?!
function Spoiler({children}:{children: React.ReactNode}){
    // Zustand bestimmen
    const[revealed, setRevealed] = useState(false)
    // Funktion um die Spanelemente klickbar zu machen
    const handleClick = ()=>{
        setRevealed(!revealed)
    }


    return(
        <span onClick={handleClick}
                                    //Ternary Operator!!
        className={`cursor-pointer ${revealed ? "text-black" : "bg-black text-black hover:text-white"}`}
        // Hier auch!!!
        >{revealed ? children : "GIB SPOILER"}
        </span>
        
    )
}

export default Spoiler

// interface SpoilerProps{
//     children: React.ReactNode
// }


//                 //Wieso rot?!
// function Spoiler(props: SpoilerProps){
//     // Zustand bestimmen
//     const[revealed, setRevealed] = useState(false)
//     // Funktion um die Spanelemente klickbar zu machen
//     const handleClick = ()=>{
//         setRevealed(!revealed)
//     }


//     return(
//         <span onClick={handleClick}
//                                     //Ternary Operator!!
//         className={`cursor-pointer ${revealed ? "text-black" : "bg-black text-black hover:text-white"}`}
//         // Hier auch!!!
//         >{revealed ? props.children : "GIB SPOILER"}
//         </span>
        
//     )
// }

// export default Spoiler