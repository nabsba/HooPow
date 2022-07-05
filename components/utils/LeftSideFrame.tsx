import { css } from '@emotion/react';
import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import BurgerTilteAndUserMenu from '../tree/organisms/BurgerTitleUserMenu';
import { TUserMenu } from '../tree/organisms/UserMenu';
import { ViewPortChildContext } from './contexts/ViewPort';

type TLeftSideFrame = {
    children: any;
    userMenu: TUserMenu
}

const LeftSideFrame: React.FC<TLeftSideFrame> = ({ children, userMenu }) => {
    const { viewPort } = useContext(ViewPortChildContext);
    const base: any = css`
    position:relative;
  flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.LEFT_SIDE_FRAME(viewPort.width)}px;
`
    return (<div className="flex_column_center"
        css={base}
    >
        <BurgerTilteAndUserMenu userMenu={userMenu} />
        {children} </div>)

}
export default LeftSideFrame