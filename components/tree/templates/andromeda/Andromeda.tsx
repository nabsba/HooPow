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
    const { mainAnnonce, annonce, iconTitle, userMenu } = dataCommon.fr;
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { comicsInformations,
        getNewListComics, pendingFirstList, pending, handleComicsInformations, errorServer } = useContext(ComicsChildContext);
    const { componentsCards, componentsCardsOnLoad } = ComponentsCards(viewPort.width, handleComicsInformations, comicsInformations);
    const { scrollRef } = RetrieveComicsOnScrolling(comicsInformations, getNewListComics);
    const CSSstyleMainComponent = css`
    overflow: auto; 
    height: 100%;
     padding-top:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.POSITION_GALLERY_ROW_TOP(viewPort.width)}px;
     position: relative
    `;
    const CSSstyleMainCharacter = css`
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).WIDTH}px;
    size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).HEIGHT}px;
    position: fixed;
     right: -${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.POSITION_MAIN_CHARACTER(viewPort.width).RIGHT}px;
     top: -${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.POSITION_MAIN_CHARACTER(viewPort.width).TOP}px;
    `;

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
                <div className="andromeda_main_component" ref={scrollRef} css={CSSstyleMainComponent}>
                    {errorServer ? <h1> This is a custom component during an error</h1> : pendingFirstList && componentsCards.length == 0 ? <h1 style={{ color: 'white', marginLeft: '1rem' }}>loading</h1> : <CSSGaleryRows viewPortWidth={viewPort.width}>
                        <Gallery componentsHTML={componentsCards} />
                        {/* fetch on scroll */}
                        {pending && <Gallery componentsHTML={componentsCardsOnLoad} />}
                    </CSSGaleryRows>}
                </div>
                <div className={'position_character'} css={CSSstyleMainCharacter}>
                    {getIcon('Main_character')}
                </div>
            </RightSideFrame>
        </>
    );
};
export default Andromeda;

