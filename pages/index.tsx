import { css, ThemeProvider } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import { MainFrame } from '../components/utils';
import ComicsParentContext, { ComicsChildContext } from '../components/utils/contexts/Comics';
import { THEME } from '../services';
import { Suspense } from 'react'




const base: any = css`
height:100vh;
background-color: black`
const Home: NextPage = () => {
	const {
		comicsInformations,
		getNewListComics,
		handleComicsInformations,
		pendingFirstList,
		pending,
		errorServer,
	} = ComicsParentContext();


	const Andromeda = dynamic(() => import('../components/tree/templates/andromeda/Andromeda'), {
		suspense: true,

	})
	const Tadpole = dynamic(() => import('../components/tree/templates/tadpole/Tadpole'), {
		suspense: true,
		ssr: false,
	})


	return (
		<div>
			<Head>
				<title>Hoo pow</title>
				<meta name="description" content="Test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main data-testid="home-page-test" className="flex" css={base}>
				<ComicsChildContext.Provider
					value={{
						comicsInformations,
						getNewListComics,
						pendingFirstList,
						handleComicsInformations,
						pending,
						errorServer
					}}
				>
					<ThemeProvider theme={THEME}>
						<MainFrame>
							<Suspense fallback={`Loading...`}>
								{comicsInformations.comicSelected.id ? comicsInformations.comicSelectedDetails.bdImage ? <Tadpole /> : <h1> loading </h1> : <Andromeda />}
							</Suspense>
						</MainFrame >
					</ThemeProvider>
				</ComicsChildContext.Provider>
			</main>
		</div>
	);
};

export default Home;
