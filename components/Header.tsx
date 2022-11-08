import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { smooth } from "popmotion";
import { useEffect, useRef, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const Header: React.FC = () => {
	const { scrollY } = useScroll();
	const backgroundColor = useTransform(
		scrollY,
		[0, 500],
		["transparent", "#fafafc"]
	);
	const padding = useTransform(scrollY, [0, 500], ["2.5rem 0", "1.5rem 0"]);
	const [scroll, setScroll] = useState(0);
	const scrollDirection = useScrollDirection();

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			setScroll(window.scrollY);
		});
	}, []);

	return (
		<motion.header
			className="header"
			style={{
				backgroundColor: scrollDirection === "up" ? backgroundColor : "",
				top: scrollDirection === "down" ? "-10%" : "0",
				opacity: scrollDirection === "down" ? 0 : 1,
			}}
		>
			<motion.div className="header__wrapper" style={{ padding: padding }}>
				<div className="header__logo">
					<Link href="/">
						<Image src="/images/logo.svg" fill alt="logo" />
					</Link>
				</div>
				<div className="header__nav">
					<ul>
						<li
							className="active"
							onClick={() => {
								window.scrollTo(
									0,
									document.getElementById("about").offsetTop - 300
								);
							}}
						>
							About me
						</li>
						<li
							onClick={() => {
								window.scrollTo(
									0,
									document.getElementById("work").offsetTop - 800
								);
							}}
						>
							works
						</li>
						<li
							onClick={() => {
								window.scrollTo(0, document.body.scrollHeight);
							}}
						>
							Contact
						</li>
					</ul>
				</div>
			</motion.div>
		</motion.header>
	);
};

export default Header;
