'use client';

import { Moon, TextUp } from '@deemlol/next-icons';
import Button from './atoms/button';
import { useTranslations } from '@/hooks/useTranslation';

export default function TopToolbar() {
	const { locale, setLocale } = useTranslations();

	const toggleLanguage = () => {
		setLocale(locale === 'pl' ? 'en' : 'pl');
	};

	return (
		<section className='flex justify-end items-center w-full h-8 gap-3'>
			<Button onClick={toggleLanguage}>PL / EN</Button>
			<Button>
				<TextUp size={24} />
			</Button>
			<Button>
				<Moon
					size={16}
					className='m-1'
				/>
			</Button>
		</section>
	);
}
