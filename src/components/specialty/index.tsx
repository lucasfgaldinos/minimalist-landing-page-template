import frame1 from '../../assets/frame-1.svg';
import frame2 from '../../assets/frame-2.svg';
import frame3 from '../../assets/frame-3.svg';
import { InfoCard } from '../infoCard';

export function Specialty() {
	return (
		<section className="container-section">
			<div className="max-w-7xl mx-auto">
				<p className="gradient-text text-2xl md:text-4xl text-center mb-10 font-semibold">
					What We Specialize In?
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<InfoCard
						img={frame1}
						title="Blockchain Development Services"
						description="Lorem ipsum dolor sit amet consectetur. Malesuada pulvinar sapien at integer elit non quam ut nec. Congue suspendisse arcu massa ullamcorper amet proin orci risus. Rhoncus netus volutpat suspendisse turpis cras accumsan. Nibh integer viverra felis magna varius etiam pretium quis ornare. Morbi proin eget dolor volutpat sapien massa mi. Iaculis dolor vitae sit sit nibh. Dignissim at viverra molestie cras et fermentum quis purus. Diam nec elit feugiat euismod amet mi tristique commodo quam. Ac nulla interdum facilisis praesent integer rutrum tristique id feugiat. Ipsum sapien leo eleifend fringilla nulla habitasse. Eget aliquet odio imperdiet faucibus in enim. Elementum dolor nisl sed felis etiam scelerisque.
Commodo malesuada sed morbi sodales. Augue."
					/>
					<InfoCard
						img={frame2}
						title="Web & App Design Services"
						description="Lorem ipsum dolor sit amet consectetur. Quis elementum ornare felis nec consequat. Pulvinar urna pellentesque elit tincidunt fames tortor. Magna et etiam pellentesque fringilla sit nunc. Viverra massa vel rhoncus tortor diam pulvinar. In nunc porttitor volutpat vulputate non aliquam enim. Diam pellentesque pharetra diam porttitor malesuada ut sagittis.
Volutpat cursus donec ultricies aliquet scelerisque quisque. Diam vitae in scelerisque posuere viverra sit sit ultricies gravida. Amet tempor tristique mi donec. Morbi sed eu a ornare etiam morbi. Luctus ut sapien ultrices non adipiscing risus donec vulputate scelerisque. Nec consequat nullam et sed. Nulla in."
					/>
					<InfoCard
						img={frame3}
						title="Data Science Services"
						description="Lorem ipsum dolor sit amet consectetur. Consectetur quis praesent consequat blandit ornare diam libero sem. Tincidunt felis adipiscing id at dictumst. Pellentesque enim ornare pharetra felis mi tellus purus. Elementum cum facilisis nunc feugiat semper viverra sociis. Pellentesque netus suspendisse sed eget dui est felis. Pellentesque amet urna id id. Posuere senectus vitae dui a semper est sed ornare nunc. Viverra ipsum tristique erat venenatis. Neque in velit odio condimentum id urna mauris. Nam senectus bibendum nunc cursus id diam nibh integer id. Imperdiet scelerisque non at aliquam risus.
Risus lorem bibendum in proin faucibus id sagittis. Molestie purus morbi ac eget integer quisque ultrices et. Sociis vitae nibh erat rhoncus. Pulvinar tellus."
					/>
				</div>
			</div>
		</section>
	);
}
