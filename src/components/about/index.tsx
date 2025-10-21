import calendarImg from '../../assets/calendar.svg';
import desktopScreenImg from '../../assets/desktop-screen.svg';
import fourPeopleImg from '../../assets/four-people.svg';
import { InfoBlock } from '../infoBlock';

export function About() {
	return (
		<section className="container-section background-dark">
			<p className="gradient-text text-2xl md:text-4xl text-center font-semibold">
				Collaboration Made Easy
			</p>

			<p className="text-white text-sm md:text-xl text-center mt-5 mb-14 md:mb-24 max-w-[850px] mx-auto">
				We've developed a straightforward yet robust framework to help determine
				if partnering with [Your Company Name] aligns with your product's goals.
			</p>

			<div className="flex flex-col items-center gap-7 md:flex-row md:gap-10 md:items-start md:justify-center flex-wrap">
				<InfoBlock
					img={calendarImg}
					imgName="Calendar"
					title="Discovery Meeting (30 Mins)"
					description="Gaining insight into the comprehensive product vision, objectives, and project timelines."
				/>
				<InfoBlock
					img={fourPeopleImg}
					imgName="Four people"
					title="Road mapping and Planning (1 Week)"
					description="Conducting a technical assessment to determine feasibility in achieving your objectives and resource needs."
				/>
				<InfoBlock
					img={desktopScreenImg}
					imgName="Desktop screen"
					title="Sprints  (Ongoing)"
					description="Conducting a technical assessment to determine feasibility in achieving your objectives and resource needs."
				/>
			</div>
		</section>
	);
}
