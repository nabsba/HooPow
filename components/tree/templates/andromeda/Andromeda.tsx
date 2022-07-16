import React, { Profiler } from 'react';
import { css } from '@emotion/react'
import { CSSGaleryRows } from '../../organisms/Gallery';
import dataCommon from '../../../../services/data/common';
import { metricsPerformence, SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import getIcon from '../../atoms/icons/Icons';
import { LeftV211 } from '../../organisms';
import { GetAllComponentsNedded, GetAllContexts, RetrieveComicsOnScrolling } from './utils';
import CompositionFrames from '../../../utils/CompositionFrames';


type Props = any;

const CSSstyleMainComponent = (viewPort: { width: number }) => css`
overflow: auto; 
height: 100%;
 padding-top:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.POSITION_GALLERY_ROW_TOP(viewPort.width)}px;
 position: relative
`;
const CSSstyleMainCharacter = (viewPort: { width: number }) => css`
 width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).WIDTH}px;
size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).HEIGHT}px;
position: absolute;
 right: -${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.POSITION_MAIN_CHARACTER(viewPort.width).RIGHT}px;
 top: -${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.POSITION_MAIN_CHARACTER(viewPort.width).TOP}px;
`;

const Andromeda: React.FC<Props> = () => {
    /* in case of dynamic language make the use of a use state and set data
const sab = import(`../../../../services/data/common`).then(dataRetrieve => {
     const { mainAnnonce, annonce, iconTitle, userMenu } = dataRetrieve[fr]; 
console.log(dataRetrieve.fr) setData({mainAnnonce, etc})
}).catch(err => console.log(err)) 
Then add a loader 
*/
    const { mainAnnonce, annonce, iconTitle, userMenu } = dataCommon.fr;
    const { viewPort, comicContext } = GetAllContexts()
    const { ComponentsComicCards, ComponentsComicCardsWithLogicDataFetching } = GetAllComponentsNedded();
    const { scrollRef } = RetrieveComicsOnScrolling(comicContext.comicsInformations, comicContext.getNewListComics);

    const DisplayFirstFetchComics = <CSSGaleryRows viewPortWidth={viewPort.width}>
        {/* <Profiler id="Mesure data loading" onRender={metricsPerformence}> */}
        <ComponentsComicCardsWithLogicDataFetching
            isErrorServer={comicContext.errorServer}
            isLoading={comicContext.pending && comicContext.comicsInformations.comicsDisplayed.length === 0}
            componentsHTML={ComponentsComicCards}
        />
        {/* </Profiler> */}
    </CSSGaleryRows>

    const RightSideFrameChild = <> <div className="andromeda_main_component" ref={scrollRef} css={CSSstyleMainComponent(viewPort)}>
        {DisplayFirstFetchComics}
    </div>
        <div className={'position_character'} css={CSSstyleMainCharacter(viewPort)}>
            {getIcon('Main_character')}
        </div>
    </>
    return (
        <CompositionFrames
            leftSideFrameProps={{
                userMenu, childComponent: <LeftV211
                    annonce={annonce}
                    iconTitle={iconTitle}
                    mainAnnonce={mainAnnonce} />
            }}

            rightSideFrameProps={{
                childComponent: RightSideFrameChild
            }}
        />
    );
};
export default Andromeda;

