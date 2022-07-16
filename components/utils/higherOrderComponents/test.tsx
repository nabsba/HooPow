/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../services';
import ComponentWithLogicDataFetching from './ComponentWithLogicDataFetching';

const fakeComponent: React.FC = () => <h3> Hello</h3>;
describe('Testing higer order component: "ComponentWithLogicDataFetching"', () => {
    test('error component should be displayed', async () => {
        const TestComponentWithRouter = ComponentWithLogicDataFetching(fakeComponent)
        renderWithRouter(<TestComponentWithRouter
            isErrorServer={true}
            isLoading={false}
            componentsHTML={fakeComponent}
        />);

        const error = await screen.findByTestId('testID-error');
        expect(error).toBeInTheDocument();
    });

    test('loading component should be displayed', async () => {
        const TestComponentWithRouter = ComponentWithLogicDataFetching(fakeComponent)
        renderWithRouter(<TestComponentWithRouter
            isErrorServer={false}
            isLoading={true}
            componentsHTML={fakeComponent}
        />);
        const error = await screen.findByTestId('testID-loading');
        expect(error).toBeInTheDocument();
    });


    test('component child should be displayed', async () => {
        const TestComponentWithRouter = ComponentWithLogicDataFetching(fakeComponent)
        renderWithRouter(<TestComponentWithRouter
            isErrorServer={false}
            isLoading={false}
            componentsHTML={fakeComponent}
        />);

        const error = await screen.findByTestId('testID-component');
        expect(error).toBeInTheDocument();
    });
})
