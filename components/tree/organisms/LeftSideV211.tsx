import { useTheme } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import dataCommon from '../../../services/data/common';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';
import getIcon from '../atoms/icons/Icons';
import { AnnonceSmall } from '../molecules';
import { CSSAnnonceOriginal, TAnnonceSmall } from '../molecules/AnnonceSmall';
import MainAnnonce, { TMainAnnonce } from './MainAnnonce';

type TLeftV211 = {
    annonce: TAnnonceSmall;
    iconTitle: string;
    mainAnnonce: TMainAnnonce
}

const LeftV211: React.FC<TLeftV211> = ({ annonce }) => {
    const { mainAnnonce } = dataCommon.fr
    const { viewPort } = React.useContext(ViewPortChildContext);
    const theme: any = useTheme();

    return (<div className="flex_column_center_between" style={{ flex: 1, paddingTop: '5%' }}>
        <div data-testid="testID-announcement">
            <CSSAnnonceOriginal
                viewPortWidth={viewPort.width}
                background={theme.COLORS.PRIMARY}>
                <AnnonceSmall {...annonce} />
            </CSSAnnonceOriginal>
        </div>
        <div
            data-testid="testID-title"
            style={{
                width: `${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.TITLE_HOO_POW_LARGE(viewPort.width).WIDTH}px`,
                height: ` ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.TITLE_HOO_POW_LARGE(viewPort.width).HEIGHT}px`
            }}>

            {getIcon('Title_howpow_large')}
        </div>
        <div data-testid="testID-mainAnnonce">
            <MainAnnonce  {...mainAnnonce} />
        </div>
    </div >)

}
export default LeftV211