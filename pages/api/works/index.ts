import type { NextApiRequest, NextApiResponse } from "next";

export default async function getWorks(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.json([
		{
			id: 0,
			title: "test1",
			desc: "ฟหก",
			year: "ฟหกฟหก",
			type: "ฟหก",
			tools: [
				{ image: "ฟแอหก", name: "แอ" },
				{ image: "แอ", name: "แ" },
				{ image: "ฟหอแอก", name: "แอ" },
			],
			gallery: ["อ", "แอ", "แ"],
		},
		{
			id: 2,
			title: "test2",
			desc: "ฟหก",
			year: "ฟหกฟหก",
			type: "ฟหก",
			tools: [
				{ image: "ฟแอหก", name: "แอ" },
				{ image: "แอ", name: "แ" },
				{ image: "ฟหอแอก", name: "แอ" },
			],
			gallery: ["อ", "แอ", "แ"],
		},
		{
			id: 3,
			title: "test3",
			desc: "ฟหก",
			year: "ฟหกฟหก",
			type: "ฟหก",
			tools: [
				{ image: "ฟแอหก", name: "แอ" },
				{ image: "แอ", name: "แ" },
				{ image: "ฟหอแอก", name: "แอ" },
			],
			gallery: ["อ", "แอ", "แ"],
		},
	]);
}
