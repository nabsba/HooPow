
import * as React from 'react';
import dataCommon from '../../../../services/data/common';
import { FullScreenChildContext } from '../../../utils/contexts/FullScreen';
import { RightSideTadpole, TadpoleLeftSideChildV1, TadpoleLeftSideChildV2 } from '../../organisms';
import { SlideChildContext } from '../../../utils/contexts/Slider';
import createPropsFromData from '../../../factory/createProps';
import CompositionFrames from '../../../utils/CompositionFrames';
import { GetAllContexts } from './util';

const Tadpole: React.FC<any> = ({ comic }) => {
    if (!comic) return null;
    const { annonce, mainAnnonce, userMenu } = dataCommon.fr;
    const { viewPort, fullScreenContext, sliderContext } = GetAllContexts();
    return (<>
        <FullScreenChildContext.Provider value={fullScreenContext}>
            <SlideChildContext.Provider value={sliderContext}>
                <CompositionFrames
                    leftSideFrameProps={{
                        userMenu, childComponent: sliderContext.contextSlider.oldSlide ? <TadpoleLeftSideChildV2 comic={createPropsFromData('card', comic)} /> : <TadpoleLeftSideChildV1 card={createPropsFromData('card', comic)} viewPortWidth={viewPort.width} mainAnnonce={mainAnnonce} />
                    }}
                    rightSideFrameProps={{
                        childComponent: <RightSideTadpole comic={comic} annonce={annonce} />
                    }}
                />
            </SlideChildContext.Provider>
        </FullScreenChildContext.Provider>
    </>)

}
export default Tadpole