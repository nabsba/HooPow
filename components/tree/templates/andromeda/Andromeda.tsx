import React, { useContext } from 'react';
import { css } from '@emotion/react'
import Gallery, { CSSGaleryRows } from '../../organisms/Gallery';
import dataCommon from '../../../../services/data/common';
import { LeftSideFrame, RightSideFrame } from '../../../utils';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import getIcon from '../../atoms/icons/Icons';
import { LeftV211 } from '../../organisms';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';
import { ComicsChildContext } from '../../../utils/contexts/Comics';
import { ComponentsCards, RetrieveComicsOnScrolling } from './utils';
import ComponentWithLogicDataFetching from '../../../utils/higherOrderComponents/ComponentWithLogicDataFetching';


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
    const { mainAnnonce, annonce, iconTitle, userMenu } = dataCommon.fr;
    // in case of dynamic language make the use of a use state and set data
    // const sab = import(`../../../../services/data/common`).then(dataRetrieve => {
    //      const { mainAnnonce, annonce, iconTitle, userMenu } = dataRetrieve[fr]; 
    // console.log(dataRetrieve.fr) setData({mainAnnonce, etc})
    // }).catch(err => console.log(err))
    // Then add a loader 

    const { viewPort } = React.useContext(ViewPortChildContext);
    const { comicsInformations,
        getNewListComics, pendingFirstList, pending, handleComicsInformations, errorServer } = useContext(ComicsChildContext);
    const { componentsCards, componentsCardsOnLoad } = ComponentsCards(viewPort.width, handleComicsInformations, comicsInformations);
    const { scrollRef } = RetrieveComicsOnScrolling(comicsInformations, getNewListComics);
    const GalleryOfComics = ComponentWithLogicDataFetching(Gallery);
    return (
        <>

            <LeftSideFrame userMenu={userMenu}>
                <LeftV211
                    annonce={annonce}
                    iconTitle={iconTitle}
                    mainAnnonce={mainAnnonce}
                />
            </LeftSideFrame>
            <RightSideFrame>
                <div className="andromeda_main_component" ref={scrollRef} css={CSSstyleMainComponent(viewPort)}>
                    {/* {errorServer ? <h1> This is a custom component during an error</h1> : pendingFirstList && componentsCards.length == 0 ? <h1 style={{ color: 'white', marginLeft: '1rem' }}>loading</h1> : <CSSGaleryRows viewPortWidth={viewPort.width}> */}
                    <CSSGaleryRows viewPortWidth={viewPort.width}>
                        <GalleryOfComics
                            isErrorServer={errorServer}
                            isLoading={pendingFirstList && componentsCards.length == 0}
                            componentsHTML={componentsCards}
                        />
                    </CSSGaleryRows>
                </div>
                <div className={'position_character'} css={CSSstyleMainCharacter(viewPort)}>
                    {getIcon('Main_character')}
                </div>
            </RightSideFrame>
        </>

    );
};
export default Andromeda;

