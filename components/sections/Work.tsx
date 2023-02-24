import { useInView } from "react-hook-inview";
import WorkItem from "../WorkItem";

const Work = (props: any) => {
	const [ref] = useInView({
		onEnter: () => props.setActive("work"),
	});

	return (
		<section ref={ref} className="work" id="work">
			<div className="wrapper">
				<h2>
					<span>Selected</span>
					Works.
				</h2>
				<div className="work__inner">
					{props.work.map((work: any) => (
						<WorkItem
							set={props.setActive}
							work={work}
							key={work._id}
						></WorkItem>
					))}
				</div>
			</div>
			<div className="noise"></div>
		</section>
	);
};

export default Work;
