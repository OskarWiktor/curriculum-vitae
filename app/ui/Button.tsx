import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	variant?: 'default' | 'light' | 'accent';
	type?: 'submit' | 'reset' | 'button' | undefined;
}

export default function Button({ variant = 'default', children, onClick, type }: ButtonProps) {
	let variantClass = '';
	let variantChildrenClass = '';

	switch (variant) {
		case 'default':
			variantClass = 'bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]';
			variantChildrenClass = 'group-hover:text-[var(--color-text)]';
			break;
		case 'light':
			variantClass = 'bg-[var(--color-surface-hover)] hover:bg-[var(--color-surface-hover-subtle)]';
			variantChildrenClass = 'group-hover:text-[var(--color-surface-hover-subtle)]';
			break;
		case 'accent':
			variantClass = 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]';
			variantChildrenClass =
				'group-hover:text-[var(--color-background)] text-[var(--color-background)]';
			break;
		default:
			variantClass = 'bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]';
			variantChildrenClass = 'group-hover:text-[var(--color-text)]';
	}

	return (
		<button
			onClick={onClick}
			type={type}
			className={`flex justify-center items-center group cursor-pointer w-fit h-fit rounded-md px-3 py-2 ${variantClass}`}>
			<p className={`flex items-center gap-x-2 w-full h-full ${variantChildrenClass}`}>
				{children}
			</p>
		</button>
	);
}
