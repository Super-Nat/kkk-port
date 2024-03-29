import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-hook-inview";

const About = (Props: any) => {
	const [ref] = useInView({
		onEnter: () => Props.setActive("about"),
	});
	return (
		<section ref={ref} className="about" id="about">
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
							<Image src="/images/about.png" fill alt="about" />
							<Link
								target="_blank"
								href="https://drive.google.com/file/d/1fyyXsGHP5MXgxBeCf8eJw-Y5CWWrvKY8/view"
							>
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
