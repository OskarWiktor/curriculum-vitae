import ContactAddress from '../ui/contact/ContactAddress';

export default function Page() {
	return (
		<div className='flex flex-col lg:flex-row w-full mt-8 md:mt-16 gap-8'>
			<div className='flex flex-col w-full lg:w-1/2'>
				<ContactAddress />
			</div>

			<div className='w-full lg:w-1/2 '></div>
		</div>
	);
}
