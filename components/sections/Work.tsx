"use client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const Work = (Props: any) => {
	return (
		<section className="work" id="work">
			<div className="wrapper">
				<h2>
					<span>Selected</span>
					Works.
				</h2>
				<div className="work__inner">
					{Props.work.map((work: any) => (
						<div className="work__item" key={work._id}>
							<Link href={`works/${work.slug.current}`}>
								<div className="work__img">
									<Image src={urlFor(work.gallery[0]).url()} fill alt="test" />
								</div>
								<div className="work__cat">{work.type}</div>
								<div className="work__title">{work.title}</div>
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className="noise"></div>
		</section>
	);
};

export default Work;
