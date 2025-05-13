import { useTranslations } from '@/hooks/useTranslation';
import { BookOpen } from '@deemlol/next-icons';

export default function Education() {
	const { t } = useTranslations();

	return (
		<section id='education'>
			<header className='flex items-center'>
				<BookOpen
					size={24}
					color='var(--color-text)'
				/>
				<h3 className='ml-2'>{t('global.education')}</h3>
			</header>

			<div className='flex flex-col bg-[var(--color-surface)] rounded-md p-4 mt-3 border-b-1 border-b-[var(--color-accent)]'>
				<div className='flex justify-between'>
					<h4>{t('home.education.school')}</h4>
					<p className='bg-[var(--color-surface-hover)] rounded-md pt-1 pb-1 pl-2 pr-2'>
						10.2024 - 04.2025
					</p>
				</div>
				<p className='pt-3 pb-3'>
					{t('home.education.description')}
					<em> {t('home.education.specialization')}</em>
				</p>
			</div>
		</section>
	);
}
