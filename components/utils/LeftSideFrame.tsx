import { css } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import { BurgerPlusHooPowTitle } from '../tree/molecules';
import LeftSideV211 from '../tree/organisms/LeftSideV211';
import { ViewPortChildContext } from './contexts/ViewPort';

type TLeftSideFrame = {
    children: any;
}

const LeftSideFrame: React.FC<TLeftSideFrame> = ({ children }) => {
    const { viewPort } = useContext(ViewPortChildContext);
    const base: any = css`
  flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.LEFT_SIDE_FRAME(viewPort.width)}px;
`
    return (<div className="flex_column_center"
        css={base}
    >
        <BurgerPlusHooPowTitle />
        <LeftSideV211 />
        {children} </div>)

}
export default LeftSideFrame