'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>('dark');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		if (theme === 'light') {
			document.documentElement.classList.add('light');
		} else {
			document.documentElement.classList.remove('light');
		}
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
