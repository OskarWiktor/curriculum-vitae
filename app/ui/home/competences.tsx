import { useTranslations } from '@/hooks/useTranslation';
import { Bookmark } from '@deemlol/next-icons';

export default function Competences() {
	const { t } = useTranslations();

	return (
		<section id='competences'>
			<header className='flex items-center'>
				<Bookmark
					size={24}
					color='var(--color-text)'
				/>
				<h3 className='ml-2'>{t('global.competences')}</h3>
			</header>

			<div>
				<ul className='list-disc pl-8 mt-3'>
					<li>{t('home.competences.first')}</li>
					<li>{t('home.competences.second')}</li>
					<li>{t('home.competences.third')}</li>
					<li>{t('home.competences.fourth')}</li>
				</ul>
			</div>
		</section>
	);
}
