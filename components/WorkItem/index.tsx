import Image from "next/image";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import { useInView } from "react-hook-inview";

const WorkItem = ({ work, set }: any) => {
	const [ref] = useInView({
		onEnter: () => set("work"),
	});
	return (
		<div ref={ref} className="work__item">
			<Link href={`works/${work.slug.current}`}>
				<div className="work__img">
					<Image src={urlFor(work.gallery[0]).url()} fill alt="test" />
				</div>
				<div className="work__cat">{work.type}</div>
				<div className="work__title">{work.title}</div>
			</Link>
		</div>
	);
};

export default WorkItem;
