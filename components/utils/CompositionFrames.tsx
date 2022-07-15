import * as React from 'react';
import LeftSideFrame from './LeftSideFrame';
import RightSideFrame from './RightSideFrame';

type TCompositionFrames = any;

const CompositionFrames: React.FC<TCompositionFrames> = ({ leftSideFrameProps, rightSideFrameProps }) => {
    return (<>
        <LeftSideFrame userMenu={leftSideFrameProps.userMenu}>
            {leftSideFrameProps.childComponent}
        </LeftSideFrame>
        <RightSideFrame>
            {rightSideFrameProps.childComponent}
        </RightSideFrame>
    </>)

}
export default CompositionFrames