import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from "../../../../services";
import { NAMES, PATH } from "../../../../services/data/constant";
import createPropsFromData from "../../../factory/createProps";
import Image from 'next/image';
import { css } from "@emotion/react";
import { Card } from "../../molecules";
import { CSSCardVariant1, TCard } from "../../molecules/Card";
import { TComicsInformations } from "../../../utils/contexts/Comics";
import React from "react";
import { ViewPortChildContext } from "../../../utils/contexts";
import SlideParentContext from "../../../utils/contexts/Slider";
import FullScreenParentContext from "../../../utils/contexts/FullScreen";

const ComponentsSlider = (viewPortWidth: number, stateFullScreen: { doWeDiplayFullScreen: boolean }, comicBDimages: any) => {
    const componentsSliders = createPropsFromData('slidersComicImages', comicBDimages);
    const componentsSlide = componentsSliders.map((comp: any, index: number) => <div key={index} className="card_slide_size" css={css`
        position: relative;
        width:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPortWidth).WIDTH}px !important;
        height:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPortWidth).HEIGHT}px;
         & img {border-radius: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_5(viewPortWidth)}px;
        }
    `}> <Image
            src={
                comp.image.src
                    ? comp.image.src
                    : `${PATH.ASSETS.IMAGES}${NAMES.IMAGE_DEFAULT}`
            }
            alt={comp.name}
            layout="responsive"
            width={stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPortWidth).WIDTH : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPortWidth).WIDTH}
            height={stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPortWidth).HEIGHT : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPortWidth).HEIGHT}

        />
    </div>)
    return { componentsSlide }
}
const ComponentsCards = (viewPortWidth: number, handleComicsInformations: any, comicsInformations: TComicsInformations) => {
    const cards = createPropsFromData('cards', comicsInformations.comicsDisplayed);
    const componentsCards = cards.map((card: TCard, index: number) =>
        <CSSCardVariant1 key={index} viewPortWidth={viewPortWidth}>
            <div onClick={() => handleComicsInformations({
                ...comicsInformations,
                comicSelected: card.informationCard
            })}> <Card {...card} />
            </div>
        </CSSCardVariant1>);

    return { componentsCards }
}
const GetAllContexts = () => {
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { handleStateFullScreen, stateFullScreen } = FullScreenParentContext();
    const fullScreenContext = { handleStateFullScreen, stateFullScreen }
    const { handleSlider, contextSlider } = SlideParentContext();
    const sliderContext = { handleSlider, contextSlider }

    return { viewPort, sliderContext, fullScreenContext }
}



export { ComponentsSlider, ComponentsCards, GetAllContexts }