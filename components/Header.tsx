import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
	const { scrollY } = useScroll();
	const backgroundColor = useTransform(
		scrollY,
		[0, 500],
		["transparent", "#fafafc"]
	);
	const padding = useTransform(scrollY, [0, 500], ["2.5rem 0", "1.5rem 0"]);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			setScroll(window.scrollY);
		});
	}, []);

	return (
		<motion.header
			className="header"
			style={{
				backgroundColor: backgroundColor,
				top: scroll > 100 ? "-10%" : "0",
				opacity: scroll > 100 ? 0 : 1,
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
						<li className="active">
							<Link href="">About me</Link>
						</li>
						<li>
							<Link href="">works</Link>
						</li>
						<li>
							<Link href="">Contact</Link>
						</li>
					</ul>
				</div>
			</motion.div>
		</motion.header>
	);
};

export default Header;
