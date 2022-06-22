import { css, useTheme } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import dataCommon from '../../services/data/common';
import getIcon from '../tree/atoms/icons/Icons';
import { AnnonceSmall, BurgerPlusHooPowTitle, ButtonV1 } from '../tree/molecules';
import { CSSAnnonceOriginal } from '../tree/molecules/AnnonceSmall';
import { MainCard } from '../tree/organisms';
import { ViewPortChildContext } from './contexts/ViewPort';

type TLeftSideFrame = {
    children: any;
}

const LeftSideFrame: React.FC<TLeftSideFrame> = ({ children }) => {
    const { annonce, mainAnnonce } = dataCommon.fr
    const { viewPort } = useContext(ViewPortChildContext);
    const base: any = css`
  flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.LEFT_SIDE_FRAME(viewPort.width)}px;
  background-color: white;
`
    const theme: any = useTheme();

    return (<div
        css={base}
    >
        <BurgerPlusHooPowTitle />
        <CSSAnnonceOriginal styleCSS={{
            width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.ORIGINAL(viewPort.width).WIDTH,
            height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.ORIGINAL(viewPort.width).HEIGHT,
            borderRadius: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_15(viewPort.width),
            background: theme.COLORS.PRIMARY
        }
        }>
            <AnnonceSmall annonce={annonce} />
        </CSSAnnonceOriginal>
        <div style={{
            width: `${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.TITLE_HOO_POW_LARGE(viewPort.width).WIDTH}px`,
            height: ` ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.TITLE_HOO_POW_LARGE(viewPort.width).HEIGHT}px`
        }}>
            {getIcon('Title_howpow_large')}
        </div>
        <MainCard mainAnnonce={mainAnnonce} />
        {children} </div>)

}
export default LeftSideFrame