import { PATHS_SERVER } from "../bridge/constant";
import { serverGet } from "../bridge/requestServer";
import { logMessage, logErrorAsyncMessage } from "../common/funtions";

const fetchComic = async (id: string) => {
    try {
        const result = await serverGet(PATHS_SERVER.DETAILS_COMIC(id));
        if (result.state) {
            return result.data
        } else { throw new Error() }
    } catch (error) {
        logMessage(`${logErrorAsyncMessage('contexts/Comics', 'fetchComic')},
        ${error}`);
        return false;
    }
};
const fetchAllComics = async () => {
    try {
        const result = await serverGet(PATHS_SERVER.ALL_COMICS);
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