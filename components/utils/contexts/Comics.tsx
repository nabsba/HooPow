import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TComic } from '../../../services/data/type';
import { PATHS_SERVER } from '../../../services/bridge/constant';
import { serverGet } from '../../../services/bridge/requestServer';
import { logErrorAsyncMessage, logMessage } from '../../../services/common/funtions';
import { fetchAllComics } from '../../../services/comics/functions';

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
    pendingNewList: boolean;
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
    pendingNewList: false,
    errorServer: false
});


const ComicsParentContext = () => {
    const [pendingFirstList, setPendingFirstList] = useState(false);
    const [errorServer, setErrorServer] = useState(false)
    const [pendingNewList, setPendingNewList] = useState(false);
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
        const fetchComicDetail = async () => {
            try {
                const result = await serverGet(PATHS_SERVER.ALL_COMICS);
                if (result.state) {

                }
            } catch (error) {

            }
        }
        if (comicsInformations.comicSelected.id) {
            fetchComicDetail()
        }
    }, [comicsInformations.comicSelected])
    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        setPendingFirstList(true);
        (async () => {
            try {
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
                } else { throw new Error() }
            } catch {
                setPendingFirstList(false);
                setErrorServer(true)
            }

        })()
        return () => {
            source.cancel('axios request cancelled');
        };
    }, []);

    const getNewListComics = async () => {
        try {
            setPendingNewList(true)
            if (comicsInformations.numberOfPages > comicsInformations.page) {
                /* Remote */
                // const lastIndex = comicsInformations.comicsDisplayed.length - 1;
                // const idLastComic = comicsInformations.comicsDisplayed[lastIndex].id;
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
            // setTimeout(() => setPendingNewList(false), 10000);
            setPendingNewList(false)
        }
    };
    const handleComicsInformations = (context: TComicsInformations) => setComicsInformations(context);

    return {
        setComicsInformations,
        comicsInformations,
        pendingFirstList,
        getNewListComics,
        handleComicsInformations,
        pendingNewList,
        errorServer

    };
};

export default ComicsParentContext;
