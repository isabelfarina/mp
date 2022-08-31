import { useEffect } from "react";
import create from "zustand";

type ThemeChoice = "dark" | "light"

interface ThemeState {
    active: ThemeChoice, setActive: (val: ThemeChoice) => void
}

const useThemeStore = create<ThemeState>(
(set) => ({
    active: "dark",
    setActive: (val) => set(() => ({active: val}))
})
)
const getInitialTheme = (): ThemeChoice => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('polo-theme');
        
        if (!!storedPrefs) {
            return storedPrefs as ThemeChoice;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

   return 'light'  
}
const useTheme = () => {
    const {active, setActive} = useThemeStore()

    useEffect(() => {
        const theme = getInitialTheme()
        setActive(theme)
    }, [])

    useEffect(() => {
        const root = window.document.documentElement;
        const isDark = active === "dark";
        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(active)
        localStorage.setItem("polo-theme", active)
    },[active])

console.log(active)
};
export default useTheme;