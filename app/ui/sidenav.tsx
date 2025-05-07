'use client';

import {
	AppWindowMac,
	Download,
	Facebook,
	Github,
	Linkedin,
	PhoneCall,
	UserCheck,
} from '@deemlol/next-icons';
import Link from 'next/link';
import Image from 'next/image';
import SideNavItem from './sidenavitem';
import { useTranslations } from '@/hooks/useTranslation';
import Button from './atoms/button';

export default function SideNav() {
	const { t } = useTranslations();

	return (
		<aside className='flex flex-col w-full md:fixed md:w-58 lg:w-64 md:m-2 rounded-md pr-4 pl-4 sm:pr-10 sm:pl-10 md:pr-3 md:pl-3 h-fit'>
			<section className='flex flex-col w-full pt-3 pb-3 md:pt-6 md:pb-6 items-center border-b-1 border-[var(--color-border)]'>
				<div className='relative w-full h-58 mb-3 md:mb-6'>
					<Image
						src='/assets/test.png'
						fill
						alt='test'
						className='rounded-md object-cover object-center'
					/>
				</div>
				<div className=' flex items-center bg-[var(--color-surface-hover)] rounded-md pr-3 pl-3 pt-1 pb-1'>
					<div className='w-2 h-2 rounded-md bg-[var(--color-accent)] mr-2'></div>
					<p>{t('global.avaible')}</p>
				</div>
				<h4 className='mt-2 md:mt-3'>Oskar Wiktor</h4>
				<p>FrontEnd Dev</p>
				<div className='flex mt-1 md:mt-2'>
					<Link href='https://github.com/OskarWiktor'>
						<Button>
							<Github className='w-5 h-5 group-hover:text-[var(--color-text)]' />
						</Button>
					</Link>
					<Link href='https://www.linkedin.com/in/oskar-wiktor-9b637427a/'>
						<Button>
							<Linkedin className='w-5 h-5 group-hover:text-[var(--color-text)]' />
						</Button>
					</Link>
					<Link href='https://pl-pl.facebook.com/oskar.wiktor11'>
						<Button>
							<Facebook className='w-5 h-5 group-hover:text-[var(--color-text)]' />
						</Button>
					</Link>
				</div>
				<div className='flex flex-row w-full justify-center gap-4 md:gap-0 md:justify-around mt-3'>
					<Button variant='light'>
						<Download className='w-4 h-4' />
						<p className='text-xs'>{t('global.cv')}</p>
					</Button>
					<Link href='/contact'>
						<Button variant='accent'>
							<PhoneCall className='w-4 h-4 text-background' />
							<p className='text-background text-xs'>{t('global.contact')}</p>
						</Button>
					</Link>
				</div>
			</section>

			<nav className='flex flex-col min-w-52 md:w-full h-fit pt-2 pb-2 md:pt-4 md:pb-4'>
				<SideNavItem
					href='/'
					label={t('global.about')}
					icon={
						<UserCheck className='w-5 h-5 mr-3 text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]' />
					}
					subItems={[
						{ href: '/#intro', label: t('global.intro') },
						{ href: '/#skills', label: t('global.skills') },
						{ href: '/#aspirations', label: t('global.aspirations') },
						{ href: '/#experience', label: t('global.experience') },
						{ href: '/#competences', label: t('global.competences') },
						{ href: '/#education', label: t('global.education') },
						{ href: '/#language', label: t('global.language') },
					]}
				/>

				<SideNavItem
					href='/projects'
					label={t('global.projects')}
					icon={
						<AppWindowMac className='w-5 h-5 mr-3 text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]' />
					}
					subItems={[
						{ href: '/projects#a', label: 'Projekt A' },
						{ href: '/projects#b', label: 'Projekt B' },
					]}
				/>
			</nav>
		</aside>
	);
}
