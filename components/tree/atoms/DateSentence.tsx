import { css } from '@emotion/react';
import React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';

export type TDateSentence = {
	date?: string;
	sentence: string;
};


const base = css`
display: flex;
align-items: center;
justify-content: center;
& span { 
	text-transform: capitalize;
	font-weight: bold;
	&:first-of-type {
	color: #808080; 
}; 
	&:last-child {
		color: white;
}}
`
const DateSentence: React.FC<TDateSentence> = ({ date, sentence }) => {
	const { viewPort } = React.useContext(ViewPortChildContext);
	const CSStext = css`
     font-size:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.FONT_SIZE_15(viewPort.width)}px
`;

	return (
		<div css={base}>
			{date && (
				<span className="police_avenir" css={CSStext}> {date} <span>-  &nbsp;</span> </span>
			)}
			<span className="police_avenir" css={CSStext}>  {sentence} </span>
		</div>
	);
};
export default DateSentence;
