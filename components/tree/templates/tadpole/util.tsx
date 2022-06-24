import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from "../../../../services";
import { NAMES, PATH } from "../../../../services/data/constant";
import createPropsFromData from "../../../factory/createProps";
import Image from 'next/image';
import { css } from "@emotion/react";
import { Card } from "../../molecules";
import { CSSCardOriginal, CSSCardVariant1, TCard } from "../../molecules/Card";
import { TComicsInformations } from "../../../utils/contexts/Comics";

const ComponentsSlider = (viewPortWidth: number, stateFullScreen: { doWeDiplayFullScreen: boolean }) => {
    const componentsSliders = createPropsFromData('slidersComicImages', '');
    const componentsSlide = componentsSliders.map((comp: any) => <div className="card_slide_size" css={css`
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
            alt="test"
            layout="responsive"
            width={stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPortWidth).WIDTH : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPortWidth).WIDTH}
            height={stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPortWidth).HEIGHT : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPortWidth).HEIGHT}

        />
    </div>)
    return { componentsSlide }
}
const Loading = () => <span style={{ textAlign: 'center', color: 'white', textTransform: 'capitalize' }}> add a loader</span>;

const ComponentsCards = (viewPortWidth: number, handleComicsInformations: any, comicsInformations: TComicsInformations) => {
    const cards = createPropsFromData('cards', comicsInformations.comicsDisplayed);
    const componentsCards = cards.map((card: TCard) =>
        <CSSCardVariant1 viewPortWidth={viewPortWidth}>
            <div onClick={() => handleComicsInformations({
                ...comicsInformations,
                comicSelected: card.informationCard
            })}> <Card {...card} />
            </div>
        </CSSCardVariant1>);
    const componentsCardsOnLoad = []
    for (let index = 0; index < 20; index++) {
        componentsCardsOnLoad.push(<CSSCardVariant1 viewPortWidth={viewPortWidth} >
            <Loading />
        </CSSCardVariant1>)

    }
    return { componentsCards, componentsCardsOnLoad }
}


export { ComponentsSlider, ComponentsCards }