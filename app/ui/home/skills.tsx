import { skillList } from '../../../lib/skillslist';

const tech = skillList.filter((i) => i.category === 'tech');
const tools = skillList.filter((i) => i.category === 'tools');
const design = skillList.filter((i) => i.category === 'design');

import SkillsItem from './skillsitem';
import { useTranslations } from '@/hooks/useTranslation';
import { CheckCircle } from '@deemlol/next-icons';

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

			<div className='flex flex-col md:flex-row md:gap-2 lg:gap-4 mt-3'>
				<div className='flex flex-col gap-1'>
					<span>{t('home.technologies')}</span>
					<div className='flex gap-2 flex-wrap mb-4'>
						{tech.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-1'>
					<span>{t('home.tools')}</span>
					<div className='flex gap-2 flex-wrap mb-4'>
						{tools.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-1'>
					<span>{t('home.design')}</span>
					<div className='flex gap-2 flex-wrap'>
						{design.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
