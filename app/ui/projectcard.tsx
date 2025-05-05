import Image from 'next/image';
import Button from './atoms/button';

export default function ProjectCard() {
	return (
		<div
			id='a'
			className='w-72 h-54 group cursor-pointer bg-[var(--color-surface)] rounded-md border-1 border-[var(--color-border)] hover:bg-[var(--color-surface-hover)]'>
			<div className='relative w-full h-2/5'>
				<Image
					src='/assets/test.png'
					fill
					alt='test'
					className='rounded-tl-md rounded-tr-md object-cover object-center'
				/>
			</div>
			<div className='pt-4 pb-4 pl-2 pr-2'>
				<h3 className='text-md pb-1'>Tytuł projektu</h3>
				<p className='text-xs pb-2'>
					Krótki wstęp do projektu - lorem ipsum lorem ipsum lorem ipsum lorem
				</p>
				<Button>TypesScript</Button>
			</div>
		</div>
	);
}
