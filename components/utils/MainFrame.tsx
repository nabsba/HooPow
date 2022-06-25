import * as React from 'react';
import { css } from '@emotion/react';
import ViewPortParentContext, { ViewPortChildContext } from './contexts/ViewPort';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';

type TMainFrame = {
  children: any;
}
// height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_SIDE_HEIGHT(viewPort.width)}px;
const MainFrame: React.FC<TMainFrame> = ({ children }) => {
  const { handleViewPortInformations, viewPort } = ViewPortParentContext();
  const base: any = css`
height: 100vh;
width: 100%;
margin: auto;
height: 100vh;
padding:.5rem;
height:${viewPort.width > 790 ? '100vh' : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_SIDE_HEIGHT(viewPort.width)}px;
`

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