import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled'
import { DateSentence } from '../atoms';
import { PATH, SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../services';
import { NAMES } from '../../../services/data/constant';
import { TDateSentence } from '../atoms/DateSentence';
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
	informationCard: any

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
	& img {
		border-radius: 5px;
	}
}
  `;

const Card: React.FC<TCard> = ({ image: { src }, dateSentence }) => {

	return (
		<>
			<div className="img_card">
				<Image
					src={src ? src : `${PATH.ASSETS.IMAGES}${NAMES.IMAGE_DEFAULT}`}
					alt={'test'}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<DateSentence {...dateSentence} />
		</>

	);
};
export default Card;
