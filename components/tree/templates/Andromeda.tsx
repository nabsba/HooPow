import React, { useContext } from 'react';
import { css } from '@emotion/react'
import Card, { CSSCardOriginal } from '../molecules/Card';
import Gallery, { CSSGaleryRows } from '../organisms/Gallery';
import dataCommon from '../../../services/data/common';
import { LeftSideFrame, RightSideFrame } from '../../utils';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import getIcon from '../atoms/icons/Icons';
import { LeftV211 } from '../organisms';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';


type Props = any;

const Andromeda: React.FC<Props> = () => {
    const { mainAnnonce, annonce, iconTitle } = dataCommon.fr;
    const { viewPort } = React.useContext(ViewPortChildContext);

    const componentsCards = [
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>, <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>, <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>, <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>, <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>, <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,

        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />,
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>,
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
            <Card image={{
                src: ''
            }} dateSentence={{
                date: 'lundi 01',
                sentence: 'hello'
            }} id={''} />
        </CSSCardOriginal>]

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
                <div css={css`overflow: auto; height: 100%; padding-top: 6%; position: relative`}>
                    <CSSGaleryRows styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(viewPort.width).HEIGHT }}>
                        <Gallery componentsHTML={componentsCards} />
                    </CSSGaleryRows>
                </div>
                <div className={'position_character'} css={css`
                    width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).WIDTH}px;
                    size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER(viewPort.width).HEIGHT}px;
                    position: fixed;
                    top: -3%;
                    right: -20%;`}>
                    {getIcon('Main_character')}
                </div>
            </RightSideFrame>

        </>
    );
};
export default Andromeda;

