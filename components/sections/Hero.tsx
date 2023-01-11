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
				<video src="/videos/video-banner.mp4" autoPlay loop muted></video>
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
