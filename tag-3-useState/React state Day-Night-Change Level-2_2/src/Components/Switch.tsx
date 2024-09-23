interface SwitchProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
  }

function Switch({ isDarkMode, setIsDarkMode }: SwitchProps){
const handleClick = () =>{
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-mode");
}
    return(
        <div className="flex justify-center">
            
            <button onClick={handleClick} className={ isDarkMode ? 
                "mt-20 p-2 rounded-lg border-solid border-2 border-white bg-black text-white": 
                "mt-20 p-2 rounded-lg border-solid border-2 border-black bg-white text-black"}
                >{isDarkMode ? 
                    "Change to Day" : 
                    "Change to Night"}
                </button>
        </div>
    )
}

export default Switch

// function Switch(){

//     const [inverted, setInverted] = useState(false)
//     const handleClick = () =>{
//     setInverted(!inverted)
//     document.body.classList.toggle("dark-mode");
// }
//     return(
//         <div className="flex justify-center">
            
//             <button onClick={handleClick} className={ inverted ? 
//                 "mt-20 p-2 rounded-lg border-solid border-2 border-white bg-black text-white": 
//                 "mt-20 p-2 rounded-lg border-solid border-2 border-black bg-white text-black"}
//                 >{inverted ? 
//                     "Change to Day" : 
//                     "Change to Night"}
//                 </button>
//         </div>
//     )
// }