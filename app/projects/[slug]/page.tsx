'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslation';

export default function ProjectDetailPage() {
	const { slug } = useParams();
	const { t } = useTranslations();

	const project = t(`projects.${slug}`) as {
		title: string;
		image: string;
		description: string;
		challenges: string;
		solutions: string;
		tasks: string;
		link: string;
	};

	return (
		<section className='mt-8 space-y-4'>
			<div className='relative w-full h-92'>
				<Image
					fill
					className='object-cover object-top rounded-md'
					src={project.image}
					alt={project.title}
				/>
			</div>
			<h1>{project.title}</h1>
			<a href={project.link}>{project.link}</a>
			<p className='mt-10'>
				<strong>{t('projects.description')}</strong> {project.description}
			</p>
			<p>
				<strong>{t('projects.challenges')}</strong> {project.challenges}
			</p>
			<p>
				<strong>{t('projects.solutions')}</strong> {project.solutions}
			</p>
			<p>
				<strong>{t('projects.tasks')}</strong> {project.tasks}
			</p>
		</section>
	);
}
