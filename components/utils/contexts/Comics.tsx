import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TComic } from '../../../services/data/type';
import { logErrorAsyncMessage, logMessage } from '../../../services/common/funtions';
import { fetchAllComics, fetchComic } from '../../../services/comics/functions';

export type TComicsInformations = {
    language: TLanguages;
    allComics: TComic[];
    comicsDisplayed: any[];
    comicSelected: any;
    comicSelectedDetails: any,
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
    pendingFirstList: boolean;
    pending: boolean;
    errorServer: boolean;
}

export const ComicsChildContext = React.createContext<ComicsContext>({
    comicsInformations: {
        language: 'fr',
        allComics: [],
        comicsDisplayed: [],
        comicSelected: {},
        comicSelectedDetails: {},
        totalNumberOfComicsAvailableInTheDB: 0,
        numberOfPages: 0,
        comicsPerPage: 20,
        page: 0,
    },
    handleComicsInformations: (data: TComicsInformations) => data,
    getNewListComics: () => '',
    pendingFirstList: false,
    pending: false,
    errorServer: false
});

const ComicsParentContext = () => {
    const [pendingFirstList, setPendingFirstList] = useState(false);
    const [errorServer, setErrorServer] = useState(false)
    const [pending, setPending] = useState(false);
    const [comicsInformations, setComicsInformations] = useState<TComicsInformations>({
        language: 'fr',
        allComics: [],
        comicsDisplayed: [],
        comicSelected: {},
        comicSelectedDetails: {},
        totalNumberOfComicsAvailableInTheDB: 0,
        numberOfPages: 0,
        comicsPerPage: 20,
        page: 1,
    });
    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        (async () => {
            setPending(true)
            try {
                const comic = await fetchComic(comicsInformations.comicSelected.id);
                if (comic) {
                    handleComicsInformations({
                        ...comicsInformations,
                        comicSelectedDetails: comic
                    })
                } else {
                    throw new Error("fetchComic");
                }
            } catch (error) {
                setErrorServer(true)
                logMessage(`${logErrorAsyncMessage('contexts/Comics', 'fetchComic')},
                ${error}`);
            }
            finally {
                setPending(false)
            }
        })();
        return () => {
            source.cancel('axios request cancelled');
        };

    }, [comicsInformations.comicSelected.id])
    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        (async () => {
            try {
                setPendingFirstList(true);
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
                    setPendingFirstList(false);
                    return;
                } else { throw new Error('fetchAllComics') }
            } catch (error) {
                setPendingFirstList(false);
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
            setPending(true)
            if (comicsInformations.numberOfPages > comicsInformations.page) {
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
            }
        } catch (error) {
            logMessage(`${logErrorAsyncMessage('cntexts/Comics', 'getNewListComics')},
			${error}`);
        } finally {
            // setTimeout(() => setPending(false), 10000);
            setPending(false)
        }
    };
    const handleComicsInformations = (context: TComicsInformations) => setComicsInformations(context);

    return {
        setComicsInformations,
        comicsInformations,
        pendingFirstList,
        getNewListComics,
        handleComicsInformations,
        pending,
        errorServer

    };
};

export default ComicsParentContext;
