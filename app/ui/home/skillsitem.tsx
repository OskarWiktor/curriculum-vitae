import { ReactNode } from 'react';

interface SkillsItemProps {
	icon: ReactNode;
	label: string;
	variant?: 'skills' | 'experience';
}

export default function SkillsItem({ label, icon, variant = 'skills' }: SkillsItemProps) {
	let variantStyle;
	let variantSpanStyle;
	let variantTextStyle;

	if (variant === 'experience') {
		variantStyle = 'bg-[var(--color-surface-hover)] hover:bg-[var(--color-surface-hover-subtle)]';
		variantSpanStyle = 'w-4 h-4 text-[var(--color-text-muted)]';
		variantTextStyle = 'text-xs';
	} else if (variant === 'skills') {
		variantStyle = 'bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]';
		variantSpanStyle = 'w-6 h-6 text-[var(--color-text-muted)]';
	}

	return (
		<div
			className={`flex w-fit h-fit items-center gap-2 rounded-md pt-1 pb-1 pr-2 pl-2 ${variantStyle}`}>
			<span className={variantSpanStyle}>{icon}</span>
			<p className={variantTextStyle}>{label}</p>
		</div>
	);
}
