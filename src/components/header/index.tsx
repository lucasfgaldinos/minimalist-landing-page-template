import { Button } from '../button';

export function Header() {
	return (
		<header className="px-4 py-4 shadow fixed w-full top-0 left-0 backdrop-blur-lg bg-white/70">
			<div className="max-w-7xl flex justify-between mx-auto">
				<p className="gradient-text font-medium text-xl">Logo Goes Here</p>

				<nav className="text-dark font-medium text-lg items-center justify-center gap-8 hidden lg:flex">
					<button
						className="header-link cursor-pointer transition-all duration-500"
						type="button"
					>
						Home
					</button>
					<button
						className="header-link cursor-pointer transition-all duration-500"
						type="button"
					>
						About Us
					</button>
					<button
						className="header-link cursor-pointer transition-all duration-500"
						type="button"
					>
						Projects
					</button>
					<button
						className="header-link cursor-pointer transition-all duration-500"
						type="button"
					>
						Blog
					</button>
					<button
						className="header-link cursor-pointer transition-all duration-500"
						type="button"
					>
						Careers
					</button>
				</nav>

				<Button height="sm" width="fit">
					Contact Us
				</Button>
			</div>
		</header>
	);
}
