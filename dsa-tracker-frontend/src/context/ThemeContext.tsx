import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    toggleTheme: () => void; 
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => { },
    toggleTheme: () => { },
});

type Props = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme;
        if (saved) setTheme(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
};