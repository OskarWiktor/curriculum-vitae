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
import SideNavItem from './Sidenavitem';
import { useTranslations } from '@/hooks/useTranslation';
import Button from './Button';

export default function SideNav() {
	const { t, locale } = useTranslations();

	const cvFile =
		locale === 'pl' ? 'assets/oskar-wiktor-cv-pl.pdf' : 'assets/oskar-wiktor-cv-en.pdf';

	return (
		<aside className='flex flex-col md:fixed w-min  rounded-md h-fit p-6'>
			<section className='flex flex-col w-full items-center pb-6 border-b border-[var(--color-border)] '>
				<div className='relative w-full h-40 mb-3 md:mb-6'>
					<Image
						src='/assets/profile.jpg'
						fill
						alt='Oskar Wiktor profile picture for cv'
						className='rounded-sm object-cover object-center'
					/>
				</div>
				<h4>Oskar Wiktor</h4>
				<p>FrontEnd / React Dev</p>
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
					<Link
						href={cvFile}
						download>
						<Button variant='light'>
							<Download className='w-4 h-4' />
							<p className='text-xs'>{t('global.cv')}</p>
						</Button>
					</Link>
					<Link href='/contact'>
						<Button variant='accent'>
							<PhoneCall className='w-4 h-4 text-background' />
							<p className='text-background text-xs'>{t('global.contact')}</p>
						</Button>
					</Link>
				</div>
			</section>

			<nav className='flex flex-col min-w-50 md:w-full h-fit pt-2 md:pt-4'>
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
				/>
			</nav>
		</aside>
	);
}
