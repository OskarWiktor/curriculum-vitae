'use client';

import { Moon, Sun, TextDown, TextUp } from '@deemlol/next-icons';
import Button from './atoms/button';
import { useTranslations } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { useFontSize } from '@/hooks/useFontSize';
import { useTheme } from '@/hooks/useTheme';

export default function TopToolbar() {
	const { locale, setLocale } = useTranslations();
	const { toggleFontSize, isBigFont } = useFontSize();
	const { theme, toggleTheme } = useTheme();

	const toggleLanguage = () => {
		setLocale(locale === 'pl' ? 'en' : 'pl');
	};

	return (
		<section className='flex justify-end items-center w-full h-fit gap-3'>
			<Button
				size='small'
				onClick={toggleLanguage}>
				<motion.span
					animate={{
						color: locale === 'pl' ? 'var(--accent)' : 'var(--text-color-dark)',
					}}
					className='leading-0 transition-colors duration-100'>
					PL
				</motion.span>
				<span className='leading-0'> / </span>
				<motion.span
					animate={{
						color: locale === 'en' ? 'var(--accent)' : 'var(--text-color-dark)',
					}}
					className='leading-0 transition-colors duration-100'>
					EN
				</motion.span>
			</Button>
			<Button
				size='small'
				onClick={toggleFontSize}>
				{isBigFont ? (
					<TextDown className='w-6 h-6 group-hover:text-[var(--text-color-light)]' />
				) : (
					<TextUp className='w-6 h-6 group-hover:text-[var(--text-color-light)]' />
				)}
			</Button>
			<Button
				size='small'
				onClick={toggleTheme}>
				{theme === 'dark' ? (
					<Moon className='w-5 h-5 m-[2px] group-hover:text-[var(--text-color-light)]' />
				) : (
					<Sun className='w-5 h-5 m-[2px] group-hover:text-[var(--text-color-light)]' />
				)}
			</Button>
		</section>
	);
}
