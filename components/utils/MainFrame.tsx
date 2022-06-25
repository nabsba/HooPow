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
width: 100%;
margin: auto;
height:${viewPort.width > 790 ? '97vh' : SIZE_ELEMENTS_ACTUAL_VIEW_PORT.HEIGHT_MAIN_FRAME(viewPort.width)
    };
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