import { css } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import { TTheme } from '../../services/style/type';
import { ViewPortChildContext } from './contexts/ViewPort';

type TRightSideFrame = { children: any }




const RightSideFrame: React.FC<TRightSideFrame> = ({ children }) => {
  const { viewPort } = React.useContext(ViewPortChildContext);

  const base: any = (props: TTheme) => css`
   border-radius: 5px;
   position:relative;
   flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.RIGHT_SIDE_FRAME(viewPort.width)}px;
   background-color: ${props.COLORS.SECONDARY};
   overflow: hidden;`
  return (<div
    data-testid="testID-rightFrame"
    css={base}>
    {children} </div>)

}
export default RightSideFrame