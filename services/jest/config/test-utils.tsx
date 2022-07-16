import React from 'react';
import { render } from '@testing-library/react';
import {
	createHistory,
	createMemorySource,
	LocationProvider,
} from '@reach/router';
import { ThemeProvider } from '@emotion/react';
import { THEME } from '../../style/constant';

const renderWithRouter = (
	ui: React.ReactNode,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {},
) => {
	return {
		...render(<ThemeProvider theme={THEME}><LocationProvider history={history}>{ui}</LocationProvider> </ThemeProvider>),
		history,
	};
};

export default renderWithRouter;
