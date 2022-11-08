import Image from "next/image";
import Link from "next/link";

const Work: React.FC = () => {
	return (
		<section className="work" id="work">
			<div className="wrapper">
				<h2>
					<span>Selected</span>
					Works.
				</h2>
				<div className="work__inner">
					<div className="work__item">
						<Link href="">
							<div className="work__img">
								<Image src="/images/work1.jpg" fill alt="test" />
							</div>
							<div className="work__cat">Test cat</div>
							<div className="work__title">Test title</div>
						</Link>
					</div>
					<div className="work__item">
						<Link href="">
							<div className="work__img">
								<Image src="/images/work1.jpg" fill alt="test" />
							</div>
							<div className="work__cat">Test cat</div>
							<div className="work__title">Test title</div>
						</Link>
					</div>
					<div className="work__item">
						<Link href="">
							<div className="work__img">
								<Image src="/images/work1.jpg" fill alt="test" />
							</div>
							<div className="work__cat">Test cat</div>
							<div className="work__title">Test title</div>
						</Link>
					</div>
					<div className="work__item">
						<Link href="">
							<div className="work__img">
								<Image src="/images/work1.jpg" fill alt="test" />
							</div>
							<div className="work__cat">Test cat</div>
							<div className="work__title">Test title</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="noise"></div>
		</section>
	);
};

export default Work;
