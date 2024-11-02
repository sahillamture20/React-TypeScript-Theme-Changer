import { ReactNode, useState, } from "react";
import Box from "./components/Box";
import { ThemeType, ThemeContext } from "./context/Theme";

const ThemeProvider = ({children} : {children: ReactNode}) => {

  const [theme, setTheme] = useState<ThemeType>("light");

  const themeToggle = () => {
    setTheme((prev) => (prev === "light"? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  )

}

function App() {

  return (
    <ThemeProvider>
      <div style={{
        padding: "10px",
      }}>
        <h1>Theme Changer</h1>
      <p>A theme changer project built with React and TypeScript typically allows users to toggle between different visual themes (like light and dark mode) for an application. It leverages React's useContext hook to provide a centralized theme state, making theme changes instantly reflect across all components without needing to pass props manually.</p>

      </div>
      <Box />
    </ThemeProvider>
  )
}

export default App
