import { skillList } from '../../../lib/skillslist';

const tech = skillList.filter((i) => i.category === 'tech');
const libraries = skillList.filter((i) => i.category === 'libraries');
const concepts = skillList.filter((i) => i.category === 'concepts');
const tools = skillList.filter((i) => i.category === 'tools');
const cms = skillList.filter((i) => i.category === 'cms');
const design = skillList.filter((i) => i.category === 'design');

import SkillsItem from './SkillsItem';
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

			<div className='flex flex-wrap flex-col md:flex-row mt-3'>
				<div className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1 '>
					<span>{t('home.technologies')}</span>
					<div className='flex gap-2 flex-wrap mb-4 p-2'>
						{tech.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1'>
					<span>{t('home.libraries')}</span>
					<div className='flex gap-2 flex-wrap mb-4 p-2'>
						{libraries.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1'>
					<span>{t('home.concepts')}</span>
					<div className='flex gap-2 flex-wrap mb-4 p-2'>
						{concepts.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1'>
					<span>{t('home.tools')}</span>
					<div className='flex gap-2 flex-wrap mb-4 p-2'>
						{tools.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1'>
					<span>{t('home.cms')}</span>
					<div className='flex gap-2 flex-wrap mb-4 p-2'>
						{cms.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex w-full md:w-1/2 lg:w-1/3 flex-col gap-1'>
					<span>{t('home.design')}</span>
					<div className='flex gap-2 flex-wrap mb-4 p-2'>
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
