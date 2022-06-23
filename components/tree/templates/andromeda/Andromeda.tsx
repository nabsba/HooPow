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


type Props = any;

const Andromeda: React.FC<Props> = () => {
    const { mainAnnonce, annonce, iconTitle } = dataCommon.fr;
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { comicsInformations,
        getNewListComics, pendingFirstList, pendingNewList, handleComicsInformations } = useContext(ComicsChildContext);
    const { componentsCards, componentsCardsOnLoad } = ComponentsCards(comicsInformations.comicsDisplayed, viewPort.width, handleComicsInformations, comicsInformations);
    const { scrollRef } = RetrieveComicsOnScrolling(comicsInformations, getNewListComics);
    const CSSstyleMainComponent = css`
    overflow: auto; 
    height: 100%;
     padding-top: 6%; 
     position: relative
    `;
    const CSSstyleMainCharacter = css`
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).WIDTH}px;
    size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).HEIGHT}px;
    position: fixed;
    top: -3%;
    right: -20%;`;

    return (
        <>
            <LeftSideFrame>
                <LeftV211
                    annonce={annonce}
                    iconTitle={iconTitle}
                    mainAnnonce={mainAnnonce}
                />
            </LeftSideFrame>
            <RightSideFrame>
                <div className="andromeda_main_component" ref={scrollRef} css={CSSstyleMainComponent}>
                    <CSSGaleryRows styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(viewPort.width).HEIGHT }}>
                        <Gallery componentsHTML={pendingFirstList ? componentsCardsOnLoad : componentsCards} />
                        {pendingNewList && <Gallery componentsHTML={componentsCardsOnLoad} />}
                    </CSSGaleryRows>
                </div>
                <div className={'position_character'} css={CSSstyleMainCharacter}>
                    {getIcon('Main_character')}
                </div>
            </RightSideFrame>
        </>
    );
};
export default Andromeda;

