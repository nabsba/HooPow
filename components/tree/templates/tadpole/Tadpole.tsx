import { css, useTheme } from '@emotion/react';
import * as React from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import dataCommon from '../../../../services/data/common';
import Image from 'next/image';
import { NAMES, PATH } from '../../../../services/data/constant';
import createPropsFromData from '../../../factory/createProps';
import { LeftSideFrame, RightSideFrame } from '../../../utils';
import FullScreenParentContext, { FullScreenChildContext } from '../../../utils/contexts/FullScreen';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';
import { SliderComponent, TadpoleLeftSideChildV2 } from '../../organisms';
import AnnonceSmall, { CSSAnnonceOriginal, CSSAnnonceVariant } from '../../molecules/AnnonceSmall';





const Tadpole: React.FC = ({ }) => {
    const { handleStateFullScreen, stateFullScreen } = FullScreenParentContext()
    const { viewPort } = React.useContext(ViewPortChildContext);
    const componentsSliders = createPropsFromData('slidersComicImages', '');
    const theme: any = useTheme();
    const { annonce } = dataCommon.fr;
    const gab = componentsSliders.map((comp: any) => <div className="check_here" css={css`
        position: relative;
        width:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).WIDTH}px !important;
        height:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).HEIGHT}px;
    `}> <Image
            src={
                comp.image.src
                    ? comp.image.src
                    : `${PATH.ASSETS.IMAGES}${NAMES.IMAGE_DEFAULT}`
            }
            alt="test"
            layout="fill"
            objectFit='contain'

        />
    </div>)

    return (<>
        <FullScreenChildContext.Provider value={{
            handleStateFullScreen,
            stateFullScreen
        }}>
            <LeftSideFrame>
                <TadpoleLeftSideChildV2 />
            </LeftSideFrame>
            <RightSideFrame>
                <div className="here" css={css`
                display: flex;
                height: 100%;
                .slides_wrapper {
                    margin:auto;
                    width:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).WIDTH}px !important;
                     height:${SIZE_ELEMENTS_ACTUAL_VIEW_PORT.SLIDER_IMAGE(viewPort.width).HEIGHT}px;
                }
                `}>
                    <SliderComponent Components={gab} wiewPortWidth={viewPort.width} />
                </div>

                <CSSAnnonceVariant
                    viewPortWidth={viewPort.width}
                    background={theme.COLORS.PRIMARY}>
                    <AnnonceSmall {...annonce} />
                </CSSAnnonceVariant>
            </RightSideFrame>
        </FullScreenChildContext.Provider>
    </>)

}
export default Tadpole