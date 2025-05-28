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
	SiElementor,
	SiW3Schools,
	SiJest,
} from 'react-icons/si';

export type TechCategory = 'tech' | 'tools' | 'design' | 'cms' | 'concepts' | 'libraries';

import { JSX } from 'react';
import { IconType } from 'react-icons';

export interface StackItem {
	label: string;
	icon: IconType | JSX.Element;
	category: TechCategory;
}

export const skillList: StackItem[] = [
	// Technologies
	{ label: 'HTML', icon: SiHtml5, category: 'tech' },
	{ label: 'CSS', icon: SiCss3, category: 'tech' },
	{ label: 'SCSS', icon: SiSass, category: 'tech' },
	{ label: 'Tailwind', icon: SiTailwindcss, category: 'tech' },
	{ label: 'JavaScript', icon: SiJavascript, category: 'tech' },
	{ label: 'TypeScript', icon: SiTypescript, category: 'tech' },
	{ label: 'React', icon: SiReact, category: 'tech' },
	{ label: 'Next', icon: SiNextdotjs, category: 'tech' },
	{ label: 'jQuery', icon: SiJquery, category: 'tech' },
	{
		label: '8th Wall',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>8</small>
		),
		category: 'tech',
	},

	// Libraries
	{
		label: 'Material UI',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>M</small>
		),
		category: 'libraries',
	},
	{
		label: 'react-use',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>R</small>
		),
		category: 'libraries',
	},
	{ label: 'Jest', icon: SiJest, category: 'libraries' },

	// Concepts
	{ label: 'WCAG', icon: SiW3Schools, category: 'concepts' },
	{
		label: 'Atomic Design',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>A</small>
		),
		category: 'concepts',
	},
	{
		label: 'SOLID',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>S</small>
		),
		category: 'concepts',
	},
	{
		label: 'REST',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>R</small>
		),
		category: 'concepts',
	},
	{
		label: 'BEM',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>B</small>
		),
		category: 'concepts',
	},
	{
		label: 'OOP',
		icon: (
			<small className='flex justify-center items-center text-[var(--color-text-muted)]'>O</small>
		),
		category: 'concepts',
	},

	// Tools
	{ label: 'Git', icon: SiGit, category: 'tools' },
	{ label: 'Bitbucket', icon: SiBitbucket, category: 'tools' },
	{ label: 'Jira', icon: SiJira, category: 'tools' },
	{ label: 'Trello', icon: SiTrello, category: 'tools' },
	{ label: 'Miro', icon: SiMiro, category: 'tools' },
	{ label: 'Confluence', icon: SiConfluence, category: 'tools' },
	{ label: 'Firebase', icon: SiFirebase, category: 'tools' },

	// CMS
	{ label: 'Adobe Experience Manager', icon: SiAdobe, category: 'cms' },
	{ label: 'Webflow', icon: SiWebflow, category: 'cms' },
	{ label: 'Wordpress', icon: SiWordpress, category: 'cms' },
	{ label: 'Elementor Pro', icon: SiElementor, category: 'cms' },
	{ label: 'Drupal', icon: SiDrupal, category: 'cms' },

	// Design
	{ label: 'Figma', icon: SiFigma, category: 'design' },
	{ label: 'Adobe Photoshop', icon: SiAdobephotoshop, category: 'design' },
	{ label: 'Adobe Illustrator', icon: SiAdobeillustrator, category: 'design' },
	{ label: 'Adobe Xd', icon: SiAdobexd, category: 'design' },
	{ label: 'Adobe InDesign', icon: SiAdobeindesign, category: 'design' },
	{ label: 'Adobe Lightroom', icon: SiAdobelightroom, category: 'design' },
];
