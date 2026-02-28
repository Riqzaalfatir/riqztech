import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').
            matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition-all duration-300 hover:opacity-70"
        >
            <img
                src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
                alt="theme toggle"
                className="w-6 h-6"
            />
        </button>
    )
}

export default ThemeToggleBtn
