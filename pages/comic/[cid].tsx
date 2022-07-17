import { css } from '@emotion/react';
import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Tadpole } from '../../components/tree/templates';
import { MainFrame } from '../../components/utils';
import ComponentWithLogicDataFetching from '../../components/utils/higherOrderComponents/ComponentWithLogicDataFetching';
import { fetchComic } from '../../services/comics/functions';
import { logErrorAsyncMessage, logMessage } from '../../services/common/funtions';


const base: any = css`
height:100vh;
background-color: black`
const Comic: NextPage = () => {
    const router = useRouter();
    const { cid } = router.query;
    const [comic, setComic] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const ComicHTML = ComponentWithLogicDataFetching(Tadpole);
    useEffect(() => {
        const source = axios.CancelToken.source();
        const getComicDetail = async () => {
            setPending(true)
            try {
                if (typeof cid === 'string') {

                    const comic = await fetchComic(cid, source.token);
                    if (comic) {
                        setComic(comic)
                        setError(false)
                    } else {
                        throw new Error("fetchComic");
                    }
                }
            } catch (error) {
                setError(true)
                logMessage(`${logErrorAsyncMessage('contexts/Comics', 'fetchComic')},
                ${error}`);
            }
            finally {
                setPending(false)
            }
        };
        if (cid) getComicDetail()
        return () => {
            source.cancel('axios request cancelled');
        };
    }, [cid]);

    return (
        <div>
            <Head>
                <title>Hoo pow</title>
                <meta name="description" content="Test" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex" css={base}>
                <MainFrame>
                    <ComicHTML
                        isErrorServer={error || !comic}
                        isLoading={pending}
                        comic={comic}
                    />
                </MainFrame >
            </main>
        </div>
    );
};

export default Comic