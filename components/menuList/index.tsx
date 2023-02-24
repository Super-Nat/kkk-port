import { useEffect, useState } from "react";

interface Props {
	children?: string;
	sectionPage?: string;
	active?: string;
}

const MenuList = (props: Props) => {
	const handleSectionSlide = (sectionId?: string) => {
		const section: any = sectionId && document.getElementById(sectionId);

		if (sectionId) {
			window.scrollTo(0, section.offsetTop);
		} else {
			window.scrollTo(0, document.body.scrollHeight);
		}
	};
	return (
		<li
			className={props.active === props.sectionPage ? "active" : ""}
			onClick={() => handleSectionSlide(props.sectionPage)}
		>
			{props.children}
		</li>
	);
};

export default MenuList;
