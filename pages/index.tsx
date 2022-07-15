import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MainFrame } from '../components/utils';
import { Andromeda } from '../components/tree/templates';

const base: any = css`
height:100vh;
background-color: black`
const Home: NextPage = () => {
	// const Andromeda = dynamic(() => import('../components/tree/templates/andromeda/Andromeda'), {
	// 	suspense: true,
	// })
	return (
		<div>
			<Head>
				<title>Hoo pow</title>
				<meta name="description" content="Test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main data-testid="home-page-test" className="flex" css={base}>

				<MainFrame>

					<Andromeda />

				</MainFrame >


			</main>
		</div>
	);
};

export default Home;
