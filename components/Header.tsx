import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import MenuList from "./menuList";

const Header = () => {
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
				top: scrollDirection === "down" ? "-10%" : "0",
				backgroundColor: backgroundColor,
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
						<MenuList sectionPage="about">ABOUT ME</MenuList>
						<MenuList sectionPage="work">WORKS</MenuList>
						<MenuList>CONTACT</MenuList>
					</ul>
				</div>
			</motion.div>
		</motion.header>
	);
};

export default Header;
