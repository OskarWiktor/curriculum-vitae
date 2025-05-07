import Image from 'next/image';
import StackItem from './stackitem';
import {
	SiAdobe,
	SiAdobephotoshop,
	SiBitbucket,
	SiConfluence,
	SiCss3,
	SiFigma,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiJira,
	SiJquery,
	SiReact,
	SiSass,
	SiTypescript,
} from 'react-icons/si';

const vmlFStack = [
	{ label: 'HTML', icon: <SiHtml5 /> },
	{ label: 'CSS', icon: <SiCss3 /> },
	{ label: 'SCSS', icon: <SiSass /> },
	{ label: 'JavaScript', icon: <SiJavascript /> },
	{ label: 'JQuery', icon: <SiJquery /> },
	{ label: 'TypeScript', icon: <SiTypescript /> },
	{ label: 'React', icon: <SiReact /> },
	{ label: 'Adobe Experience Manager', icon: <SiAdobe /> },
	{ label: 'Git', icon: <SiGit /> },
	{ label: 'Bitbucket', icon: <SiBitbucket /> },
	{ label: 'Jira', icon: <SiJira /> },
	{ label: 'Confluence', icon: <SiConfluence /> },
	{ label: 'Figma', icon: <SiFigma /> },
	{ label: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
];

export default function Experience() {
	return (
		<section>
			<h3 className='mb-3'>Doświadczenie</h3>
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
				<p className='pt-3 pb-3'>Opis stanowiska</p>
				<div className='flex flex-wrap gap-2'>
					{vmlFStack.map(({ label, icon }) => (
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
