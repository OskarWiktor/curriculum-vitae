'use client';

import { useTranslations } from '@/hooks/useTranslation';
import ProjectCard from '../ui/projects/ProjectCard';

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
		<>
			<h1 className='mt-8 md:mt-16'>{t('projects.intro')}</h1>
			<div className='flex flex-wrap mt-5 md:mt-10 gap-4'>
				{projectList.map((project) => (
					<ProjectCard
						key={project.slug}
						{...project}
					/>
				))}
			</div>
		</>
	);
}
