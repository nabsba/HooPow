/**
 * @jest-environment jsdom
 */
import Home from './pages';
import { renderWithRouter } from './services';
import { screen } from '@testing-library/react';
import { ComicsChildContext } from './components/utils/contexts';
import { debug } from 'jest-preview';



describe('Testing Home page that elements are visible', () => {
	test('Left frame with its elements', async () => {
		renderWithRouter(<Home />);
		const leftFrame = await screen.findByTestId("testID-leftFrame");
		const annonce = await screen.findByTestId('testID-announcement');
		const titleSVG = await screen.findByTestId('testID-title');
		const announcement = await screen.findByTestId('testID-mainAnnonce');
		expect(leftFrame).toBeInTheDocument();
		expect(annonce).toBeInTheDocument();
		expect(titleSVG).toBeInTheDocument();
		expect(announcement).toBeInTheDocument();
	});
	test('Right frame', async () => {
		renderWithRouter(<Home />);
		const rightFrame = await screen.findByTestId('testID-rightFrame');
		expect(rightFrame).toBeInTheDocument();

	});

	[
		{
			testInformations: {
				scenario: 'errorServer during the fetch leads to ErrorComponent to be displayed',
				testIdToCheck: 'testID-error', id: 1
			},
			contextData: {
				comicsInformations: {
					language: "fr",
					allComics: [],
					comicsDisplayed: [],
					comicsPerPage: 20,
					numberOfPages: 0,
					page: 1,
					totalNumberOfComicsAvailableInTheDB: 100
				},
				errorServer: true,
				getNewListComics: () => null,
				pending: false,
				handleComicsInformations: () => null
			}
		},
		{
			testInformations: {
				scenario: 'pending during the fetch leads to LoadingComponent to be displayed',
				testIdToCheck: 'testID-loading',
				id: 2
			},
			contextData: {
				comicsInformations: {
					language: "fr",
					allComics: [],
					comicsDisplayed: [],
					comicsPerPage: 20,
					numberOfPages: 0,
					page: 1,
					totalNumberOfComicsAvailableInTheDB: 100
				},
				errorServer: false,
				getNewListComics: () => null,
				pending: true,
				handleComicsInformations: () => null
			}
		},
		{
			testInformations: {
				scenario: 'fetching success leads to the component to be displayed',
				testIdToCheck: 'testID-gallery',
				id: 3
			},
			contextData: {
				comicsInformations: {
					language: "fr",
					allComics: [],
					comicsDisplayed: [{
						bdImage_toDelete: [],
						bdKey: 1,
						enableEditMode: true,
						id: "1616388045700-1",
						imageHomepage: "images/MSHOW_01_ADDITION_01.jpg",
						locked: false,
						lockedBy: "noredineallam@gmail.com",
						lockedTimestamp: 1616831387515,
						mainId: "1616388045700",
						name: "ADDITION",
						publicationDate: "2021-03-27"
					},
					{
						bdImage_toDelete: [],
						bdKey: 2,
						enableEditMode: true,
						id: "1616388045700-2",
						imageHomepage: "images/MSHOW_01_ADDITION_01.jpg",
						locked: false,
						lockedBy: "noredineallam@gmail.com",
						lockedTimestamp: 1616831387515,
						mainId: "1616388045700",
						name: "VIVRE",
						publicationDate: "2021-03-27"
					}],
					comicsPerPage: 20,
					numberOfPages: 0,
					page: 1,
					totalNumberOfComicsAvailableInTheDB: 100
				},
				errorServer: false,
				getNewListComics: () => null,
				pending: false,
				handleComicsInformations: () => null
			}
		}
	].forEach(({ contextData, testInformations }) => {
		test(testInformations.scenario, async () => {
			renderWithRouter(<ComicsChildContext.Provider
				value={contextData}><Home /> </ComicsChildContext.Provider>);

			const element = await screen.findByTestId(testInformations.testIdToCheck);
			if (testInformations.id === 3) {
				debug();
				expect(document.getElementsByClassName('card_comic').length).toBe(2);

			}
			expect(element).toBeInTheDocument();
		})
	})

});

