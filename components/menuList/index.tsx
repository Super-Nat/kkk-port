import { useEffect, useState } from "react";

interface Props {
	children?: string;
	sectionPage?: string;
}

const MenuList = ({ children, sectionPage }: Props) => {
	const handleSectionSlide = (sectionId?: string) => {
		const section: any = sectionId && document.getElementById(sectionId);

		if (sectionId) {
			window.scrollTo(0, section.offsetTop);
		} else {
			window.scrollTo(0, document.body.scrollHeight);
		}
	};
	return <li onClick={() => handleSectionSlide(sectionPage)}>{children}</li>;
};

export default MenuList;
