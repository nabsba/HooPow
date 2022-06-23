
import { css } from '@emotion/react';
import * as React from 'react';
import Slider from 'react-slick';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import getIcon from '../../atoms/icons/Icons';
import Util from './util';
type TSlider = {
     Components: React.ReactNode[];
     wiewPortWidth: number;
}

// opacity: contextSlider.oldSlide === 0 ? 0 : 1;
// opacity: contextSlider.oldSlide + 1 === gallery.length ? 0 : 1,
const SliderComponent: React.FC<TSlider> = ({ Components, wiewPortWidth }) => {
     const { sliderRef, settings } = Util();
     const base = css`
& .slider_arrow_prev {
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
     height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
     & svg {
     cursor: pointer;
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
     height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
}
}
 & .slider_arrow_next {
     width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
     height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
         & svg {
                transform: rotate(180deg);
                 cursor: pointer;
                 width: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).WIDTH}px;
                 height: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.ICON_ARROW(wiewPortWidth).HEIGHT}px;
 }
}
 & .slides_wrapper {
     min-height: 0px; min-width: 0px;
     &  .slick-prev {
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