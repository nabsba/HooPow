import { css } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import dataCommon from '../../../../services/data/common';
import createPropsFromData from '../../../factory/createProps';
import { LeftSideFrame, RightSideFrame } from '../../../utils';
import FullScreenParentContext, { FullScreenChildContext } from '../../../utils/contexts/FullScreen';
import { TadpoleLeftSideChildV2 } from '../../organisms';





const Tadpole: React.FC = ({ }) => {
    const { handleStateFullScreen, stateFullScreen } = FullScreenParentContext()
    return (<>
        <FullScreenChildContext.Provider value={{
            handleStateFullScreen,
            stateFullScreen
        }}>
            <LeftSideFrame>
                <TadpoleLeftSideChildV2 />
            </LeftSideFrame>
            <RightSideFrame> <h1>  hello tadpole</h1></RightSideFrame>
        </FullScreenChildContext.Provider>
    </>)

}
export default Tadpole