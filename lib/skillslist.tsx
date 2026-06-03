import {
	SiAdobe,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobexd,
	SiBitbucket,
	SiConfluence,
	SiCss3,
	SiDrupal,
	SiFigma,
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

export type TechCategory = 'tech' | 'tools' | 'design' | 'cms' | 'concepts' | 'libraries';

import { IconType } from 'react-icons';

export interface StackItem {
	label: string;
	icon: IconType;
	category: TechCategory;
}

export const skillList: StackItem[] = [
	{ label: 'HTML', icon: SiHtml5, category: 'tech' },
	{ label: 'CSS', icon: SiCss3, category: 'tech' },
	{ label: 'SCSS', icon: SiSass, category: 'tech' },
	{ label: 'Tailwind', icon: SiTailwindcss, category: 'tech' },
	{ label: 'JavaScript', icon: SiJavascript, category: 'tech' },
	{ label: 'TypeScript', icon: SiTypescript, category: 'tech' },
	{ label: 'React', icon: SiReact, category: 'tech' },
	{ label: 'Next', icon: SiNextdotjs, category: 'tech' },
	{ label: 'jQuery', icon: SiJquery, category: 'tech' },

	// Tools
	{ label: 'Git', icon: SiGit, category: 'tools' },
	{ label: 'Bitbucket', icon: SiBitbucket, category: 'tools' },
	{ label: 'Jira', icon: SiJira, category: 'tools' },
	{ label: 'Trello', icon: SiTrello, category: 'tools' },
	{ label: 'Miro', icon: SiMiro, category: 'tools' },
	{ label: 'Confluence', icon: SiConfluence, category: 'tools' },

	// CMS
	{ label: 'Adobe Experience Manager', icon: SiAdobe, category: 'cms' },
	{ label: 'Webflow', icon: SiWebflow, category: 'cms' },
	{ label: 'Wordpress', icon: SiWordpress, category: 'cms' },
	{ label: 'Drupal', icon: SiDrupal, category: 'cms' },

	// Design
	{ label: 'Figma', icon: SiFigma, category: 'design' },
	{ label: 'Adobe Photoshop', icon: SiAdobephotoshop, category: 'design' },
	{ label: 'Adobe Illustrator', icon: SiAdobeillustrator, category: 'design' },
	{ label: 'Adobe Xd', icon: SiAdobexd, category: 'design' },
];

const skillByLabel = new Map(skillList.map((item) => [item.label, item]));

/**
 * Resolves a list of skill labels to their matching {@link StackItem}s,
 * preserving the order of `labels` and skipping any label without a match.
 */
export function getSkillsByLabels(labels: string[]): StackItem[] {
	return labels
		.map((label) => skillByLabel.get(label))
		.filter((item): item is StackItem => item !== undefined);
}
