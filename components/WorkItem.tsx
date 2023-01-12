import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {};

const WorkItem = (props: Props) => {
	return (
		<div className="work__item">
			<Link href="works/test">
				<div className="work__img">
					<Image src="/images/work1.jpg" fill alt="test" />
				</div>
				<div className="work__cat">Test cat</div>
				<div className="work__title">Test title</div>
			</Link>
		</div>
	);
};

export default WorkItem;
