import * as React from 'react';
import styled from 'styled-components';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import getIcon from '../../atoms/icons/Icons';

type TButtonV2 = {
    icon: string;
    text: string;
}

export const CSSButtonOriginal = styled.div<{ viewPortWidth: number }>`
display:flex;
align-items: center;
justify-content: flex-start;
width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V2(props.viewPortWidth).WIDTH}px;
height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V2(props.viewPortWidth).HEIGHT}px;
border-radius: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_42(props.viewPortWidth)}px;
border: 4px solid white;

& .button_v2_icon {
    width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V2_ICON(props.viewPortWidth).WIDTH}px;
    height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V2_ICON(props.viewPortWidth).HEIGHT}px;
    margin-left: 10%;
    margin-right: 10%;
}
& .button_v2_text {
    color: white;
    font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_24(props.viewPortWidth)}px;
    text-transform: uppercase;

}
`;

const ButtonV2: React.FC<TButtonV2> = ({ icon, text }) => {
    return (<>
        <div className=" button_v2_icon flex_row_center">
            {getIcon(icon)}
        </div>
        <span className="police_fredoka button_v2_text"> {text}</span>
    </>)

}
export default ButtonV2