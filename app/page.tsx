'use client';

import { useTranslations } from '@/hooks/useTranslation';
import TechStack from './ui/home/stack';

export default function Home() {
	const { t } = useTranslations();

	return (
		<div className='flex flex-col w-full'>
			<section
				id='intro'
				className='flex flex-col mt-8 m-auto'>
				<h1 className='mb-6'>{t('home.hello')}</h1>
				<p className='text-[oklch(0.76_0_132)]'>{t('home.intro')}</p>
			</section>
			<TechStack />
		</div>
	);
}
