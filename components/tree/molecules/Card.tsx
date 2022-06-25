import React, { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled'
import { DateSentence } from '../atoms';
import { PATH, SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { NAMES } from '../../../services/data/constant';
import { TDateSentence } from '../atoms/DateSentence';
import { TComic } from '../../../services/data/type';
import { ViewPortChildContext } from '../../utils/contexts/ViewPort';
declare type ImgElementStyle = NonNullable<
	JSX.IntrinsicElements['img']['style']
>;
export type TImage = {
	src: string;
	alt: string;
	priority: boolean;
	loading: 'eager' | 'lazy' | undefined;
	layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | 'raw' | undefined;
	placeHolder?: 'blur' | 'empty';
	blurDataURL?: string;
	objectFit?: ImgElementStyle['objectFit'];
	width?: number;
	height: number;
};
export type TCard = {
	image: { src?: string };
	dateSentence: TDateSentence;
	informationCard: TComic;

};

export const CSSCardOriginal = styled.div<any>`
position: relative;
display:flex;
cursor: pointer;
flex-direction: column;
width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(props.viewPortWidth).WIDTH}px;
height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(props.viewPortWidth).HEIGHT}px;
& .img_card {
	width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(props.viewPortWidth).WIDTH}px;
	height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(props.viewPortWidth).HEIGHT}px;
	position:relative;
	& img {
		border-radius: 5px;
	}
}
.card_data_sentence {
	padding-top:8px;
}
`;
export const CSSCardVariant1 = styled(CSSCardOriginal)`
opacity: .4;
cursor: pointer;
position: relative;
display:flex;
flex-direction: column;
width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_ON_ONE_COLUMN(props.viewPortWidth).WIDTH}px;
height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_ON_ONE_COLUMN(props.viewPortWidth).HEIGHT}px;
& .img_card {
	width: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_ON_ONE_COLUMN_IMAGE(props.viewPortWidth).WIDTH}px;
	height: ${props => SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_ON_ONE_COLUMN_IMAGE(props.viewPortWidth).HEIGHT}px;
	position:relative;
}

`;


const Card: React.FC<TCard> = ({ image: { src }, dateSentence, informationCard }) => {
	const [loaded, setLoaded] = useState(false)
	const { viewPort } = React.useContext(ViewPortChildContext);
	return (
		<>
			<div className="img_card">
				<Image
					src={src ? src : `${PATH.ASSETS.IMAGES}${NAMES.IMAGE_DEFAULT}`}
					alt={informationCard.name}
					layout="responsive"
					width={`${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH}`}
					height={`${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT}`}
					onLoadingComplete={() => setLoaded(true)}
				/>
			</div>
			<div className="card_data_sentence">
				{
					(loaded && <DateSentence {...dateSentence} />)

				}
			</div>
		</>

	);
};
export default Card;
