import { createContext, useState } from "react";

export const ThemeContext = createContext({
	theme: "garden",
	toggleTheme: () => {},
});

export function ThemeProvider(props) {
	const [theme, setTheme] = useState("cupcake");

	function toggleTheme() {
		setTheme(theme === "cupcake" ? "night" : "cupcake");
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
