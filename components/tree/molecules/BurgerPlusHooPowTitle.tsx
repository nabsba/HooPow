import { css } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';
import getIcon from '../atoms/icons/Icons';




const BurgerPlusHooPowTitle: React.FC = () => {
    const { viewPort } = useContext(ViewPortChildContext);

    const CSStitle: any = css`
	width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.TITLE_HOO_POW_SMALL(viewPort.width).WIDTH}px;
	height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.TITLE_HOO_POW_SMALL(viewPort.width).HEIGHT}px;`;

    const CSSwrapper: any = css`
	width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BURGER_PLUS_TITLE_HOO_POW(viewPort.width).WIDTH}px;
	height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BURGER_PLUS_TITLE_HOO_POW(viewPort.width).HEIGHT}px;`;

    return (<div className="flex_row_center flex_row_center_between margin_auto" css={CSSwrapper}>
        {getIcon('Burger', false)}
        <div css={CSStitle}>
            {getIcon('Title_howpow_small')}
        </div>
    </div>)

}
export default BurgerPlusHooPowTitle