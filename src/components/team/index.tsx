import certificateImg from '../../assets/cerfiticate.svg';
import fivePeopleImg from '../../assets/five-people.svg';
import seatedWomanImg from '../../assets/seated-woman.svg';
import { InfoBlock } from '../infoBlock';

export function Team() {
	return (
		<section className="container-section background-dark">
			<p className="gradient-text text-2xl md:text-4xl text-center font-semibold">
				Expert Help In One Tap
			</p>

			<p className="text-white text-sm md:text-xl text-center mt-5 mb-14 md:mb-24 max-w-[850px] mx-auto">
				Our diverse and dynamic team is the heart of our success. Comprising
				exceptional talents from around the world, we unite under a common
				vision to drive innovation and excellence.
			</p>

			<div className="flex flex-col items-center gap-7 md:flex-row md:gap-10 md:items-end md:justify-center flex-wrap">
				<InfoBlock
					img={fivePeopleImg}
					imgName="Five people."
					title="Diverse"
					description="Gaining insight into the comprehensive product vision, objectives, and project timelines."
				/>
				<InfoBlock
					img={seatedWomanImg}
					imgName="Seated woman."
					title="Experts"
					description="Gaining insight into the comprehensive product vision, objectives, and project timelines."
				/>
				<InfoBlock
					img={certificateImg}
					imgName="Certificate."
					title="Certified"
					description="Gaining insight into the comprehensive product vision, objectives, and project timelines."
				/>
			</div>
		</section>
	);
}
