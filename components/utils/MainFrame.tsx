import * as React from 'react';
import { css } from '@emotion/react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import ViewPortParentContext, { ViewPortChildContext } from './contexts/ViewPort';

type TMainFrame = {
  children: any;
}

const MainFrame: React.FC<TMainFrame> = ({ children }) => {
  const { handleViewPortInformations, viewPort } = ViewPortParentContext();
  const base: any = css`
height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_SIDE_HEIGHT(viewPort.width)}px;
margin: auto;
width: 100%;`

  return (<div className="flex"
    css={base}
  >
    <ViewPortChildContext.Provider
      value={{
        handleViewPortInformations, viewPort
      }}>
      {children}
    </ViewPortChildContext.Provider>
  </div>)

}
export default MainFrame