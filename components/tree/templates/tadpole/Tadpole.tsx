import * as React from 'react';
import { LeftSideFrame, RightSideFrame } from '../../../utils';

type TTadpole = {}


const Tadpole: React.FC<TTadpole> = ({ }) => {
    return (<>
        <LeftSideFrame><h2 style={{ color: "white", flex: 1 }}> hi</h2> </LeftSideFrame>
        <RightSideFrame> <h1>  hello tadpole</h1></RightSideFrame>

    </>)

}
export default Tadpole