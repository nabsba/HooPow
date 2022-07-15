import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { Suspense } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import { TComic } from '../../../../services/data/type';
import FullScreenComponent from '../../../utils/FullScreen';
import { AnnonceSmall, CSSAnnonceVariant } from '../../molecules';
import { TAnnonceSmall } from '../../molecules/AnnonceSmall';
import { RetrieveComicsOnScrolling } from '../../templates/andromeda/utils';
import SliderComponent from '../slider/Slider';
import { GetAllComponentsNedded, GetAllContexts } from './util';


const base = (stateFullScreen: { doWeDiplayFullScreen: any; }, viewPort: { width: number; }) => css`
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
    position: absolute; 
    top: 3%;
     overflow: auto; 
     right:3%;
}
.slide_wrapper {
    width: ${stateFullScreen.doWeDiplayFullScreen ? '1182' : 'auto'}
}
`
const RightSideTadpole: React.FC<{ comic: TComic, annonce: TAnnonceSmall }> = ({ comic, annonce }) => {
    const { stateFullScreen, contextSlider, comicContext, viewPort, theme } = GetAllContexts();
    const { componentsSlide } = GetAllComponentsNedded(comic,);
    const { scrollRef } = RetrieveComicsOnScrolling(comicContext.comicsInformations, comicContext.getNewListComics);
    const isItTheLastSlide =
        contextSlider.oldSlide + 1 === componentsSlide.length;

    return (<FullScreenComponent>
        <div css={base(stateFullScreen, viewPort)}>
            <div className="tadpole_slider">
                <SliderComponent Components={componentsSlide} wiewPortWidth={viewPort.width} oldSlide={contextSlider.oldSlide} />
            </div>
            {!isItTheLastSlide && !stateFullScreen.doWeDiplayFullScreen && <CSSAnnonceVariant
                viewPortWidth={viewPort.width}
                background={theme.COLORS.PRIMARY}>
                <AnnonceSmall {...annonce} />
            </CSSAnnonceVariant>}
            {isItTheLastSlide && !stateFullScreen.doWeDiplayFullScreen && <div className="gallery_wrapper" ref={scrollRef}>
                {(() => {
                    const ComponentsComicCards = dynamic(() => import('./util'), {
                        suspense: true,
                    })
                    return <Suspense fallback={`Loading...`}>
                        <ComponentsComicCards />
                    </Suspense>

                })()
                }
            </div>
            }
        </div>
    </FullScreenComponent>)
}
export default RightSideTadpole