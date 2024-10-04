import { createContext, useContext, useState } from "react"

export interface ThemeContext{
    theme: "light" | "dark" | "blue"
    toggleTheme: () => void
}

interface ThemeContextProviderProps{
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContext>(null!)

export function ThemeContextProvider({children}: ThemeContextProviderProps){
    const [theme, setTheme] = useState<"light" | "dark" | "blue">("light")
    
    const toggleTheme = () =>{
        setTheme((prevTheme)=>{
            switch(prevTheme){
                case "light":
                    return "dark";
                case "dark":
                    return "blue";
                case "blue":
                    return "light"
                default:
                    return "light"
            }
        })

    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext)