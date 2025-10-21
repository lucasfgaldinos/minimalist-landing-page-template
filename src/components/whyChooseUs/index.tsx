import frame9 from '../../assets/frame-9.svg';
import frame10 from '../../assets/frame-10.svg';
import frame11 from '../../assets/frame-11.svg';
import frame12 from '../../assets/frame-12.svg';
import frame13 from '../../assets/frame-13.svg';
import { InfoCard } from '../infoCard';

export function WhyChooseUs() {
	return (
		<section className="container-section">
			<div className="max-w-7xl mx-auto">
				<p className="gradient-text text-2xl md:text-4xl text-center mb-10 font-semibold">
					Why Choose Us?
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<InfoCard
						className="row-span-2"
						img={frame9}
						title="Pioneering Blockchain Solutions"
						description="Our team comprises seasoned experts who stand at the vanguard of Blockchain research and development, ceaselessly pushing the boundaries of what's achievable. Their unwavering commitment to innovation drives us to explore the cutting edge of this transformative technology, seeking novel solutions and pioneering advancements. With a wealth of knowledge and practical experience, our experts consistently challenge the status quo, envisioning and implementing groundbreaking ideas that not only shape the present but also lay the foundation for a more secure and interconnected digital future. This relentless pursuit of excellence ensures that we remain leaders in the ever-evolving landscape of Blockchain technology."
					/>
					<InfoCard
						img={frame10}
						title="Unmatched Security"
						description="We prioritize the safety of your digital assets with cutting-edge security protocols, ensuring your peace of mind in this ever-evolving digital landscape."
					/>
					<InfoCard
						img={frame11}
						title="Future-Proof Technology"
						description="Our commitment to staying ahead of the curve guarantees that our solutions are equipped to adapt and thrive in the rapidly changing technological landscape."
					/>
					<InfoCard
						img={frame12}
						title="Tailored for Success"
						description="Every solution we craft is meticulously customized to meet your specific needs, ensuring seamless integration and optimal performance."
					/>
					<InfoCard
						img={frame13}
						title="Global Reach"
						description=" We serve clients worldwide, yet maintain a personalized approach that nurtures strong, lasting partnerships."
					/>
				</div>
			</div>
		</section>
	);
}
