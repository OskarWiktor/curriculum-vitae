import { useTranslations } from '@/hooks/useTranslation';
import { Globe } from '@deemlol/next-icons';

export default function Language() {
	const { t } = useTranslations();

	return (
		<section id='language'>
			<header className='flex items-center'>
				<Globe
					size={24}
					color='var(--color-text)'
				/>
				<h3 className='ml-2'>{t('global.language')}</h3>
			</header>

			<ul className='list-disc marker:text-[var(--color-accent)] pl-8 mt-3'>
				<li className='mb-2'>
					<h4>{t('home.language.polish.title')}</h4>
					{t('home.language.polish.description')}
				</li>
				<li>
					<h4>{t('home.language.english.title')}</h4>
					{t('home.language.english.description')}
				</li>
			</ul>
		</section>
	);
}
