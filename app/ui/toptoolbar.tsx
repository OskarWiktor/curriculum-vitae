'use client';

import { Moon, TextDown, TextUp } from '@deemlol/next-icons';
import Button from './atoms/button';
import { useTranslations } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { useFontSize } from '@/hooks/useFontSize';

export default function TopToolbar() {
	const { locale, setLocale } = useTranslations();
	const { toggleFontSize, isBigFont } = useFontSize();

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
						color: locale === 'pl' ? 'oklch(82.8% 0.189 84.429)' : 'oklch(0.76 0 132)',
					}}
					transition={{ duration: 0.2 }}
					className='leading-0 transition-colors duration-200'>
					PL
				</motion.span>
				<span className='leading-0'> / </span>
				<motion.span
					animate={{
						color: locale === 'en' ? 'oklch(82.8% 0.189 84.429)' : 'oklch(0.76 0 132)',
					}}
					transition={{ duration: 0.2 }}
					className='leading-0 transition-colors duration-200'>
					EN
				</motion.span>
			</Button>
			<Button
				size='small'
				onClick={toggleFontSize}>
				{isBigFont ? <TextDown size={18} /> : <TextUp size={18} />}
			</Button>
			<Button size='small'>
				<Moon
					size={14}
					className='m-[2px]'
				/>
			</Button>
		</section>
	);
}
