import {
	FacebookLogoIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	TwitchLogoIcon,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { Button } from '../button';
import { ContactUsDialogContent } from '../contactUsDialog';
import { Dialog, DialogTrigger } from '../ui/dialog';

export function Footer() {
	const [open, setOpen] = useState<boolean>(false);
	const currentYear = new Date().getFullYear();

	return (
		<footer className="container-section background-dark">
			<div className="flex flex-col items-center max-w-3xl mx-auto">
				<p className="text-white text-lg md:text-4xl font-bold text-center">
					Let's Work Together!
				</p>
				<p className="text-white text-sm md:text-base my-8 text-center">
					Take the first step towards a transformative future by partnering with
					us today. Explore our cutting-edge solutions in Blockchain, Data
					Engineering, and AI, and experience the power of innovation and
					seamless connectivity. Contact us now for a personalized consultation,
					and together, let's build a brighter tomorrow. Your success awaits!
				</p>

				<Button height="sm" width="fit">
					Schedule A Meeting
				</Button>
			</div>

			<div className="mt-48 max-w-7xl mx-auto">
				<div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between">
					<div className="max-w-md">
						<p className="text-white font-bold mb-2">Logo Goes Here</p>
						<p className="text-white text-sm">
							We specialize in harnessing the transformative potential of
							cutting-edge technologies, with a primary focus on Blockchain,
							Data Engineering, and Artificial Intelligence. Our mission is to
							pave the way for a more innovative and interconnected world, where
							businesses and individuals thrive through secure and seamless
							technology solutions. Through our comprehensive range of services
							and expertise, we are committed to delivering tangible value and
							empowering our clients to embrace the future with confidence.
						</p>
					</div>
					<div className="flex flex-col max-w-40 items-start">
						<p className="text-white font-semibold mb-2">Company Name</p>
						<div className="flex flex-col gap-1 items-start">
							<button
								className="text-white active:opacity-75 text-sm font-light cursor-pointer hover:translate-x-1 transition-transform duration-100"
								type="button"
							>
								Home
							</button>
							<button
								className="text-white active:opacity-75 text-sm font-light cursor-pointer hover:translate-x-1 transition-transform duration-100"
								type="button"
							>
								About Us
							</button>
							<button
								className="text-white active:opacity-75 text-sm font-light cursor-pointer hover:translate-x-1 transition-transform duration-100"
								type="button"
							>
								Projects
							</button>
							<button
								className="text-white active:opacity-75 text-sm font-light cursor-pointer hover:translate-x-1 transition-transform duration-100"
								type="button"
							>
								Blog
							</button>
							<button
								className="text-white active:opacity-75 text-sm font-light cursor-pointer hover:translate-x-1 transition-transform duration-100"
								type="button"
							>
								Career
							</button>

							<Dialog open={open} onOpenChange={setOpen}>
								<DialogTrigger asChild>
									<button
										className="text-white active:opacity-75 text-sm font-light cursor-pointer hover:translate-x-1 transition-transform duration-100"
										type="button"
									>
										Contact Us
									</button>
								</DialogTrigger>
								<ContactUsDialogContent setOpen={setOpen} />
							</Dialog>
						</div>
					</div>
					<div className="max-w-64 flex flex-col gap-2">
						<div>
							<p className="text-white font-semibold">Our Head Office</p>
							<p className="text-white text-sm">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
						<div>
							<p className="text-white font-semibold">Our Hotline</p>
							<p className="text-white text-sm">+Number Company</p>
						</div>
						<div>
							<p className="text-white font-semibold">Mail Us</p>
							<p className="text-white text-sm">companyemail@mail.com</p>
						</div>
					</div>
					<div className="max-w-60">
						<p className="text-white font-semibold mb-2">
							Subscribe To Our Newsletter!
						</p>
						<input
							placeholder="Your Best Email"
							className="w-full mb-2 h-12 rounded-lg border-2 outline-none border-white focus:border-pink px-3 text-white placeholder:text-gray-400"
							type="email"
						/>
						<Button height="lg" width="full">
							Subscribe Now
						</Button>
					</div>
				</div>

				<div className="border-t border-gray-400 py-6 flex justify-between mt-6">
					<p className="text-white font-light">
						&copy; {String(currentYear)}, All Rights Reserved
					</p>

					<div className="flex gap-4 items-center justify-center">
						<InstagramLogoIcon
							size={24}
							color="white"
							className="cursor-pointer hover:scale-[1.2] active:scale-[1] duration-100 select-none"
						/>
						<TwitchLogoIcon
							size={24}
							color="white"
							className="cursor-pointer hover:scale-[1.2] active:scale-[1] duration-100 select-none"
						/>
						<FacebookLogoIcon
							size={24}
							color="white"
							className="cursor-pointer hover:scale-[1.2] active:scale-[1] duration-100 select-none"
						/>
						<LinkedinLogoIcon
							size={24}
							color="white"
							className="cursor-pointer hover:scale-[1.2] active:scale-[1] duration-100 select-none"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
