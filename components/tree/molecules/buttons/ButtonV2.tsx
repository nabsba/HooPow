import * as React from 'react';
import styled from 'styled-components';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import getIcon from '../../atoms/icons/Icons';

type TButtonV2 = {
    icon?: string;
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

export const CSSButtonMenu = styled.button<{ viewPortWidth: number }>`
display:flex;
background-color: #e6e6e6;
border: none;
border-radius: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_42(props.viewPortWidth)}px;
font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_17(props.viewPortWidth)}px;
width: 100%;
height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V2_MENU(props.viewPortWidth).HEIGHT}px;
span {
    margin: auto;
    text-transform: uppercase;
    color:grey;
    font-weight: bold;
}
`
export const CSSButtonIcon = styled.div<{ viewPortWidth: number }>`
display:flex;
align-items: center;
font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_17(props.viewPortWidth)}px;
background-color: white;
.button_v2_icon {
    svg {
        width: 4vw
    }
}
.button_v2_text {
   padding-left: 5%;
   color: grey;
   font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_24(props.viewPortWidth)}px;
   text-transform: capitalize;
}
`

const ButtonV2: React.FC<TButtonV2> = ({ text, icon }) => {
    return (<>
        {icon && <div className=" button_v2_icon flex_row_center">
            {getIcon(icon)}
        </div>}
        <span className="police_fredoka button_v2_text"> {text}</span>
    </>)

}
export default ButtonV2