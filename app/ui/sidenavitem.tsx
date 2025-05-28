'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from './atoms/button';
import { ChevronDown } from '@deemlol/next-icons';
interface SubItem {
	href: string;
	label: string;
}

interface SideNavItemProps {
	href?: string;
	icon: ReactNode;
	label: string;
	subItems?: SubItem[];
}

export default function SideNavItem({ href, icon, label, subItems }: SideNavItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen((prev) => !prev);

	const animationDuration = 0.5;

	return (
		<div className='flex flex-col'>
			<div className='flex flex-row justify-between items-center'>
				<Link
					href={href || '#'}
					className='flex items-center rounded-md mt-1 mb-1 group'>
					{icon}
					{label}
				</Link>

				{subItems && (
					<Button
						onClick={toggleOpen}
						size='small'>
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: animationDuration }}>
							<ChevronDown className='w-4 h-4 group-hover:text-[var(--color-text)]' />
						</motion.div>
					</Button>
				)}
			</div>

			<AnimatePresence>
				{isOpen && subItems && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{
							duration: animationDuration,
							ease: 'easeInOut',
							delayChildren: 0.1,
							staggerChildren: 0.05,
						}}
						className='flex flex-col ml-6 mt-1 space-y-1 overflow-hidden'>
						{subItems.map((item) => (
							<motion.div
								key={item.href}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}>
								<Link href={item.href}>{item.label}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
