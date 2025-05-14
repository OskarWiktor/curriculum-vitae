import { IconType } from 'react-icons';
import { JSX } from 'react';
import React from 'react';

interface SkillsItemProps {
	icon: IconType | JSX.Element;
	label: string;
	variant?: 'big' | 'small';
}

export default function SkillsItem({ label, icon, variant = 'big' }: SkillsItemProps) {
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
		variantTextStyle = '';
	}

	return (
		<div
			className={`flex w-fit h-fit items-center gap-2 rounded-md pt-1 pb-1 pr-2 pl-2 ${variantStyle}`}>
			{typeof icon === 'function'
				? React.createElement(icon, { className: variantIconStyle })
				: React.cloneElement(icon, { className: variantIconStyle })}
			<p className={variantTextStyle}>{label}</p>
		</div>
	);
}
