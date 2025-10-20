import { Button } from '../button';

export function Hero() {
	return (
		<section className="container-section min-h-dvh">
			<div className="max-w-7xl mx-auto">
				<p className="font-light text-base text-dark md:text-3xl text-center">
					Blockchain: Bridging to the Future
				</p>

				<div className="w-4 h-0.5 bg-pink mx-auto my-4" />

				<p className="gradient-text font-bold text-3xl xl:text-6xl text-center">
					Safeguarding the Digital Landscape
				</p>
				<p className="gradient-text font-bold text-3xl xl:text-6xl text-center">
					With Cutting-Edge Security.
				</p>

				<div className="w-4 h-0.5 bg-pink mx-auto my-4" />

				<p className="font-medium text-center text-dark text-sm md:text-lg">
					Lorem ipsum dolor sit amet consectetur. Donec sem tellus at dictum
					nibh.
				</p>
				<p className="font-medium text-center text-dark text-sm md:text-lg">
					Ridiculus nec tortor praesent pharetra. Sed venenatis venenatis
					blandit ut amet.
				</p>
				<p className="font-medium text-center text-dark text-sm md:text-lg">
					Nunc mauris egestas et sed feugiat lorem pharetra volutpat. At sed sed
					amet.
				</p>

				<div className="w-4 h-0.5 bg-pink mx-auto my-4" />

				<div className="flex items-center justify-center">
					<Button height="lg" width="fit">
						Request a project
					</Button>
				</div>

				<div className="w-4 h-0.5 bg-pink mx-auto my-4" />

				<div className="flex items-center justify-center mt-10">
					<img
						className="arrow-animation w-16 h-16 aspect-square"
						src="/arrow-down.svg"
						alt="Arrow down."
					/>
				</div>
			</div>
		</section>
	);
}
