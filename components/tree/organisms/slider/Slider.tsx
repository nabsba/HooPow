
import { css } from '@emotion/react';
import * as React from 'react';
import Slider from 'react-slick';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import { SlideChildContext } from '../../../utils/contexts/Slider';
import getIcon from '../../atoms/icons/Icons';
import Util from './util';
type TSlider = {
     Components: React.ReactNode[];
     wiewPortWidth: number;
}
const SliderComponent: React.FC<TSlider> = ({ Components, wiewPortWidth }) => {
     const { sliderRef, settings } = Util();
     const { contextSlider } = React.useContext(SlideChildContext)
     const base = css`
     margin: auto;
    .slider_arrow_prev {
     opacity: ${contextSlider.oldSlide === 0 ? 0 : 1};
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
     height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
     & svg {
     cursor: pointer;
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
     height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
     position:relative;
     left: -70%;
}
}
  .slider_arrow_next {
     opacity: ${contextSlider.oldSlide + 1 === Components.length ? 0 : 1};
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
     height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
         & svg {
                transform: rotate(180deg);
                 cursor: pointer;
                 width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
                 height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
                 position:relative;
                 right: -70%;
 }
}
  .slides_wrapper {
     min-height: 0px; 
     min-width: 0px;
    .slick-dots li button:before {
          color: #808080;
     }
     .slick-dots li button:before {
          font-size: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.DOT_SLIDER(wiewPortWidth).WIDTH}px;
     }
     
      .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
     }
       .slick-prev {
          display: none !important;
     }
     .slick-next {
          display: none !important;
     }
 }
     `;
     return <div className="flex_row_center" css={base}>
          <span
               className="slider_arrow_prev"
               onClick={() => sliderRef?.current?.slickPrev()}
          >
               {getIcon('Arrow_slider')}
          </span>
          <div className="slides_wrapper">
               <Slider ref={sliderRef} {...settings}>
                    {Components.map(ComponentHTML => ComponentHTML)}
               </Slider>
          </div>
          <span
               className="slider_arrow_next"
               onClick={() => {
                    sliderRef?.current?.slickNext();
               }}
          >
               {getIcon('Arrow_slider')}
          </span>
     </div>
}


export default SliderComponent