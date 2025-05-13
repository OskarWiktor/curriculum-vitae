'use client';

import { useTranslations } from '@/hooks/useTranslation';
import ProjectCard from '../ui/projects/projectcard';

export default function ProjectsPage() {
	const { t } = useTranslations();
	const projectList = t('projects.list') as {
		slug: string;
		title: string;
		short: string;
		image: string;
		stack: string[];
	}[];

	return (
		<div className='flex flex-wrap mt-8 gap-4'>
			{projectList.map((project) => (
				<ProjectCard
					key={project.slug}
					{...project}
				/>
			))}
		</div>
	);
}
