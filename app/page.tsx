'use client';

import { useTranslations } from '@/hooks/useTranslation';
import Skills from './ui/home/skills';
import Experience from './ui/home/experience';
import Education from './ui/home/education';

export default function Home() {
	const { t } = useTranslations();

	return (
		<div className='flex flex-col w-full mt-8 md:mt-16 gap-16'>
			<section
				id='intro'
				className='flex flex-col m-auto'>
				<h1 className='mb-6'>{t('home.hello')}</h1>
				<p className='text-[oklch(0.76_0_132)]'>{t('home.intro')}</p>
			</section>
			<Skills />
			<Experience />
			<Education />
		</div>
	);
}
