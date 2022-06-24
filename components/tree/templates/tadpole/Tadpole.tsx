import { css, useTheme } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import dataCommon from '../../../../services/data/common';
import { LeftSideFrame, RightSideFrame } from '../../../utils';
import FullScreenParentContext, { FullScreenChildContext } from '../../../utils/contexts/FullScreen';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';
import { SliderComponent, TadpoleLeftSideChildV1, TadpoleLeftSideChildV2 } from '../../organisms';
import AnnonceSmall, { CSSAnnonceVariant } from '../../molecules/AnnonceSmall';
import Gallery, { CSSGaleryColumn } from '../../organisms/Gallery';
import { ComponentsCards, ComponentsSlider } from './util';
import { ComicsChildContext } from '../../../utils/contexts/Comics';
import { RetrieveComicsOnScrolling } from '../andromeda/utils';
import SlideParentContext, { SlideChildContext } from '../../../utils/contexts/Slider';
import createPropsFromData from '../../../factory/createProps';


const Tadpole: React.FC = ({ }) => {
    const { handleStateFullScreen, stateFullScreen } = FullScreenParentContext();
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { comicsInformations,
        getNewListComics, pendingFirstList, pendingNewList, handleComicsInformations } = React.useContext(ComicsChildContext);
    const { scrollRef } = RetrieveComicsOnScrolling(comicsInformations, getNewListComics);
    const { componentsCards, componentsCardsOnLoad } = ComponentsCards(viewPort.width, handleComicsInformations, comicsInformations);
    const { componentsSlide } = ComponentsSlider(viewPort.width)
    const card = createPropsFromData('card', comicsInformations.comicSelected);
    const theme: any = useTheme();
    const { annonce, mainAnnonce } = dataCommon.fr;
    const { handleSlider, contextSlider } = SlideParentContext();
    const isItTheLastSlide =
        contextSlider.oldSlide + 1 === componentsSlide.length;
    const CSSSlider = css`
        display: flex;
        height: 100%;
        .slides_wrapper {
        margin:auto;
        width:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).WIDTH}px !important;
         height:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).HEIGHT}px;
    }
    `

    return (<>
        <FullScreenChildContext.Provider value={{
            handleStateFullScreen,
            stateFullScreen
        }}>
            <SlideChildContext.Provider value={{
                handleSlider, contextSlider
            }}>

                <LeftSideFrame>
                    {contextSlider.oldSlide > 0 ? <TadpoleLeftSideChildV2 /> : <TadpoleLeftSideChildV1 card={card} viewPortWidth={viewPort.width} mainAnnonce={mainAnnonce} />}
                </LeftSideFrame>
                <RightSideFrame>
                    <div className="here" css={CSSSlider}>
                        <SliderComponent Components={componentsSlide} wiewPortWidth={viewPort.width} />
                    </div>

                    {!isItTheLastSlide && <CSSAnnonceVariant
                        viewPortWidth={viewPort.width}
                        background={theme.COLORS.PRIMARY}>
                        <AnnonceSmall {...annonce} />
                    </CSSAnnonceVariant>}

                    {isItTheLastSlide && <div className="andromeda_main_component" ref={scrollRef} css={css`position: absolute; top: 3%; right: 0; overflow: auto; right: 3%;`}>
                        <CSSGaleryColumn viewPortWidth={viewPort.width}>
                            <Gallery componentsHTML={pendingFirstList ? componentsCardsOnLoad : componentsCards} />
                            {pendingNewList && <Gallery componentsHTML={componentsCardsOnLoad} />}
                        </CSSGaleryColumn>
                    </div>
                    }

                </RightSideFrame>
            </SlideChildContext.Provider>
        </FullScreenChildContext.Provider>
    </>)

}
export default Tadpole