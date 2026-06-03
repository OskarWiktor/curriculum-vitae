import { IconType } from 'react-icons';
import React from 'react';

interface BadgeItemProps {
	icon: IconType;
	label: string;
	variant?: 'big' | 'small';
}

export default function BadgeItem({ label, icon, variant = 'big' }: BadgeItemProps) {
	let variantStyle = '';
	let variantIconStyle = '';
	let variantTextStyle = '';

	if (variant === 'small') {
		variantStyle = 'bg-[var(--color-surface-hover)] hover:bg-[var(--color-surface-hover-subtle)]';
		variantIconStyle = 'w-4 h-4 text-[var(--color-text-muted)]';
		variantTextStyle = 'text-xs';
	} else {
		variantStyle = 'bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]';
		variantIconStyle = 'w-6 h-6 text-[var(--color-text-muted)]';
		variantTextStyle = 'text-sm';
	}

	return (
		<div className={`flex w-fit h-fit items-center gap-2 rounded-sm px-3 py-2 ${variantStyle}`}>
			{React.createElement(icon, { className: variantIconStyle })}
			<p className={variantTextStyle}>{label}</p>
		</div>
	);
}
