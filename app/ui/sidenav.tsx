'use client';

import { AppWindowMac, Github, PhoneCall, UserCheck } from '@deemlol/next-icons';
import Link from 'next/link';
import SideNavItem from './sidenavitem';

export default function SideNav() {
	return (
		<nav className='flex flex-col w-90 pr-4 pl-4 h-dvh bg-zinc-900 border-r-1 border-zinc-700'>
			<div className='flex w-full pt-6 pb-6 justify-around border-b-1 border-zinc-700'>
				<div className='w-14 h-14 '>
					<Link
						href='https://github.com/OskarWiktor'
						className='flex justify-center items-center w-14 h-14 border-1 rounded-md border-amber-400 hover:border-2 '>
						<Github
							size={36}
							color='oklch(82.8% 0.189 84.429)'
						/>
					</Link>
				</div>
				<div>
					<p className='text-2xl text-[oklch(0.93_0_132)]'>Oskar Wiktor</p>
					<p className='text-[oklch(0.76_0_132)]'>FrontEnd Dev</p>
				</div>
			</div>

			<div className='flex flex-col h-fit pt-4 pb-4'>
				<SideNavItem
					href='/'
					label='O mnie'
					icon={
						<UserCheck
							size={16}
							className='mr-3 text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]'
						/>
					}
					subItems={[
						{ href: '#intro', label: 'Wstęp' },
						{ href: '#skills', label: 'Umiejętności' },
						{ href: '#experience', label: 'Doświadczenie' },
					]}
				/>

				<SideNavItem
					href='/projekty'
					label='Projekty'
					icon={
						<AppWindowMac
							size={16}
							className='mr-3 text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]'
						/>
					}
					subItems={[
						{ href: '#a', label: 'Projekt A' },
						{ href: '#b', label: 'Projekt B' },
					]}
				/>

				<SideNavItem
					href='/kontakt'
					label='Kontakt'
					icon={
						<PhoneCall
							size={16}
							className='mr-3 text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]'
						/>
					}
				/>
			</div>
		</nav>
	);
}
