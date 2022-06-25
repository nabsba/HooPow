import * as React from 'react';
import styled from '@emotion/styled'
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';


export type TAnnonceSmall = {
    text_first: string;
    text_second: string;
}

// const share = styled.div<any> `
// background-color: ${props => props.background};
// color: white;
// display:flex;
// align-items: center;
// right: 0;
//     & span {
//         font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_21(props.viewPortWidth)}px;
//     }
//     & .first_span_annonce_small {
//         color: white;
//         text-transform: capitalize;
//         flex:1;
//         padding-left:10%;
//         font-weight: bold;
//     }
//     & .second_span_annonce_small {
//         flex:1;
//         color: white;
//         font-weight: bold;
//         text-transform: uppercase;
//     }
// `
export const CSSAnnonceOriginal =
    styled.div<any>`
    background-color: ${props => props.background};
    flex-direction: column;
    justify-content: center;
    width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.ORIGINAL(props.viewPortWidth).WIDTH}px;
    height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.ORIGINAL(props.viewPortWidth).HEIGHT}px;
    border-radius: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_15(props.viewPortWidth)}px;
    background-color: ${props => props.background};
color: white;
display:flex;
align-items: center;
right: 0;
  
    & .first_span_annonce_small {
        color: white;
        font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_21(props.viewPortWidth)}px;
        font-weight: bold;
        &::first-letter {
            text-transform: uppercase;
        }
    }
    & .second_span_annonce_small {
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_25(props.viewPortWidth)}px;

        }
    `;


export const CSSAnnonceVariant =
    styled.div<any>`
    background-color: ${props => props.background};
    width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.VARIANT(props.viewPortWidth).WIDTH}px;
    height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.VARIANT(props.viewPortWidth).HEIGHT}px;
    justify-content: space-between;
    position: absolute;
    top: 0;
    border-radius: 0 0 0 ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_14(props.viewPortWidth)}px;
    background-color: ${props => props.background};
    color: white;
    display:flex;
    align-items: center;
    right: 0;
    & .first_span_annonce_small {
        &::first-letter {
            text-transform: uppercase;
        }
        color: white;
        flex:1;
        padding-left:10%;
        font-weight: 500;
        font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_21(props.viewPortWidth)}px;
    }
    & .second_span_annonce_small {
        flex:1;
        color: white;
       
        font-weight: bold;
        text-transform: uppercase;
        font-size: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_25(props.viewPortWidth)}px;
    }
    `;


const AnnonceSmall: React.FC<TAnnonceSmall> = ({ text_first, text_second }) => {
    return (<>
        <span className="police_bilo first_span_annonce_small" >
            {text_first}</span>
        <span className="police_inter second_span_annonce_small"> {text_second}</span>
    </>)


}
export default AnnonceSmall