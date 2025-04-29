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
		<section className='flex justify-end items-center w-full h-8 gap-3'>
			<Button
				size='small'
				onClick={toggleLanguage}>
				<motion.span
					animate={{
						color: locale === 'pl' ? 'var(--accent)' : 'var(--text-color-dark)',
					}}
					transition={{ duration: 0.2 }}
					className='leading-0 transition-colors duration-200'>
					PL
				</motion.span>
				<span className='leading-0'> / </span>
				<motion.span
					animate={{
						color: locale === 'en' ? 'var(--accent)' : 'var(--text-color-dark)',
					}}
					transition={{ duration: 0.2 }}
					className='leading-0 transition-colors duration-200'>
					EN
				</motion.span>
			</Button>
			<Button
				size='small'
				onClick={toggleFontSize}>
				{isBigFont ? <TextDown className='w-6 h-6' /> : <TextUp className='w-6 h-6' />}
			</Button>
			<Button
				size='small'
				onClick={toggleTheme}>
				{theme === 'dark' ? (
					<Moon className='w-5 h-5 m-[2px]' />
				) : (
					<Sun className='w-5 h-5 m-[2px]' />
				)}
			</Button>
		</section>
	);
}
