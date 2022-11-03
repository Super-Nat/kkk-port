import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer__main">
				<div className="wrapper">
					<h2>
						<span className="white">SAY</span>
						HELLO?
					</h2>
					<div className="footer__info">
						<p>
							If you have any projects that you think I could help
							<br />
							or even simply say hi, Feel free to drop me a line.
						</p>
						<Link href="mailto:Kunnapatkn@gmail.com">Kunnapatkn@gmail.com</Link>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<div className="footer__sup">
					<span>
						©Copyright 2022 Kwan. All rights reserved. | Developed by{" "}
						<Link href="mailto:nuttsumc@gmail.com">Natchapon</Link>
					</span>
					<ul>
						<li>
							<Link href="#">
								LINKEDIN{" "}
								<span>
									<Image src="/images/arrow-next-w.svg" fill alt="link" />
								</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								INSTAGRAM{" "}
								<span>
									<Image src="/images/arrow-next-w.svg" fill alt="link" />
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
