import { css, ThemeProvider } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Tadpole } from '../components/tree/templates';
import Andromeda from '../components/tree/templates/andromeda/Andromeda';
import { MainFrame } from '../components/utils';
import ComicsParentContext, { ComicsChildContext } from '../components/utils/contexts/Comics';
import { THEME } from '../services';




const base: any = css`
height:100vh;
background-color: black`
const Home: NextPage = () => {
	const {
		comicsInformations,
		getNewListComics,
		handleComicsInformations,
		pendingFirstList,
		pendingNewList
	} = ComicsParentContext();
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
						<ComicsChildContext.Provider
							value={{
								comicsInformations,
								getNewListComics,
								pendingFirstList,
								handleComicsInformations,
								pendingNewList
							}}
						>
							{comicsInformations.comicSelected.id ? <Tadpole /> : <Andromeda />}
						</ComicsChildContext.Provider>
					</MainFrame >
				</ThemeProvider>
			</main>
		</div>
	);
};

export default Home;
