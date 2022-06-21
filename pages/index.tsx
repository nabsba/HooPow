import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hoo pow</title>
				<meta name="description" content="Test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main data-testid="home-page-test">
				<h2> Hello hoo poww</h2>
			</main>
		</div>
	);
};

export default Home;
