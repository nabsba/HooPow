import { useTheme } from "@emotion/react";
import React from "react";
import { TComic } from "../../../../services/data/type";
import { FullScreenChildContext, SlideChildContext, ComicsChildContext, ViewPortChildContext } from "../../../utils/contexts"
import ComponentWithLogicDataFetching from "../../../utils/higherOrderComponents/ComponentWithLogicDataFetching";
import { ComponentsSlider, ComponentsCards } from "../../templates/tadpole/util";
import Gallery, { CSSGaleryColumn } from "../Gallery";

const GetAllContexts = () => {
    const theme: any = useTheme();
    const { stateFullScreen } = React.useContext(FullScreenChildContext);
    const { contextSlider } = React.useContext(SlideChildContext);
    const { comicsInformations,
        getNewListComics, pending, handleComicsInformations, errorServer } = React.useContext(ComicsChildContext);
    const comicContext = {
        comicsInformations,
        getNewListComics, pending, handleComicsInformations, errorServer
    }
    const { viewPort } = React.useContext(ViewPortChildContext);
    return { stateFullScreen, contextSlider, comicContext, viewPort, theme }
};

const GetAllComponentsNedded = (comic: TComic) => {
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { stateFullScreen } = React.useContext(FullScreenChildContext);;
    const { componentsSlide } = ComponentsSlider(viewPort.width, stateFullScreen, comic.bdImage);
    return { componentsSlide }
}

const ComponentsComicCards: React.FC = () => {
    const { viewPort } = React.useContext(ViewPortChildContext);
    const GalleryOfComics = React.memo(ComponentWithLogicDataFetching(Gallery));
    const { comicsInformations,
        pending, handleComicsInformations, errorServer } = React.useContext(ComicsChildContext);
    const { componentsCards } = ComponentsCards(viewPort.width, handleComicsInformations, comicsInformations);
    return <CSSGaleryColumn viewPortWidth={viewPort.width}>
        <GalleryOfComics
            isErrorServer={errorServer}
            isLoading={pending}
            componentsHTML={componentsCards}
        />
    </CSSGaleryColumn>
}

export { GetAllContexts, GetAllComponentsNedded }
export default ComponentsComicCards