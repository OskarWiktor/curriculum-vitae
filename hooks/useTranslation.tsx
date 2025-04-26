'use client';

import pl from '@/public/locales/pl.json';
import en from '@/public/locales/en.json';
import { createContext, useContext, useState, ReactNode } from 'react';

type Locale = 'pl' | 'en';

const translations = { pl, en };

interface LanguageContextType {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>('pl');

	const t = (key: string) => {
		const keys = key.split('.');
		let value: any = translations[locale];
		for (const k of keys) {
			value = value?.[k];
			if (value == null) return key;
		}
		return value;
	};

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
	);
}

export function useTranslations() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useTranslations must be used within a LanguageProvider');
	}
	return context;
}
