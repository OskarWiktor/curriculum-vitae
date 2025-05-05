import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	size?: string;
}

export default function Button({ size = 'medium', children, onClick }: ButtonProps) {
	let sizeClass = '';

	switch (size) {
		case 'small':
			sizeClass = 'px-1 py-1';
			break;
		case 'medium':
			sizeClass = 'px-2 py-1';
			break;
		case 'big':
			sizeClass = 'px-4 py-2';
			break;
	}

	return (
		<button
			onClick={onClick}
			className={`flex justify-center items-center group cursor-pointer w-fit h-fit bg-[var(--background-light)] rounded-md hover:bg-[var(--hover-light)] ${sizeClass}`}>
			<span className='group-hover:text-[var(--text-color-light)]'>{children}</span>
		</button>
	);
}
