"use client";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
	const res = await fetch("http://localhost:3000/api/works");
	return res.json();
};
const Work = () => {
	const { data, isLoading } = useQuery(["work"], fetchUsers);

	return (
		<section className="work" id="work">
			<div className="wrapper">
				<h2>
					<span>Selected</span>
					Works.
				</h2>
				<div className="work__inner">
					{data?.map((work: any) => (
						<div className="work__item" key={work.id}>
							<Link href="works/test">
								<div className="work__img">
									<Image src="/images/work1.jpg" fill alt="test" />
								</div>
								<div className="work__cat">{work.title}</div>
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
