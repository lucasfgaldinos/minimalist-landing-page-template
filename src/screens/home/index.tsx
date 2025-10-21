import { About } from '../../components/about';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Hero } from '../../components/hero';
import { Specialty } from '../../components/specialty';
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
			<Specialty />
			<Footer />
		</>
	);
}
