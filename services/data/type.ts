export type TComic = {
    bdImage_toDelete: [];
    bdKey: number;
    enableEditMode: boolean;
    id: string;
    imageHomepage: string;
    locked: boolean;
    lockedBy: string;
    lockedTimestamp: number;
    mainId: string;
    name: string;
    publicationDate: string;
    bdImage: {
        bdId: string;
        bdImageFr: string;
        bdImageKey: number
        id: string;
        name: string;
    }[];
}
export type TLanguages = 'fr';

export type TAllComics = TComic[];
