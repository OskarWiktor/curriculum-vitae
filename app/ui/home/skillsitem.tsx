import { IconType } from 'react-icons';

interface SkillsItemProps {
	icon: IconType;
	label: string;
	variant?: 'big' | 'small';
}

export default function SkillsItem({ label, icon, variant = 'big' }: SkillsItemProps) {
	let variantStyle;
	let variantIconStyle;
	let variantTextStyle;

	const Icon = icon;

	if (variant === 'small') {
		variantStyle = 'bg-[var(--color-surface-hover)] hover:bg-[var(--color-surface-hover-subtle)]';
		variantIconStyle = 'w-4 h-4 text-[var(--color-text-muted)]';
		variantTextStyle = 'text-xs';
	} else if (variant === 'big') {
		variantStyle = 'bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]';
		variantIconStyle = 'w-6 h-6 text-[var(--color-text-muted)]';
	}

	return (
		<div
			className={`flex w-fit h-fit items-center gap-2 rounded-md pt-1 pb-1 pr-2 pl-2 ${variantStyle}`}>
			<Icon className={variantIconStyle} />
			<p className={variantTextStyle}>{label}</p>
		</div>
	);
}
