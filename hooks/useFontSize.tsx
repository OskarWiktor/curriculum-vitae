'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FontSizeContextType {
	isBigFont: boolean;
	toggleFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
	const [isBigFont, setIsBigFont] = useState(false);

	useEffect(() => {
		const baseFontSize = isBigFont ? 20 : 16;
		document.documentElement.style.setProperty('--base-font-size', `${baseFontSize}px`);
	});

	const toggleFontSize = () => {
		setIsBigFont((prev) => !prev);
	};

	return (
		<FontSizeContext.Provider value={{ isBigFont, toggleFontSize }}>
			{children}
		</FontSizeContext.Provider>
	);
}

export function useFontSize() {
	const context = useContext(FontSizeContext);
	if (!context) {
		throw new Error('useFontSize must be used within a FontSizeProvider');
	}
	return context;
}
