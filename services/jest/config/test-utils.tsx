import React from 'react';
import { render } from '@testing-library/react';
import {
	createHistory,
	createMemorySource,
	LocationProvider,
} from '@reach/router';

const renderWithRouter = (
	ui: React.ReactNode,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {},
) => {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		history,
	};
};

export default renderWithRouter;
