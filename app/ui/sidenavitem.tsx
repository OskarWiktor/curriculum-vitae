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

	return (
		<div className='flex flex-col'>
			<div className='flex flex-row justify-between items-center'>
				<Link
					href={href || '#'}
					className='flex items-center rounded-md mt-1 mb-1 pl-3 pr-3 pt-1 pb-1 group'>
					{icon}
					{label}
				</Link>

				{subItems && (
					<Button
						onClick={toggleOpen}
						size='small'>
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.3 }}>
							<ChevronDown className='w-4 h-4' />
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
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className='flex flex-col ml-6 mt-1 space-y-1 text-[oklch(0.76_0_132)]'>
						{subItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='hover:text-[oklch(0.93_0_132)]'>
								{item.label}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
