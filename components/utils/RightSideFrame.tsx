import { css, useTheme } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../services';
import { TTheme } from '../../services/style/type';
import { Card } from '../tree/molecules';
import { CSSCardOriginal } from '../tree/molecules/Card';
import Gallery, { CSSGaleryRows } from '../tree/organisms/Gallery';
import { ViewPortChildContext } from './contexts/ViewPort';

type TRightSideFrame = { children: any }




const RightSideFrame: React.FC<TRightSideFrame> = ({ children }) => {
  const { viewPort } = React.useContext(ViewPortChildContext);


  const base: any = (props: TTheme) => css`
   border-radius: 5px;
   flex-basis: ${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.RIGHT_SIDE_FRAME(viewPort.width)}px;
   background-color: ${props.COLORS.SECONDARY};`


  return (<div
    css={base} >
    <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPort.width).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPort.width).HEIGHT } }} >
      <Card image={{
        src: ''
      }} dateSentence={{
        date: 'lundi 01',
        sentence: 'hello'
      }} id={''} />
    </CSSCardOriginal>
    {/* <CSSGaleryRows ref={scrollRef} styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(viewPort.width), height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.GALLERY_MULTIPLE_ROWS(viewPort.width) }}>
      <Gallery componentsHTML={componentsCards} />
    </CSSGaleryRows> */}
    {children} </div>)

}
export default RightSideFrame