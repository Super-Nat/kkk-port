import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { ScrollerMotion } from "scroller-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import { loadData } from "./api/works";

const Home: NextPage = ({ initialWorks }: any) => {
	const [active, setActive] = useState<string>("");
	return (
		<>
			<Head>
				<title>KKK | Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header active={active} />
			<ScrollerMotion>
				<main>
					<Hero />
					<About setActive={setActive} />
					<Work work={initialWorks} setActive={setActive} />
				</main>

				<Footer setActive={setActive} />
			</ScrollerMotion>
		</>
	);
};

export default Home;

export async function getServerSideProps() {
	const { works } = await loadData(0, 4);

	return {
		props: {
			initialWorks: works,
		},
	};
}
