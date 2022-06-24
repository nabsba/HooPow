import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';

export type TGallery = {
	componentsHTML: any[];
};
export const CSSGaleryRows =
	styled.div<any>`
width: ${(props) => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(props.viewPortWidth).WIDTH}px;
height: ${(props) => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(props.viewPortWidth).HEIGHT}px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
justify-items: center;
grid-row-gap: 5px;
margin:auto;
position:relative;
z-index:2;
`;
export const CSSGaleryColumn =
	styled.div<any>`
	opacity: .4;
	width: ${(props) => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_COLUMN(props.viewPortWidth).WIDTH}px;
height: ${(props) => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_COLUMN(props.viewPortWidth).HEIGHT}px;
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: auto;
gap: 10px 0px;

`;

const Gallery: React.FC<TGallery> = ({ componentsHTML }) => {
	return (
		<>
			{componentsHTML.map((component: ReactElement, index: number) => (
				<div
					className="cursor_on_hover"
					key={index}
				>
					{component}
				</div>
			))}
		</>
	);
};
export default Gallery;
