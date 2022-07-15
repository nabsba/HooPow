import { useContext, useRef } from 'react';
import { SlideChildContext } from '../../../utils/contexts/Slider';

const Util = () => {
	const { contextSlider, handleSlider } = useContext(SlideChildContext)
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (current: any) => {
			handleSlider({
				oldSlide: current,
				activeSlide: contextSlider.activeSlide,
			});
		},
		afterChange: (current: any) => {
			handleSlider({
				oldSlide: current,
				activeSlide: contextSlider.oldSlide,
			});
		},
	};
	const sliderRef: any = useRef(null);

	return { sliderRef, settings };
};


export default Util;
