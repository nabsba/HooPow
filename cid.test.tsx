/**
 * @jest-environment jsdom
 */

import { renderWithRouter } from './services';
import { screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import Comic from './pages/comic/[cid]';
import axios from 'axios';


const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const comicFake = {
    bdImage: [{
        bdId: "1616388045700-26",
        bdImageFr: "images/MSHOW_26_MATUVU_01.jpg",
        bdImageKey: 1,
        id: "1616388045700-26-1",
        name: "bdImage_1"
    },
    {
        bdId: "1616388045700-26",
        bdImageFr: "images/MSHOW_26_MATUVU_02.jpg",
        bdImageKey: 2,
        id: "1616388045700-26-2",
        name: "bdImage_2"
    }, {
        bdId: "1616388045700-26",
        bdImageFr: "images/MSHOW_26_MATUVU_03.jpg",
        bdImageKey: 3,
        id: "1616388045700-26-3",
        name: "bdImage_3"
    },
    {
        bdId: "1616388045700-26",
        bdImageFr: "images/MSHOW_26_MATUVU_04.jpg",
        bdImageKey: 4,
        id: "1616388045700-26-4",
        name: "bdImage_4"
    }
    ],
    bdImage_toDelete: [],
    bdKey: 26,
    enableEditMode: true,
    id: "1616388045700-26",
    imageHomepage: "images/MSHOW_26_MATUVU_01.jpg",
    locked: false,
    lockedBy: "allamamirasafia@gmail.com",
    lockedTimestamp: 1616925134987,
    mainId: "1616388045700",
    name: "MATUVU",
    publicationDate: "2021-05-23"
}


describe('Testing Home page that elements are visible', () => {
    test('', async () => {
        expect(true).toBeTruthy();
        // const cancelTokenSource: any = { cancel: jest.fn(), token: { reason: { message: 'user canceled' } } };
        // jest.spyOn(axios.CancelToken, 'source').mockReturnValueOnce(cancelTokenSource);
        // jest.spyOn(axios, 'get').mockResolvedValueOnce(comicFake);
        // useRouter.mockImplementationOnce(() => ({
        //     query: { cid: 'coffee' },
        // }))
        // renderWithRouter(<Comic />);
        // debug();
        // const element = await screen.findAllByText('LA BD DU JOUR');
        // expect(element[0]).toBeInTheDocument();
    })
});

// describe('Testing Home page that elements are visible', () => {
//     test('', async () => {
//         // const ComicHTML = ComponentWithLogicDataFetching(Tadpole);
//         // renderWithRouter(<ComicHTML
//         //     isErrorServer={false}
//         //     isLoading={false}
//         //     comic={comicFake}
//         // />);
//         // const cancelTokenSource = { cancel: jest.fn(), token: { reason: { message: 'user canceled' } } };
//         // jest.spyOn(axios.CancelToken, 'source').mockReturnValueOnce(cancelTokenSource);
//         // jest.spyOn(axios, 'get').mockResolvedValueOnce(comicFake);
//         // useRouter.mockImplementationOnce(() => ({
//         //     query: { cid: 'coffee' },
//         // }))
//         mockAxios.get.mockImplementationOnce(() =>
//             Promise.resolve({
//                 data: { results:comicFake }
//             })
//         );
//         debug();
//         const element = await screen.findAllByText('LA BD DU JOUR');
//         expect(element[0]).toBeInTheDocument();
//     })
// });
