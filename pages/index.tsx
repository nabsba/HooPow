import { css, ThemeProvider } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { Card } from '../components/tree/molecules';
import { CSSCardOriginal } from '../components/tree/molecules/Card';
import { LeftSideFrame, MainFrame, RightSideFrame } from '../components/utils';
import { ViewPortChildContext } from '../components/utils/contexts/ViewPort';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT, THEME } from '../services';



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
				<ThemeProvider theme={THEME}>
					<MainFrame>
						<LeftSideFrame>  </LeftSideFrame>
						<RightSideFrame>

						</RightSideFrame>
					</MainFrame >
				</ThemeProvider>
			</main>
		</div>
	);
};

export default Home;
