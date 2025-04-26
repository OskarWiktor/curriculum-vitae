'use client';

import { useTranslations } from '@/hooks/useTranslation';

export default function Home() {
	const { t } = useTranslations();

	return (
		<div className='flex w-full'>
			<section className='flex flex-col w-3/4 mt-8 m-auto'>
				<h1 className='mb-6 text-5xl'>Oskar Wiktor</h1>
				<p className='text-[oklch(0.76_0_132)] text-s'>{t('home.intro')}</p>
			</section>
		</div>
	);
}
