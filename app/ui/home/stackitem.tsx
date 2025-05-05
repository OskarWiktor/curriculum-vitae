import { ReactNode } from 'react';

interface TechStackItemProps {
	icon: ReactNode;
	label: string;
}

export default function TechStackItem({ label, icon }: TechStackItemProps) {
	return (
		<div className='flex w-fit h-8 gap-2 bg-[var(--color-surface)] rounded-md pt-1 pb-1 pr-2 pl-2'>
			<span className='w-6 h-6 text-[var(--color-text-muted)]'>{icon}</span>
			<p>{label}</p>
		</div>
	);
}
