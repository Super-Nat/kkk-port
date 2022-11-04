import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
	return (
		<section className="about">
			<div className="wrapper">
				<div className="about__inner">
					<div className="about__side">
						<h2 className="special">ABOUT</h2>
						<h2>KWAN.</h2>
						<p>
							{
								"I'm Kwan Kunnapat, a freelance UX/UI Designer in Thailand with nearly four years of experience."
							}
						</p>
						<p>
							{
								"As a UX/UI designer, I believe that good design is about balancing form and function. My goal is to create beautiful, user-friendly designs that assist my clients in reaching their business objectives."
							}
						</p>
						<p>
							{
								"I am always open to new opportunities. Please contact me if you are looking for someone to assist you!"
							}
						</p>
					</div>
					<div className="about__side">
						<div className="about__img">
							<Image src="/images/about.jpg" fill alt="about" />
							<Link href="#">
								Check out my resume{" "}
								<span>
									<Image src="/images/arrow-next.svg" fill alt="about" />
								</span>
							</Link>
						</div>
					</div>
				</div>
				<hr />
			</div>
			<div className="noise"></div>
		</section>
	);
};

export default About;
