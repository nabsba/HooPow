
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from "../../../services";
import createPropsFromData from "../../factory/createProps";
import { ComicsChildContext } from "../../utils/contexts/Comics";
import { FullScreenChildContext } from "../../utils/contexts/FullScreen";
import { ViewPortChildContext } from "../../utils/contexts/ViewPort";
import getIcon from "../atoms/icons/Icons";
import { Card, CSSButtonOriginal, ButtonV2 } from "../molecules";
import { CSSCardOriginal } from "../molecules/Card";


const TadpoleLeftSideChildV2: React.FC = () => {
    const { handleStateFullScreen, stateFullScreen } = useContext(FullScreenChildContext);
    const { comicsInformations, handleComicsInformations } = useContext(ComicsChildContext);
    const { viewPort } = React.useContext(ViewPortChildContext);
    const viewPortWidth = viewPort.width;
    const card = createPropsFromData('card', comicsInformations.comicSelected);
    const base: any = css`
    flex: 1;
    & .svg_share {
        width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SHARE_ICON_TEXT(viewPortWidth).WIDTH}px;
	    height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SHARE_ICON_TEXT(viewPortWidth).HEIGHT}px;
             };
             
    & .sub_text_share_icon {
        font-size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_20(viewPortWidth)}px;
        color:#C3C3C3;
        text-transform: uppercase;
        text-align: center;
        padding-top: 10%;
    };

    `

    return <div className={'flex_column_center_around'} css={base}>
        <CSSCardOriginal viewPortWidth={viewPortWidth} >
            <Card {...card} />
        </CSSCardOriginal>

        <div className="svg_share_sub_text flex_column_center">
            <div className="svg_share">
                {getIcon('Share')}
            </div>
            <span className={'police_avenir sub_text_share_icon'}>PARTAGER</span>
        </div>
        <div>
            <div onClick={() => handleStateFullScreen({ doWeDiplayFullScreen: true })}>
                <CSSButtonOriginal viewPortWidth={viewPortWidth}>
                    <ButtonV2 icon={'Full_screen'} text={'PLEIN ECRAN'} />
                </CSSButtonOriginal>
            </div>
            <div style={{ padding: '5%' }} />
            <div onClick={() => handleComicsInformations({ ...comicsInformations, comicSelected: {} })}>
                <CSSButtonOriginal viewPortWidth={viewPortWidth} >
                    <ButtonV2 icon={'House'} text={'ACCEUIL'} />
                </CSSButtonOriginal>
            </div>
        </div>
    </div >
}

export default TadpoleLeftSideChildV2