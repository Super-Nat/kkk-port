import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 1000], [0, -500]);
	const animHeight = useTransform(scrollY, [0, 1500], ["100vh", "0vh"]);

	return (
		<motion.section className="hero" style={{ height: animHeight }}>
			<div className="hero__bg">
				<Image src="/images/hero-bg.jpg" fill alt="hero-bg" />
				<motion.div className="hero__content">
					<h1>Hey!</h1>
					<h2>
						I’m KWAN
						<br />A UX/UI Designer
						<br />.
					</h2>
				</motion.div>
				<div className="hero__scroll">Scroll to explore</div>
			</div>
		</motion.section>
	);
};

export default Hero;
