import type { NextPage } from "next";
import Head from "next/head";
import { ScrollerMotion } from "scroller-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";

const Home: NextPage = () => {
	return (
		// <ScrollerMotion>
		<>
			<Head>
				<title>KKK | Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />
				<Hero />
				<About />
				<Work />
			</main>

			<Footer />
		</>
		// </ScrollerMotion>
	);
};

export default Home;
