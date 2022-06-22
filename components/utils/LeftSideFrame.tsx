import { css } from '@emotion/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import { ViewPortChildContext } from './contexts/ViewPort';

type TLeftSideFrame = {
    children: any;
}

const LeftSideFrame: React.FC<TLeftSideFrame> = ({ children }) => {
    const { viewPort } = useContext(ViewPortChildContext);
    const base: any = css`
  flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.LEFT_SIDE_FRAME(viewPort.width)}px;
`
    return (<div
        css={base}
    > {children} </div>)

}
export default LeftSideFrame