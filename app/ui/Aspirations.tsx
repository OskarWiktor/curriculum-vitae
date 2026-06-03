import { useTranslations } from '@/hooks/useTranslation';
import { Award } from '@deemlol/next-icons';

export default function Aspirations() {
	const { t } = useTranslations();

	return (
		<section id='aspirations'>
			<header className='flex items-center w-fit'>
				<Award
					size={24}
					color='var(--color-text)'
				/>
				<h3 className='ml-2'>{t('global.aspirations')}</h3>
			</header>

			<div>
				<ul className='list-disc marker:text-[var(--color-accent)] pl-8 mt-3'>
					<li>{t('home.aspirations.first')}</li>
					<li>{t('home.aspirations.second')}</li>
					<li>{t('home.aspirations.third')}</li>
				</ul>
			</div>
		</section>
	);
}
