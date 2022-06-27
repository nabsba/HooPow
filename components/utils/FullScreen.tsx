
import { css } from '@emotion/react';
import React, { useContext, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import getIcon from '../tree/atoms/icons/Icons';
import { FullScreenChildContext } from './contexts/FullScreen';
import { ViewPortChildContext } from './contexts/ViewPort';



type Props = {
	children: any;
};

const FullScreenComponent: React.FC<Props> = ({ children }) => {
	const handle = useFullScreenHandle();
	const { handleStateFullScreen, stateFullScreen } = useContext(FullScreenChildContext);
	const { viewPort } = React.useContext(ViewPortChildContext);
	const base = css`
    height:100%;
    width: 100%;
  .fullscreen_icon {
	cursor: pointer;
	position: absolute; 
	bottom: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_FULLSCREEN(viewPort.width).SPACE_BOTTOM}px;
    left:  ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_FULLSCREEN(viewPort.width).SPACE}px;
	zIndex: 100;
	width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_FULLSCREEN(viewPort.width).WIDTH}px;
	height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_FULLSCREEN(viewPort.width).HEIGHT}px;
	display: ${stateFullScreen.doWeDiplayFullScreen ? "block" : "none"} ; 
 }
`;

	useEffect(() => {
		if (stateFullScreen.doWeDiplayFullScreen && !handle.active) {
			handle.enter();
		} else {
			if (stateFullScreen.doWeDiplayFullScreen) {
				handleStateFullScreen({ doWeDiplayFullScreen: false });
			}
		}
	}, [stateFullScreen]);

	return (
		<FullScreen handle={handle} className="fullscreen" css={base}>
			{children}
			<div className='fullscreen_icon' onClick={() => {
				handle.exit()
				handleStateFullScreen({ doWeDiplayFullScreen: false })
			}}> {getIcon('Full_screen')}</div>


		</FullScreen >
	);
};
export default FullScreenComponent;
