import Switch from "./Components/Switch"
import { useState } from "react"

function App() {
const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div>
  <h1 className={isDarkMode ? 
    "mt-72 text-center text-black font-bold text-8xl" : 
    "mt-72 text-center text-white font-bold text-8xl"}>
      {isDarkMode ? "Day" : "Night"}
    </h1>
    <Switch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </div>
    
  )
}

export default App
