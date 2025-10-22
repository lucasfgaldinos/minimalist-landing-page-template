import { useRef } from 'react';
import { toast } from 'react-toastify';
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../button';
import { Input } from '../ui/input';

export function ContactUsDialogContent({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const inputName = useRef<HTMLInputElement>(null);
	const inputEmail = useRef<HTMLInputElement>(null);
	const inputTextArea = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (inputName.current && inputEmail.current && inputTextArea.current) {
			inputName.current.value = '';
			inputEmail.current.value = '';
			inputTextArea.current.value = '';
		}

		setOpen(false);
		toast('Message sent successfully! 😁');
	};

	return (
		<DialogContent className="background-dark">
			<DialogHeader>
				<DialogTitle>Send A Message</DialogTitle>
				<DialogDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic
					ea pariatur corporis a laboriosam!
				</DialogDescription>
			</DialogHeader>
			<form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
				<Input ref={inputName} required placeholder="Your Name" type="text" />
				<Input
					ref={inputEmail}
					required
					placeholder="Your Best Email"
					type="email"
				/>
				<textarea
					ref={inputTextArea}
					required
					className="min-h-[100px] max-h-[200px] text-sm focus-visible:ring-pink/30 focus-visible:ring-[3px] text-white placeholder:text-gray-300 p-2 outline-none border rounded-lg border-white"
					placeholder="Your Message"
				/>

				<Button type="submit" height="lg" width="full">
					Send
				</Button>
			</form>
		</DialogContent>
	);
}
