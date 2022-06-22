import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import { TTheme } from '../../../../services/style/type';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';

export type TBurger = {
	handleClick: any;
	state: boolean;
};


const Burger: React.FC<TBurger> = (state) => {
	const { viewPort } = useContext(ViewPortChildContext);

	const base: any = css`
	width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BURGER(viewPort.width).WIDTH};
	height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BURGER(viewPort.width).HEIGHT};
  `
	return (
		<div>
			<span />
			<div>
				<span />
				<span />
			</div>
			<span />
		</div>
	);
};
export default Burger;
