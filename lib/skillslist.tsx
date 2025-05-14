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
} from 'react-icons/si';

export type TechCategory = 'tech' | 'tools' | 'design';

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
	{ label: '8th Wall', icon: <span>8</span>, category: 'tech' },
	{ label: 'Material UI', icon: <span>M</span>, category: 'tech' },

	// Tools
	{ label: 'Git', icon: SiGit, category: 'tools' },
	{ label: 'Bitbucket', icon: SiBitbucket, category: 'tools' },
	{ label: 'Jira', icon: SiJira, category: 'tools' },
	{ label: 'Trello', icon: SiTrello, category: 'tools' },
	{ label: 'Miro', icon: SiMiro, category: 'tools' },
	{ label: 'Confluence', icon: SiConfluence, category: 'tools' },
	{ label: 'Drupal', icon: SiDrupal, category: 'tools' },
	{ label: 'Firebase', icon: SiFirebase, category: 'tools' },
	{ label: 'Wordpress', icon: SiWordpress, category: 'tools' },
	{ label: 'Elementor Pro', icon: SiElementor, category: 'tools' },
	{ label: 'Webflow', icon: SiWebflow, category: 'tools' },
	{ label: 'WCAG', icon: SiW3Schools, category: 'tools' },
	{ label: 'Adobe Experience Manager', icon: SiAdobe, category: 'tools' },

	// Design
	{ label: 'Figma', icon: SiFigma, category: 'design' },
	{ label: 'Adobe Photoshop', icon: SiAdobephotoshop, category: 'design' },
	{ label: 'Adobe Illustrator', icon: SiAdobeillustrator, category: 'design' },
	{ label: 'Adobe Xd', icon: SiAdobexd, category: 'design' },
	{ label: 'Adobe InDesign', icon: SiAdobeindesign, category: 'design' },
	{ label: 'Adobe Lightroom', icon: SiAdobelightroom, category: 'design' },
];
