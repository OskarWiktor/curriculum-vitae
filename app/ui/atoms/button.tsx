import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	size?: 'small' | 'medium' | 'big';
	variant?: 'default' | 'light' | 'accent';
}

export default function Button({
	size = 'medium',
	variant = 'default',
	children,
	onClick,
}: ButtonProps) {
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
	}

	return (
		<button
			onClick={onClick}
			className={`flex justify-center items-center group cursor-pointer w-fit h-fit rounded-md ${variantClass} ${sizeClass}`}>
			<span className={`flex items-center gap-x-2 w-full h-full ${variantChildrenClass}`}>
				{children}
			</span>
		</button>
	);
}
