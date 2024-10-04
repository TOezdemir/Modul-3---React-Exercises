import { useThemeContext } from "./themeContextProvider"


export interface ThemeContext{
    theme: "light" | "dark" | "blue",
    toggleTheme: () => void
}

export interface ThemeContextProviderProps{
    children: React.ReactNode
}

function ThemeSwitcher(){
    const {theme, toggleTheme} = useThemeContext()
    return(
        <button className="py-2 px-2 cursor-pointer text-lg"
        onClick={toggleTheme}>Switch Theme (current: {" "}
        { theme === "light" 
        ? "light" 
        : theme === "dark" 
        ? "dark" 
        : "blue"})</button>
    )
}


export default ThemeSwitcher
