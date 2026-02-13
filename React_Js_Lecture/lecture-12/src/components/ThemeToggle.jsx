import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  
  const {theme , toggleTheme} = useTheme()

  return(
    <button className="bg-gray-700 p-3 rounded-xl text-white cursor-pointer" onClick={toggleTheme}>{theme === "light" ?  "Dark" : "Light"}</button>
  )
}

export default ThemeToggle