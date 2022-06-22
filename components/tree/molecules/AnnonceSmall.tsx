import * as React from 'react';
import styled from '@emotion/styled'
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';

type TAnnonceSmall = {
    annonce: {
        text_first: string;
        text_second: string;
    }
}

{/*
 <CSSAnnonceOriginal styleCSS={{
    width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.ORIGINAL(viewPort.width).WIDTH,
    height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE.ORIGINAL(viewPort.width).HEIGHT,
    borderRadius: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_15(viewPort.width),
    background: theme.COLORS.PRIMARY
}
}> */}

export const CSSAnnonceOriginal =
    styled.div<any>`
    background-color: ${props => props.styleCSS.background};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:${props => props.styleCSS.width}px;
    height:${props => props.styleCSS.height}px;
    border-radius:${props => props.styleCSS.borderRadius}px;
    margin: auto;
    & .first_span_annonce_small {
        color: white;
        text-transform: capitalize;
    }
    & .second_span_annonce_small {
        color: white;
        font-weight: bold;
        text-transform: uppercase;

    }
    `;



const AnnonceSmall: React.FC<TAnnonceSmall> = ({ annonce: { text_first, text_second } }) => {
    const { viewPort } = React.useContext(ViewPortChildContext);
    return (<>
        <span className="police_bilo first_span_annonce_small" style={{ fontSize: `${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_21(viewPort.width)}px` }}>
            {text_first}</span>
        <span className="police_bilo second_span_annonce_small" style={{ fontSize: `${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_25(viewPort.width)}px` }}> {text_second}</span>
    </>)


}
export default AnnonceSmall