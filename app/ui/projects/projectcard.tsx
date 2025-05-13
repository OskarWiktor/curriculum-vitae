import Image from 'next/image';
import Link from 'next/link';
import SkillsItem from '../home/skillsitem';
import { skillList } from '@/lib/skillslist';

interface ProjectCardProps {
	slug: string;
	title: string;
	short: string;
	image: string;
	stack: string[];
}

export default function ProjectCard({ slug, title, short, image, stack }: ProjectCardProps) {
	return (
		<Link
			href={`/projects/${slug}`}
			className='w-80 h-64 group cursor-pointer bg-[var(--color-surface)] rounded-md border-b-1 border-b-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'>
			<div className='relative w-full h-2/5'>
				<Image
					src={image}
					fill
					alt={title}
					className='rounded-tl-md rounded-tr-md object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300'
				/>
			</div>
			<div className='pt-4 pb-4 px-2'>
				<h3 className='text-md pb-1'>{title}</h3>
				<p className='text-xs pb-2'>{short}</p>
				<div className='flex flex-wrap gap-1'>
					{stack
						.map((label) => skillList.find((item) => item.label === label))
						.filter((item): item is (typeof skillList)[number] => item !== undefined)
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
		</Link>
	);
}
