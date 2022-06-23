import { css } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import dataCommon from '../../../../services/data/common';
import createPropsFromData from '../../../factory/createProps';
import { LeftSideFrame, RightSideFrame } from '../../../utils';
import FullScreenParentContext, { FullScreenChildContext } from '../../../utils/contexts/FullScreen';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';
import { SliderComponent, TadpoleLeftSideChildV2 } from '../../organisms';





const Tadpole: React.FC = ({ }) => {
    const { handleStateFullScreen, stateFullScreen } = FullScreenParentContext()
    const { viewPort } = React.useContext(ViewPortChildContext);
    return (<>
        <FullScreenChildContext.Provider value={{
            handleStateFullScreen,
            stateFullScreen
        }}>
            <LeftSideFrame>
                <TadpoleLeftSideChildV2 />
            </LeftSideFrame>
            <RightSideFrame>
                <SliderComponent Components={[<div>
                    <h3>1</h3>
                </div>,
                <div>
                    <h3>2</h3>
                </div>,
                <div>
                    <h3>3</h3>
                </div>,
                <div>
                    <h3>4</h3>
                </div>,
                <div>
                    <h3>5</h3>
                </div>,
                <div>
                    <h3>6</h3>
                </div>]} wiewPortWidth={viewPort.width} />

            </RightSideFrame>
        </FullScreenChildContext.Provider>
    </>)

}
export default Tadpole