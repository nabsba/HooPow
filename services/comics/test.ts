/**
 * @jest-environment jsdom
 */
import axios from "axios";
import { PATHS_SERVER } from "../bridge/constant";
import { optionsAxiosTemplate } from "../bridge/requestServer";
import { TComic } from "../data/type";
import { fetchAllComics, fetchComic } from "./functions";


//jest.mock(...) is used to automatically mock the axios module.jest.mock('axios');
// Create an object of type of mocked Axios.
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("fetchComic", () => {
    describe("when API call is successful", () => {
        it("should return comic", async () => {
            const comic: TComic =
            {
                publicationDate: "2021-05-23",
                bdKey: 26,
                lockedTimestamp: 1616925134987,
                bdImage_toDelete: [],
                enableEditMode: true,
                imageHomepage: "images/MSHOW_26_MATUVU_01.jpg",
                locked: false,
                lockedBy: "allamamirasafia@gmail.com",
                mainId: "1616388045700",
                id: "1616388045700-26",
                name: "MATUVU",
                bdImage: [
                    {
                        bdId: "1616388045700-26",
                        bdImageFr: "images/MSHOW_26_MATUVU_01.jpg",
                        id: "1616388045700-26-1",
                        name: "bdImage_1",
                        bdImageKey: 1
                    },
                    {
                        bdId: "1616388045700-26",
                        bdImageFr: "images/MSHOW_26_MATUVU_02.jpg",
                        id: "1616388045700-26-2",
                        name: "bdImage_2",
                        bdImageKey: 2
                    },
                    {
                        bdId: "1616388045700-26",
                        bdImageFr: "images/MSHOW_26_MATUVU_03.jpg",
                        id: "1616388045700-26-3",
                        name: "bdImage_3",
                        bdImageKey: 3
                    },
                    {
                        bdId: "1616388045700-26",
                        bdImageFr: "images/MSHOW_26_MATUVU_04.jpg",
                        id: "1616388045700-26-4",
                        name: "bdImage_4",
                        bdImageKey: 4
                    }
                ]
            };
            mockedAxios.get.mockResolvedValueOnce(comic);
            const result = await fetchComic('104wwew4', "");
            expect(axios.get).toHaveBeenCalledWith(PATHS_SERVER.DETAILS_COMIC('32'), { "cancelToken": "", "params": null, "time": 15000 });
        });
        it("should return comic", async () => {
            const comic = {}
            mockedAxios.get.mockResolvedValueOnce(comic);
            const result = await fetchAllComics("");
            expect(axios.get).toHaveBeenCalledWith(PATHS_SERVER.ALL_COMICS, { "cancelToken": "", "params": null, "time": 15000 });
            // expect(result).toEqual(comic);
        });
    });

    describe("when API call fails", () => {
        it("should return false", async () => {
            const message = "Network Error";
            mockedAxios.get.mockResolvedValueOnce(new Error(message));
            const result = await fetchComic('4', '');
            expect(axios.get).toHaveBeenCalledWith(PATHS_SERVER.DETAILS_COMIC('32'), { "cancelToken": "", "params": null, "time": 15000 });
            expect(result).toEqual(false);
        });
        it("should return false", async () => {
            const message = "Network Error";
            mockedAxios.get.mockResolvedValueOnce(new Error(message));
            const result = await fetchAllComics('');
            expect(axios.get).toHaveBeenCalledWith(PATHS_SERVER.DETAILS_COMIC('32'), { "cancelToken": "", "params": null, "time": 15000 });
            expect(result).toEqual(false);
        });
    });
});