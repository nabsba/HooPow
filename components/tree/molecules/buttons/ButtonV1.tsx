import { css } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';

type TButtonV1 = {
    buttonV1: { text: string }
}


const ButtonV1: React.FC<TButtonV1> = ({ buttonV1: { text } }) => {
    const { viewPort } = React.useContext(ViewPortChildContext);
    const base: any = css`
    width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V1(viewPort.width).WIDTH}px;
    height:  ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V1(viewPort.width).HEIGHT}px;
    background-color: yellow;
    display:flex;
    & span {
        font-size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_31(viewPort.width)}px;
         margin:auto;
};
    text-transform: uppercase;
    `

    return (<div css={base}>
        <span > {text}</span>
    </div>)
}
export default ButtonV1