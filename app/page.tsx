'use client';

import { useTranslations } from '@/hooks/useTranslation';
import Skills from './ui/Skills';
import Experience from './ui/Experience';
import Education from './ui/Education';
import Competences from './ui/Competences';
import Language from './ui/Language';

export default function Home() {
	const { t } = useTranslations();

	return (
		<div className='flex flex-col w-full  md:m-2 gap-12'>
			<section
				id='intro'
				className='flex flex-col m-auto'>
				<span className='mb-1'>{t('home.hello')}</span>
				<h1 className='mb-4'>{t('home.name')}</h1>
				<p className='text-[oklch(0.76_0_132)]'>{t('home.intro')}</p>
			</section>
			<Skills />
			<Experience />
			<Competences />
			<Education />
			<Language />
		</div>
	);
}
