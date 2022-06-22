import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LeftSideFrame, MainFrame, RightSideFrame } from '../components/utils';


const LeftChild: React.FC = () => <h1> Left child</h1>
const RightChild: React.FC = () => <h1> RightChild</h1>


const base: any = css`
height:100vh;
background-color: black`
const Home: NextPage = () => {

	return (
		<div>
			<Head>
				<title>Hoo pow</title>
				<meta name="description" content="Test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main data-testid="home-page-test" className="flex" css={base}>
				<MainFrame>
					<LeftSideFrame>  <LeftChild /> </LeftSideFrame>
					<RightSideFrame> <RightChild /> </RightSideFrame>
				</MainFrame >
			</main>
		</div>
	);
};

export default Home;
