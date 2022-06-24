import { css } from '@emotion/react';
import React, { useContext, useState } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';
import { BurgerPlusHooPowTitle } from '../molecules';

import UserMenu, { TUserMenu } from './UserMenu';

export type TBurderTitleAndUserMenu = {
    userMenu: TUserMenu;
};

const BurgerTilteAndUserMenu: React.FC<TBurderTitleAndUserMenu> = ({
    userMenu,
}) => {
    const [isBurgerClicked, setIsBurgerClicked] = useState(false);
    const { viewPort } = useContext(ViewPortChildContext);
    const handleBurgerOnClick = () => {
        setIsBurgerClicked(!isBurgerClicked);
    };

    const base = css`
    .menu_wrapper {
        margin-top:1rem;
        position: absolute;
        width:93%;
        left:0;
        background-color: white;
    }
    .close_div {
            max-height:0px;
            height: 0px;
            overflow:hidden;
            transition: all .5s;
    }
    .open_div {
        max-height: 1000px !important;
        height: 90%;
        overflow:hidden;
        transition: all .5s;
        z-index: 10000;
        border-radius: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_15(viewPort.width)}px;
     
    }
    & button:first-child {
        background-color: #363635;
       span {
        color: white;
       }
    }
    `
    return (
        <div css={base} >
            <BurgerPlusHooPowTitle
                handleBurgerOnClick={handleBurgerOnClick}
                stateBurger={isBurgerClicked}
            />
            <div
                className={`menu_wrapper close_div ${isBurgerClicked ? 'open_div' : ''}`}
            >
                <UserMenu {...userMenu} />
            </div>
        </div>
    );
};
export default BurgerTilteAndUserMenu;
