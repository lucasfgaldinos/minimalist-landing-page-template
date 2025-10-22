import { Link } from 'react-router-dom';
import { Button } from '../button';

export function NotFoundScreen() {
	return (
		<div className="min-h-screen background-dark flex flex-col justify-center items-center text-white px-4">
			<h1 className="text-[6rem] lg:text-[12rem] font-extrabold drop-shadow-lg animate-bounce">
				404
			</h1>

			<p className="text-2xl md:text-3xl font-semibold mb-8 text-center max-w-xl">
				Oops! The page you tried to access doesn't exist.
			</p>

			<Link to="/">
				<Button width="fit" height="lg">
					Return To Home
				</Button>
			</Link>
		</div>
	);
}
