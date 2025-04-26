import { Moon, TextUp } from '@deemlol/next-icons';
import Button from './atoms/button';

export default function TopToolbar() {
	return (
		<section className='flex justify-end items-center w-full h-8 gap-3'>
			<Button>PL / EN</Button>
			<Button>
				<TextUp size={24} />
			</Button>
			<Button>
				<Moon
					size={16}
					className='m-1'
				/>
			</Button>
		</section>
	);
}
