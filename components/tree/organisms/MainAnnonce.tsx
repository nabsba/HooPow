import { css } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { TTheme } from '../../../services/style/type';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';
import getIcon from '../atoms/icons/Icons';
import { ButtonV1 } from '../molecules';
import { TButtonV1 } from '../molecules/buttons/ButtonV1';

type TMainAnnonce = {
    mainAnnonce: {
        button: TButtonV1;
        invitation: {
            part_1: string,
            part_2: string,
        }, title: {
            part_1: string,
            part_2: string
        }
    }
}


const MainAnnonce: React.FC<TMainAnnonce> = ({ mainAnnonce: { button, invitation, title } }) => {
    const { viewPort } = useContext(ViewPortChildContext);
    const base: any = (props: TTheme) => css` 
    background-color: ${props.COLORS.PRIMARY};
    overflow: hidden;
    width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_ANNONCE(viewPort.width).WIDTH}px;
    height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_ANNONCE(viewPort.width).HEIGHT}px;
    border-radius:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_15(viewPort.width)}px;
    color: white;
    .main_annonce_title {
        font-size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_34(viewPort.width)}px};
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
    },
    .main_annonce_button {
        width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V1(viewPort.width).WIDTH}px;
        height:  ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BUTTON_V1(viewPort.width).HEIGHT}px;
        border-radius:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_5(viewPort.width)}px;
        background-color: #FFC600;
        display:flex;
        color: black;   
        display:flex;
        font-size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_31(viewPort.width)}px;   
        text-transform: uppercase;
        margin-top: .2%;
        div {margin: auto}
      },
      .main_annonce_contact_wrapper {
        position: relative;
        top: 2.8%;
      },
    .main_annonce_contact {
        width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE_SUB_ANNONCE(viewPort.width).WIDTH}px;
        height:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ANNONCE_SUB_ANNONCE(viewPort.width).HEIGHT}px;
        position:relative;
        top: 3.2%;
        left: 5%;
        span {
            font-size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_17(viewPort.width)}px;  
        }
    },
    .main_annonce_main_character {
        position: relative;
        right: 1vw;
         width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER_SMALL(viewPort.width).WIDTH}px;
         height:  ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.MAIN_CHARACTER_SMALL(viewPort.width).HEIGHT}px;
    },

   `;
    return (<div css={base} className="flex_column_center">
        <div className="police_bilo main_annonce_title flex_column_center">
            <span> {title.part_1} </span>
            <span> {title.part_2} </span>
        </div>
        <div className="main_annonce_button">
            <ButtonV1 {...button
            } />
        </div>

        <div className="flex_row_center main_annonce_contact_wrapper">
            <div className='flex_column_center main_annonce_contact'>
                <span className="police_inter">{invitation.part_1} </span>
                <span className="police_inter" style={{ textTransform: 'uppercase', textDecoration: 'underline' }}>{invitation.part_2}</span>
            </div>
            <div className="main_annonce_main_character">
                {getIcon('Main_character_small')}
            </div>
        </div>

    </div>)

}
export default MainAnnonce