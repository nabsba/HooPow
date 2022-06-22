import React, { ReactElement } from 'react';
import styled from 'styled-components';

export type TGallery = {
	componentsHTML: any[];
};
export const CSSGaleryRows =
	styled.div<any>`
width: ${(props: { styleCSS: { width: any; }; }) => props.styleCSS.width}px;
height: ${(props: { styleCSS: { height: any; }; }) => props.styleCSS.height}px;
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
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: auto;
gap: 10px 0px;
width: ${(props: { styleCSS: { width: any; }; }) => props.styleCSS.width}px;
height: ${(props: { styleCSS: { height: any; }; }) => props.styleCSS.height}px;
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
