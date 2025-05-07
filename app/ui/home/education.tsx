import { useTranslations } from '@/hooks/useTranslation';

export default function Education() {
	const { t } = useTranslations();

	return (
		<section>
			<h3 className='mb-3'>{t('global.education')}</h3>
			<div className='flex flex-col bg-[var(--color-surface)] rounded-md p-4'>
				<div className='flex justify-between'>
					<h4>{t('home.education.school')}</h4>
					<p className='bg-[var(--color-surface-hover)] rounded-md p-1'>10.2024 - 04.2025</p>
				</div>
				<p className='pt-3 pb-3'>
					{t('home.education.description')}
					<em> {t('home.education.specialization')}</em>
				</p>
			</div>
		</section>
	);
}
