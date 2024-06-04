import { useThemeContext } from "./context/ThemeContext";
 
export const ThemeSwitch = () => {
  const [theme, setTheme] = useThemeContext();
  console.log(theme)
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
    </div>
  );
};