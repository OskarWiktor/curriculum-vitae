'use client';

import { AppWindowMac, Github, PhoneCall, UserCheck } from '@deemlol/next-icons';
import Link from 'next/link';
import SideNavItem from './sidenavitem';
import { useTranslations } from '@/hooks/useTranslation';

export default function SideNav() {
	const { t } = useTranslations();
	return (
		<aside className='flex flex-col w-90 pr-4 pl-4 h-dvh border-r-1 border-[var(--border-dark)]'>
			<div className='flex w-full pt-6 pb-6 justify-around border-b-1 border-[var(--border-dark)]'>
				<div className='w-14 h-14 '>
					<Link
						href='https://github.com/OskarWiktor'
						className='flex justify-center items-center w-14 h-14 border-2 rounded-md border-[var(--accent)]'>
						<Github className='w-9 h-fit color-accent' />
					</Link>
				</div>
				<div>
					<p className='text-lg '>Oskar Wiktor</p>
					<p>FrontEnd Dev</p>
				</div>
			</div>

			<nav className='flex flex-col h-fit pt-4 pb-4'>
				<SideNavItem
					href='/'
					label={t('global.about')}
					icon={
						<UserCheck className='w-5 h-5 mr-3 text-[var(--text-color-dark)] group-hover:text-[oklch(0.93_0_132)]' />
					}
					subItems={[
						{ href: '/#intro', label: t('global.intro') },
						{ href: '/#skills', label: t('global.skills') },
						{ href: '/#experience', label: t('global.experience') },
					]}
				/>

				<SideNavItem
					href='/projects'
					label={t('global.projects')}
					icon={
						<AppWindowMac className='w-5 h-5 mr-3 text-[var(--text-color-dark)] group-hover:text-[oklch(0.93_0_132)]' />
					}
					subItems={[
						{ href: '/projects#a', label: 'Projekt A' },
						{ href: '/projects#b', label: 'Projekt B' },
					]}
				/>

				<SideNavItem
					href='/contact'
					label={t('global.contact')}
					icon={
						<PhoneCall className='w-5 h-5 mr-3 text-[var(--text-color-dark)] group-hover:text-[oklch(0.93_0_132)]' />
					}
				/>
			</nav>
		</aside>
	);
}
