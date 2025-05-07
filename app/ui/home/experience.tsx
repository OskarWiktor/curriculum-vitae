import Image from 'next/image';
import StackItem from './skillsitem';
import {
	SiAdobe,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiAdobephotoshop,
	SiAdobexd,
	SiBitbucket,
	SiConfluence,
	SiCss3,
	SiDrupal,
	SiFigma,
	SiFirebase,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiJira,
	SiJquery,
	SiNextdotjs,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTrello,
	SiTypescript,
	SiWebflow,
	SiWordpress,
} from 'react-icons/si';
import { useTranslations } from '@/hooks/useTranslation';

const vmlFEDStack = [
	{ label: 'HTML', icon: <SiHtml5 /> },
	{ label: 'CSS', icon: <SiCss3 /> },
	{ label: 'SCSS', icon: <SiSass /> },
	{ label: 'Tailwind', icon: <SiTailwindcss /> },
	{ label: 'JavaScript', icon: <SiJavascript /> },
	{ label: 'JQuery', icon: <SiJquery /> },
	{ label: 'TypeScript', icon: <SiTypescript /> },
	{ label: 'React', icon: <SiReact /> },
	{ label: 'Next', icon: <SiNextdotjs /> },
	{ label: 'Adobe Experience Manager', icon: <SiAdobe /> },
	{ label: 'Git', icon: <SiGit /> },
	{ label: 'Bitbucket', icon: <SiBitbucket /> },
	{ label: 'Jira', icon: <SiJira /> },
	{ label: 'Confluence', icon: <SiConfluence /> },
	{ label: 'Figma', icon: <SiFigma /> },
	{ label: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
];

const vmlWMStack = [
	{ label: 'HTML', icon: <SiHtml5 /> },
	{ label: 'CSS', icon: <SiCss3 /> },
	{ label: 'SCSS', icon: <SiSass /> },
	{ label: 'JavaScript', icon: <SiJavascript /> },
	{ label: 'TypeScript', icon: <SiTypescript /> },
	{ label: 'React', icon: <SiReact /> },
	{ label: 'Adobe Experience Manager', icon: <SiAdobe /> },
	{ label: 'Drupal', icon: <SiDrupal /> },
	{ label: 'Wordpress', icon: <SiWordpress /> },
	{ label: 'Webflow', icon: <SiWebflow /> },
	{ label: 'Firebase', icon: <SiFirebase /> },
	{ label: 'Git', icon: <SiGit /> },
	{ label: 'Jira', icon: <SiJira /> },
	{ label: 'Confluence', icon: <SiConfluence /> },
	{ label: 'Trello', icon: <SiTrello /> },
	{ label: 'Figma', icon: <SiFigma /> },
	{ label: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
	{ label: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
	{ label: 'Adobe Xd', icon: <SiAdobexd /> },
	{ label: 'Adobe InDesign', icon: <SiAdobeindesign /> },
];

export default function Experience() {
	const { t } = useTranslations();

	return (
		<section>
			<h3 className='mb-3'>{t('global.experience')}</h3>

			<div className='flex flex-col bg-[var(--color-surface)] rounded-md p-4 '>
				<div className='flex justify-between'>
					<div className='flex'>
						<Image
							src='/assets/vml-logo.png'
							alt='VML company Logo'
							width={92}
							height={32}
						/>
						<h4 className='ml-2'>Junior FrontEnd Dev</h4>
					</div>

					<p className='bg-[var(--color-surface-hover)] rounded-md p-1'>10.2024 - 04.2025</p>
				</div>
				<p className='pt-3 pb-3 border-b-1 border-[var(--color-border)]'>Opis stanowiska</p>
				<div className='flex flex-wrap gap-2 pt-4'>
					{vmlFEDStack.map(({ label, icon }) => (
						<StackItem
							key={label}
							label={label}
							icon={icon}
							variant='experience'
						/>
					))}
				</div>
			</div>

			<div className='flex flex-col bg-[var(--color-surface)] rounded-md p-4 mt-4'>
				<div className='flex justify-between'>
					<div className='flex'>
						<Image
							src='/assets/vml-logo.png'
							alt='VML company Logo'
							width={92}
							height={32}
						/>
						<h4 className='ml-2'>Web Master</h4>
					</div>

					<p className='bg-[var(--color-surface-hover)] rounded-md p-1'>08.2021 - 10.2024</p>
				</div>
				<p className='pt-3 pb-3 border-b-1 border-[var(--color-border)]'>Opis stanowiska</p>
				<div className='flex flex-wrap gap-2 pt-4'>
					{vmlWMStack.map(({ label, icon }) => (
						<StackItem
							key={label}
							label={label}
							icon={icon}
							variant='experience'
						/>
					))}
				</div>
			</div>
		</section>
	);
}
