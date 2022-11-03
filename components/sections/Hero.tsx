import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
	return (
		<motion.section className="hero">
			<div className="hero__bg">
				<Image src="/images/hero-bg.jpg" fill alt="hero-bg" />
				<div className="hero__content">
					<h1>Hey!</h1>
					<h2>
						I’m KWAN
						<br />A UX/UI Designer
						<br />.
					</h2>
				</div>
				<div className="hero__scroll">Scroll to explore</div>
			</div>
		</motion.section>
	);
};

export default Hero;
