import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import { TTheme } from '../../../../services/style/type';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';
import styles from './style.module.css';

export type TBurger = {
	state: boolean;
};


const Burger: React.FC<TBurger> = (props) => {
	const { viewPort } = useContext(ViewPortChildContext);
	const base: any = (props: TTheme) => css`
	width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BURGER(viewPort.width).WIDTH}px;
	height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BURGER(viewPort.width).HEIGHT}px;
	border-radius: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.BORDER_RADIUS_15(viewPort.width)}px;
	& .global_sub_burger {
			width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SPAN_BURGER_WRAPPER(viewPort.width).WIDTH}px;
			height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SPAN_BURGER_WRAPPER(viewPort.width).HEIGHT}px;
	}
	& span {
		   width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SPAN_BURGER(viewPort.width).WIDTH}px;
			height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SPAN_BURGER(viewPort.width).HEIGHT}px;
			
			background-color: ${props.COLORS.PRIMARY}
	}
	.wrapper_twins {
		width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SPAN_BURGER(viewPort.width).WIDTH}px;
		height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SPAN_BURGER(viewPort.width).HEIGHT}px;
		margin-top:	15%;
		margin-bottom: 15%;
	
	}
	
  `
	return (
		<div className={styles.burger} css={base} >
			<div
				className={`max_content_size margin_auto flex_column global_sub_burger${styles.sub_burger} ${props.state && styles.burger_open} `}
			>
				<span className={styles.span_first} />
				<div className={`${styles.wrapper_twins_spans} wrapper_twins`}>
					<span />
					<span />
				</div>
				<span className={styles.span_last} />
			</div>
		</div>
	);
};
export default Burger;
