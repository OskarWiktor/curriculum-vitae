'use client';

import { useTranslations } from '@/hooks/useTranslation';
import Button from '../atoms/Button';
import { useState } from 'react';

export default function ContactForm() {
	const { t } = useTranslations();
	const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);

		const res = await fetch(form.action, {
			method: 'POST',
			body: data,
			headers: { Accept: 'application/json' },
		});

		if (res.ok) {
			setFormStatus('success');
			form.reset();
		} else {
			setFormStatus('error');
		}
	};

	return (
		<form
			className='flex flex-col w-full gap-4'
			action='https://formspree.io/f/meogkvyb'
			method='POST'
			onSubmit={handleSubmit}>
			<input
				className='w-full text-[var(--color-text)] border-b-1 border-[var(--color-border)] p-2'
				name='name'
				placeholder={t('contact.name')}
				required
			/>

			<input
				className='w-full text-[var(--color-text)] border-b-1 border-[var(--color-border)] p-2'
				name='email'
				placeholder={t('contact.email')}
				required
			/>

			<textarea
				className='w-full h-48 text-[var(--color-text)] border-1 border-[var(--color-border)] p-2'
				name='message'
				placeholder={t('contact.message')}
				required
			/>
			<Button
				type='submit'
				size='big'>
				Wyślij
			</Button>

			{formStatus === 'error' && (
				<p className='w-fit border-b-1 border-b-red-900'>{t('contact.error')}</p>
			)}
			{formStatus === 'success' && (
				<p className='w-fit border-b-1 border-b-[var(--color-accent)]'>{t('contact.success')}</p>
			)}
		</form>
	);
}
