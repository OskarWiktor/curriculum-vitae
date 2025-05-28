'use client';

import { useTranslations } from '@/hooks/useTranslation';
import { House, Mail, PhoneCall } from '@deemlol/next-icons';

export default function ContactAddress() {
	const { t } = useTranslations();

	return (
		<>
			<address className='flex flex-col gap-2 m-auto pt-12'>
				<div className='flex items-center mb-2'>
					<PhoneCall
						size={24}
						color='var(--color-text)'
					/>
					<a
						href='tel:+48516466255'
						className='ml-2'>
						+48 516 466 255
					</a>
				</div>

				<div className='flex items-center'>
					<Mail
						size={24}
						color='var(--color-text)'
					/>
					<a
						href='mailto:graphicode.studio.kontakt@gmail.com'
						className='ml-2'>
						graphicode.studio.kontakt@gmail.com
					</a>
				</div>

				<div className='flex items-center mb-2'>
					<a
						href='mailto:oskar.wiktor3@wp.pl'
						className='ml-8'>
						oskar.wiktor3@wp.pl
					</a>
				</div>

				<div className='flex items-center'>
					<House
						size={24}
						color='var(--color-text)'
					/>
					<p className='ml-2'>{t('contact.address')}</p>
				</div>
			</address>
		</>
	);
}
