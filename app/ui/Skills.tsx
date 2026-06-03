import { CheckCircle } from '@deemlol/next-icons';
import { useTranslations } from '@/hooks/useTranslation';
import { skillList, TechCategory } from '../../lib/skillslist';
import Badge from './Badge';

const categories: { titleKey: string; category: TechCategory }[] = [
	{ titleKey: 'home.technologies', category: 'tech' },
	{ titleKey: 'home.tools', category: 'tools' },
	{ titleKey: 'home.cms', category: 'cms' },
	{ titleKey: 'home.design', category: 'design' },
];

export default function Skills() {
	const { t } = useTranslations();

	return (
		<section
			id='skills'
			className='flex flex-col w-full '>
			<header className='flex items-center'>
				<CheckCircle
					size={24}
					color='var(--color-text)'
				/>
				<h3 className='ml-2'>{t('global.skills')}</h3>
			</header>

			<div className='flex flex-wrap flex-col md:flex-row mt-3'>
				{categories.map(({ titleKey, category }) => (
					<div
						key={category}
						className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1'>
						<h4>{t(titleKey)}</h4>
						<div className='flex gap-2 flex-wrap mb-4 p-2'>
							{skillList
								.filter((skill) => skill.category === category)
								.map(({ label, icon }) => (
									<Badge
										key={label}
										label={label}
										icon={icon}
									/>
								))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
