/**
 * @jest-environment jsdom
 */
import Home from './pages';
import { renderWithRouter } from './services';
import { screen } from '@testing-library/react';

test('(home-page) elements required in the left pannel', async () => {
	renderWithRouter(<Home />);
	const annonce = await screen.findByTestId('testID-announcement');
	const titleSVG = await screen.findByTestId('testID-title');
	const announcement = await screen.findByTestId('testID-mainAnnonce');
	expect(annonce).toBeInTheDocument();
	expect(titleSVG).toBeInTheDocument();
	expect(announcement).toBeInTheDocument();

});
