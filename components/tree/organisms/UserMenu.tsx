import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';
import { ButtonV2 } from '../molecules';
import { CSSButtonIcon, CSSButtonMenu } from '../molecules/buttons/ButtonV2';


export type TUserMenu = {
    top: string[];
    middle: { icon: string; text: string }[];
    bottom: string[];
};

const UserMenu: React.FC<TUserMenu> = ({ top, middle, bottom }) => {
    const { viewPort } = useContext(ViewPortChildContext);
    const base = css`
     margin: 2vh;
     .top_user_menu {
                button {
                margin-top:2vh;          
                    &:first-type {
                        margin-top:0vh;
                        }
                }
                background-color: white;
            }
     .middle_user_menu {
                div {
                    margin-top: 2vh; 
                    &:first-type {
                        margin-top: 0vh; 
                    }
                }
     .user_menu_separator {
                    margin-top:2vh;
                    margin-bottom:2vh;
                    height: 2px;
                    background-color: #e6e6e6;
                    }
     .bottom_user_menu {
                    button {
                        span {
                            color:grey;
                        }
                        margin-top: 2vh;    
                        &:first-type {
                            background-color:#e6e6e6;
                            margin-top:0;
                            
                            }       
                    }   
     }
 `
    return (
        <div className='user_menu_wrapper' css={base}>
            <div className="flex_column_center top_user_menu">
                {top.map(((element, index) => <CSSButtonMenu key={index} viewPortWidth={viewPort.width}> <ButtonV2 text={element} /></CSSButtonMenu>))}
            </div>
            <div className="user_menu_separator" />
            <div className="middle_user_menu">
                {middle.map((element) =>
                    <CSSButtonIcon key={element.icon} viewPortWidth={viewPort.width}>
                        <ButtonV2 text={element.text} icon={element.icon} />
                    </CSSButtonIcon>
                )}
            </div>
            <div className="user_menu_separator" />
            <div className="flex_column_center bottom_user_menu">
                {bottom.map(((element, index) => <CSSButtonMenu viewPortWidth={viewPort.width} key={index}> <ButtonV2 text={element} /></CSSButtonMenu>))}
            </div>
        </div>
    );
};
export default UserMenu;
