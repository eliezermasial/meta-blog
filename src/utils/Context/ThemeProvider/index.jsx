import { useEffect, useState } from "react";
import { ThemeContext } from '../ThemeContext';

export const ThemeProvider = (({children}) => {
    
    // Initialize the theme state with the value from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    })

    useEffect(() => {

        const root = window.document.documentElement; // Get the root element of the document

        if(theme === 'dark') {

            root.classList.add('dark');
        }else {

            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme); // Save the theme in localStorage

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark'); // Toggle between dark and light theme
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
})