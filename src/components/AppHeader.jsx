import AppNav from "./AppNav";
import { useTheme } from "../contexts/ThemeContext";

export default function AppHeader() {
    const { mode } = useTheme();
    return (
        <header className={mode === "light" ? ("") : ("dark-mode")}>
            <AppNav></AppNav>
        </header>
    )
}