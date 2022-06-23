import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled'
import { DateSentence } from '../atoms';
import { PATH } from '../../../services';
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
flex-direction: column;
width: ${props => props.styleCSS.width}px;
height: ${props => props.styleCSS.height}px;
& .img_card {
	width: ${props => props.styleCSS.sizeImg.width}px;
	height: ${props => props.styleCSS.sizeImg.height}px;
	position:relative;
	& img {
		border-radius: 5px;
	}
}
`;
export const CSSCardVariant1 = styled(CSSCardOriginal)`
opacity: .4;
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
