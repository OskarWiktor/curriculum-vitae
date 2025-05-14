import Image from 'next/image';
import SkillsItem from './skillsitem';
import { useTranslations } from '@/hooks/useTranslation';
import { Briefcase } from '@deemlol/next-icons';
import { skillList, StackItem } from '../../../lib/skillslist';

const vmlFEDLabels = [
	'HTML',
	'CSS',
	'SCSS',
	'Tailwind',
	'JavaScript',
	'JQuery',
	'TypeScript',
	'React',
	'Next',
	'Adobe Experience Manager',
	'Git',
	'Bitbucket',
	'Jira',
	'Confluence',
	'Figma',
	'Adobe Photoshop',
];

const vmlWMLabels = [
	'HTML',
	'CSS',
	'SCSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Adobe Experience Manager',
	'Drupal',
	'Wordpress',
	'Webflow',
	'Firebase',
	'Git',
	'Jira',
	'Confluence',
	'Trello',
	'Figma',
	'Adobe Photoshop',
	'Adobe Illustrator',
	'Adobe Xd',
	'Adobe InDesign',
];

export default function Experience() {
	const { t } = useTranslations();

	return (
		<section id='experience'>
			<header className='flex items-center'>
				<Briefcase
					size={24}
					color='var(--color-text)'
				/>
				<h3 className='ml-2'>{t('global.experience')}</h3>
			</header>

			<div className='flex flex-col bg-[var(--color-surface)] rounded-md p-4 mt-3 border-b-1 border-b-[var(--color-accent)]'>
				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='flex flex-col md:flex-row'>
						<Image
							src='/assets/vml-logo.png'
							alt='VML company Logo'
							width={92}
							height={32}
						/>
						<h4 className='md:ml-2 mt-2 md:mt-0'>Junior FrontEnd Dev</h4>
						<p className='bg-[var(--color-surface-hover)] rounded-md pt-1 pb-1 pl-2 pr-2 md:ml-2 w-fit mt-2 md:mt-0'>
							{t('home.remote')}
						</p>
					</div>

					<p className='bg-[var(--color-surface-hover)] rounded-md pt-1 pb-1 pl-2 pr-2 mt-4 w-fit lg:mt-0 '>
						10.2024 - 04.2025
					</p>
				</div>
				<p className='pt-3 pb-3 border-b-1 border-[var(--color-border)]'>Opis stanowiska</p>
				<div className='flex flex-wrap gap-2 pt-4'>
					{vmlFEDLabels
						.map((label) => skillList.find((item) => item.label === label))
						.filter((item): item is StackItem => item !== undefined)
						.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
								variant='small'
							/>
						))}
				</div>
			</div>

			<div className='flex flex-col bg-[var(--color-surface)] rounded-md p-4 mt-4 border-b-1 border-b-[var(--color-accent)]'>
				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='flex flex-col md:flex-row'>
						<Image
							src='/assets/vml-logo.png'
							alt='VML company Logo'
							width={92}
							height={32}
						/>
						<h4 className='md:ml-2 mt-2 md:mt-0'>Web Master</h4>
						<p className='bg-[var(--color-surface-hover)] rounded-md pt-1 pb-1 pl-2 pr-2 md:ml-2 w-fit mt-2 md:mt-0'>
							{t('home.remote')}
						</p>
					</div>

					<p className='bg-[var(--color-surface-hover)] rounded-md pt-1 pb-1 pl-2 pr-2 mt-4 w-fit lg:mt-0'>
						08.2021 - 10.2024
					</p>
				</div>
				<p className='pt-3 pb-3 border-b-1 border-[var(--color-border)]'>Opis stanowiska</p>
				<div className='flex flex-wrap gap-2 pt-4'>
					{vmlWMLabels
						.map((label) => skillList.find((item) => item.label === label))
						.filter((item): item is StackItem => item !== undefined)
						.map(({ label, icon }) => (
							<SkillsItem
								key={label}
								label={label}
								icon={icon}
								variant='small'
							/>
						))}
				</div>
			</div>
		</section>
	);
}
