import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../lib/client";

export default async function getWorks(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.json({});
}

export const loadData = async (start: number, end: number) => {
	const query = `{
		"works": *[_type == "work"]
	}`;

	const { works } = await client.fetch(query);

	return {
		works,
	};
};
