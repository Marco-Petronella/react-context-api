import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        document.body.classList.toggle("dark-mode", mode === "dark");
    }, [mode]);

    return (
        <ThemeContext.Provider
            value={{
                mode,
                setMode,
            }}
        >   
            {children}
        </ThemeContext.Provider>
    )
}
function useTheme() {   
    const theme = useContext(ThemeContext);
    return theme;
}   

export { ThemeProvider, useTheme }