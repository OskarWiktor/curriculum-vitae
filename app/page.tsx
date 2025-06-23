'use client';

import { useTranslations } from '@/hooks/useTranslation';
import Skills from './ui/home/Skills';
import Experience from './ui/home/Experience';
import Education from './ui/home/Education';
import Competences from './ui/home/Competences';
import Aspirations from './ui/home/Aspirations';
import Language from './ui/home/Language';

export default function Home() {
	const { t } = useTranslations();

	return (
		<div className='flex flex-col w-full mt-8 md:mt-16 gap-20'>
			<section
				id='intro'
				className='flex flex-col m-auto'>
				<span className='mb-1'>{t('home.hello')}</span>
				<h1 className='mb-4'>{t('home.name')}</h1>
				<p className='text-[oklch(0.76_0_132)]'>{t('home.intro')}</p>
			</section>
			<Skills />
			<Aspirations />
			<Experience />
			<Competences />
			<Education />
			<Language />
		</div>
	);
}
