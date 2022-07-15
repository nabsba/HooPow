import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { THEME } from '../services';
import ComicsParentContext, { ComicsChildContext } from '../components/utils/contexts/Comics';
function MyApp({ Component, pageProps }: AppProps) {
	const {
		comicsInformations,
		getNewListComics,
		handleComicsInformations,
		pending,
		errorServer,
	} = ComicsParentContext();
	return <React.StrictMode> <ThemeProvider theme={THEME}>
		<ComicsChildContext.Provider
			value={{
				comicsInformations,
				getNewListComics,
				handleComicsInformations,
				pending,
				errorServer
			}}
		>
			<Component {...pageProps} /></ComicsChildContext.Provider></ThemeProvider></React.StrictMode>;
}

export default MyApp;
