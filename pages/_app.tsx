import "../styles/main.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress color="#ef5300" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
