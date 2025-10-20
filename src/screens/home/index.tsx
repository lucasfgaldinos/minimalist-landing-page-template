import { About } from '../../components/about';
import { Header } from '../../components/header';
import { Hero } from '../../components/hero';
import { Team } from '../../components/team';
import { WhyChooseUs } from '../../components/whyChooseUs';

export function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<WhyChooseUs />
			<Team />
			<footer />
		</>
	);
}
