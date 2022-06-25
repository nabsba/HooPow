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
import FullScreenComponent from '../../../utils/FullScreen';


const Tadpole: React.FC = ({ }) => {
    const { handleStateFullScreen, stateFullScreen } = FullScreenParentContext();
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { comicsInformations,
        getNewListComics, pending, handleComicsInformations, errorServer } = React.useContext(ComicsChildContext);
    const { scrollRef } = RetrieveComicsOnScrolling(comicsInformations, getNewListComics);
    const { componentsCards, componentsCardsOnLoad } = ComponentsCards(viewPort.width, handleComicsInformations, comicsInformations);
    const { componentsSlide } = ComponentsSlider(viewPort.width, stateFullScreen, comicsInformations.comicSelectedDetails)
    const card = createPropsFromData('card', comicsInformations.comicSelected);
    const theme: any = useTheme();
    const { annonce, mainAnnonce, userMenu } = dataCommon.fr;
    const { handleSlider, contextSlider } = SlideParentContext();
    const isItTheLastSlide =
        contextSlider.oldSlide + 1 === componentsSlide.length;
    const base = css`
    height:100%;
    width:100%;
    .tadpole_slider {
        display: flex;
        height: 100%;
         .slick-dots {
            display: ${stateFullScreen.doWeDiplayFullScreen ? 'none' : 'block'};
        }
        .slides_wrapper {
        margin:auto;
         width:${stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPort.width).WIDTH : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).WIDTH}px !important;
         height:${stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPort.width).HEIGHT : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).HEIGHT}px;
        }
        .card_slide_size {
            width:${stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPort.width).WIDTH : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).WIDTH}px !important;
            height:${stateFullScreen.doWeDiplayFullScreen ? SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_FULL_SCREEN(viewPort.width).HEIGHT : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).HEIGHT}px;
    }
    }
    .gallery_wrapper { 
        height: 100vh;
    }
    .slide_wrapper {
        width: ${stateFullScreen.doWeDiplayFullScreen ? '1182' : 'auto'}
        
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
                <LeftSideFrame userMenu={userMenu}>
                    {contextSlider.oldSlide > 0 ? <TadpoleLeftSideChildV2 /> : <TadpoleLeftSideChildV1 card={card} viewPortWidth={viewPort.width} mainAnnonce={mainAnnonce} />}
                </LeftSideFrame>
                <RightSideFrame>
                    {errorServer ? <h1> Your error component</h1> :
                        <FullScreenComponent>
                            <div css={base}>
                                {componentsSlide.length && componentsSlide.length > 0 ?
                                    <div className="tadpole_slider">
                                        <SliderComponent Components={componentsSlide} wiewPortWidth={viewPort.width} />
                                    </div> : <h1> loading</h1>
                                }
                                {!isItTheLastSlide && !stateFullScreen.doWeDiplayFullScreen && <CSSAnnonceVariant
                                    viewPortWidth={viewPort.width}
                                    background={theme.COLORS.PRIMARY}>
                                    <AnnonceSmall {...annonce} />
                                </CSSAnnonceVariant>}
                                {isItTheLastSlide && <div className="gallery_wrapper" ref={scrollRef} css={css`position: absolute; top: 3%; right: 0; overflow: auto; right: 3%;`}>
                                    <CSSGaleryColumn viewPortWidth={viewPort.width}>
                                        <Gallery componentsHTML={pending ? componentsCardsOnLoad : componentsCards} />
                                        {pending && <Gallery componentsHTML={componentsCardsOnLoad} />}
                                    </CSSGaleryColumn>
                                </div>
                                }
                            </div>
                        </FullScreenComponent>
                    }

                </RightSideFrame>
            </SlideChildContext.Provider>
        </FullScreenChildContext.Provider>
    </>)

}
export default Tadpole