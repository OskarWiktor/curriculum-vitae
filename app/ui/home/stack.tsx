import {
	SiAdobe,
	SiAdobeillustrator,
	SiAdobeindesign,
	SiAdobelightroom,
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
	SiMiro,
	SiNextdotjs,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTrello,
	SiTypescript,
	SiWebflow,
	SiWordpress,
} from 'react-icons/si';
import StackItem from './stackitem';

const techStack = [
	{ label: 'HTML', icon: <SiHtml5 className='w-6 h-6' /> },
	{ label: 'CSS', icon: <SiCss3 className='w-6 h-6' /> },
	{ label: 'SCSS', icon: <SiSass className='w-6 h-6' /> },
	{ label: 'Tailwind', icon: <SiTailwindcss className='w-6 h-6' /> },
	{ label: 'JavaScript', icon: <SiJavascript className='w-6 h-6' /> },
	{ label: 'TypeScript', icon: <SiTypescript className='w-6 h-6' /> },
	{ label: 'React', icon: <SiReact className='w-6 h-6' /> },
	{ label: 'Next', icon: <SiNextdotjs className='w-6 h-6' /> },
	{ label: 'JQuery', icon: <SiJquery className='w-6 h-6' /> },
];

const toolStack = [
	{ label: 'Adobe Experience Manager', icon: <SiAdobe className='w-6 h-6' /> },
	{ label: 'Drupal', icon: <SiDrupal className='w-6 h-6' /> },
	{ label: 'Wordpress', icon: <SiWordpress className='w-6 h-6' /> },
	{ label: 'Webflow', icon: <SiWebflow className='w-6 h-6' /> },
	{ label: 'Firebase', icon: <SiFirebase className='w-6 h-6' /> },
	{ label: 'Git', icon: <SiGit className='w-6 h-6' /> },
	{ label: 'Bitbucket', icon: <SiBitbucket className='w-6 h-6' /> },
	{ label: 'Jira', icon: <SiJira className='w-6 h-6' /> },
	{ label: 'Confluence', icon: <SiConfluence className='w-6 h-6' /> },
	{ label: 'Miro', icon: <SiMiro className='w-6 h-6' /> },
	{ label: 'Trello', icon: <SiTrello className='w-6 h-6' /> },
];

const designStack = [
	{ label: 'Figma', icon: <SiFigma className='w-6 h-6' /> },
	{ label: 'Adobe Photoshop', icon: <SiAdobephotoshop className='w-6 h-6' /> },
	{ label: 'Adobe Illustrator', icon: <SiAdobeillustrator className='w-6 h-6' /> },
	{ label: 'Adobe Xd', icon: <SiAdobexd className='w-6 h-6' /> },
	{ label: 'Adobe InDesign', icon: <SiAdobeindesign className='w-6 h-6' /> },
	{ label: 'Adobe Lightroom', icon: <SiAdobelightroom className='w-6 h-6' /> },
];

export default function Stack() {
	return (
		<section
			id='skills'
			className='flex flex-col w-full '>
			<h2 className='mb-3'>Stack:</h2>
			<div className='flex flex-col md:flex-row md:gap-2 lg:gap-4'>
				<div className='flex flex-col gap-1'>
					<span>Tech</span>
					<div className='flex gap-2 flex-wrap mb-4'>
						{techStack.map(({ label, icon }) => (
							<StackItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-1'>
					<span>Tools</span>
					<div className='flex gap-2 flex-wrap mb-4'>
						{toolStack.map(({ label, icon }) => (
							<StackItem
								key={label}
								label={label}
								icon={icon}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-1'>
					<span>Design</span>
					<div className='flex gap-2 flex-wrap'>
						{designStack.map(({ label, icon }) => (
							<StackItem
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
