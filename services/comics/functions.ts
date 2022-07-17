import { PATHS_SERVER } from "../bridge/constant";
import { optionsAxiosTemplate, serverGet } from "../bridge/requestServer";
import { logMessage, logErrorAsyncMessage } from "../common/funtions";

const fetchComic = async (id: string, sourceToken: any) => {
    try {
        const options = { ...optionsAxiosTemplate };
        options.cancelToken = sourceToken
        const result = await serverGet(PATHS_SERVER.DETAILS_COMIC(id), options);
        if (result.state) {
            return result.data
        } else { throw new Error() }
    } catch (error) {
        logMessage(`${logErrorAsyncMessage('contexts/Comics', 'fetchComic')},
        ${error}`);
        return false;
    }
};
const fetchAllComics = async (sourceToken: any) => {
    try {
        const options = { ...optionsAxiosTemplate };
        options.cancelToken = sourceToken;
        const result = await serverGet(PATHS_SERVER.ALL_COMICS, options);
        if (result.state) {
            return result.data
        } else { throw new Error() }
    } catch (error) {
        logMessage(`${logErrorAsyncMessage('contexts/Comics', 'fetchAllComics')},
        ${error}`);
        return false;
    }
};


export { fetchAllComics, fetchComic }