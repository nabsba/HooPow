import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TComic } from '../../../services/data/type';
import { logErrorAsyncMessage, logMessage } from '../../../services/common/funtions';
import { fetchAllComics } from '../../../services/comics/functions';

export type TComicsInformations = {
    language: TLanguages;
    allComics: TComic[];
    comicsDisplayed: any[];
    totalNumberOfComicsAvailableInTheDB: number;
    numberOfPages: number;
    comicsPerPage: number;
    page: number;
}
type TLanguages = 'fr';
interface ComicsContext {
    comicsInformations: TComicsInformations;
    handleComicsInformations: (data: TComicsInformations) => any;
    getNewListComics: () => any;
    pending: boolean;
    errorServer: boolean;
}

export const ComicsChildContext = React.createContext<ComicsContext>({
    comicsInformations: {
        language: 'fr',
        allComics: [],
        comicsDisplayed: [],
        totalNumberOfComicsAvailableInTheDB: 0,
        numberOfPages: 0,
        comicsPerPage: 20,
        page: 0,
    },
    handleComicsInformations: (data: TComicsInformations) => data,
    getNewListComics: () => '',
    pending: false,
    errorServer: false
});

const ComicsParentContext = () => {

    const [errorServer, setErrorServer] = useState(false)
    const [pending, setPending] = useState(false);
    const [comicsInformations, setComicsInformations] = useState<TComicsInformations>({
        language: 'fr',
        allComics: [],
        comicsDisplayed: [],
        totalNumberOfComicsAvailableInTheDB: 0,
        numberOfPages: 0,
        comicsPerPage: 20,
        page: 1,
    });
    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        (async () => {
            try {
                console.log('fetch comics')
                setPending(true)
                const comics = await fetchAllComics();
                if (comics) {
                    handleComicsInformations({
                        ...comicsInformations,
                        allComics: comics,
                        totalNumberOfComicsAvailableInTheDB: comics.length,
                        numberOfPages: comics.length / 20,
                        comicsDisplayed: comics.slice(0, comicsInformations.page * 20),
                        page: 1,
                    });
                    setPending(false)
                    return;
                } else { throw new Error('fetchAllComics') }
            } catch (error) {
                setPending(false)
                setErrorServer(true)
                logMessage(`${logErrorAsyncMessage('contexts/Comics', 'fetchComic')},
                ${error}`);
            }
        })()
        return () => {
            source.cancel('axios request cancelled');
        };
    }, []);

    const getNewListComics = async () => {
        try {
            if (comicsInformations.numberOfPages > comicsInformations.page) {
                setPending(true)
                /* Remote */
                // const lastIndex = comicsInformations.comicsDisplayed.length - 1;
                // const idLastComic = comicsInformations.comicsDisplayed[lastIndex].id;
                // await newListComic(id)
                // call api
                // push result
                /* Local */
                const {
                    totalNumberOfComicsAvailableInTheDB,
                    page,
                    comicsPerPage,
                    comicsDisplayed
                } = comicsInformations;

                const comicsRemaining =
                    totalNumberOfComicsAvailableInTheDB - comicsDisplayed.length;
                const canWeLoadAFullPage = comicsPerPage < comicsRemaining;
                const numberOfComicsToPush = canWeLoadAFullPage
                    ? 20
                    : comicsRemaining;
                const newDataToPush = comicsInformations.allComics.slice(comicsDisplayed.length - 1, comicsDisplayed.length - 1 + numberOfComicsToPush);
                handleComicsInformations({
                    ...comicsInformations,
                    comicsDisplayed: [...comicsInformations.comicsDisplayed, ...newDataToPush],
                    page: page + 1,
                });
                setPending(false)
            }
        } catch (error) {
            logMessage(`${logErrorAsyncMessage('cntexts/Comics', 'getNewListComics')},
			${error}`);
            setPending(false)
        }
    };
    const handleComicsInformations = (context: TComicsInformations) => setComicsInformations(context);

    return {
        setComicsInformations,
        comicsInformations,
        getNewListComics,
        handleComicsInformations,
        pending,
        errorServer

    };
};

export default ComicsParentContext;
