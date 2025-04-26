import Image from 'next/image';

export default function ProjectCard() {
	return (
		<div className='w-64 h-48 group cursor-pointer bg-zinc-900 rounded-md border-1 border-zinc-800 hover:bg-zinc-800'>
			<div className='relative w-full h-3/5'>
				<Image
					src='/assets/test.png'
					fill
					alt='test'
					className='rounded-tl-md rounded-tr-md object-cover object-center'
				/>
			</div>
			<div className='p-2'>
				<h3 className='text-lg'>Tytuł projektu</h3>
				<p className='text-xs text-zinc-400'>
					Krótki wstęp do projektu - lorem ipsum lorem ipsum lorem ipsum lorem
				</p>
			</div>
		</div>
	);
}
