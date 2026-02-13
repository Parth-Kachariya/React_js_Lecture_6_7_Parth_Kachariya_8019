import { createContext , useContext , useEffect , useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

  const [theme , setTheme] = useState("light")

  useEffect(() => {
    const save = localStorage.getItem("theme")
    if(save) {
      setTheme(save)
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("theme",  theme)
    document.body.className = theme
  } , [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return(
    <ThemeContext.Provider value={{theme , toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider