/**
 * @jest-environment jsdom
 */
import Home from '.';
import { renderWithRouter } from '../services';
import { screen } from '@testing-library/react';

test('init first tests to check the configuration of react test library', async () => {
	renderWithRouter(<Home />);
	expect(await screen.findByTestId('home-page-test')).toBeInTheDocument();
	expect(await screen.findByText('Hello hoo poww')).toBeInTheDocument();
	expect(screen.queryByText('Right, I am not here')).toBeFalsy();
});
