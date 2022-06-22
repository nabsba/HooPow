import { css } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import { ViewPortChildContext } from './contexts/ViewPort';

type TRightSideFrame = { children: any }




const RightSideFrame: React.FC<TRightSideFrame> = ({ children }) => {
  const { viewPort } = React.useContext(ViewPortChildContext);
  const base: any = css`
background-color: #2A2A2A;
border-radius: 5px;
flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.RIGHT_SIDE_FRAME(viewPort.width)}px;`

  return (<div
    css={base} > {children} </div>)

}
export default RightSideFrame