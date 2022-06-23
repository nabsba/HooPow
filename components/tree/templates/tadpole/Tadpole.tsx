import * as React from 'react';
import { useContext } from 'react';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import dataCommon from '../../../../services/data/common';
import createPropsFromData from '../../../factory/createProps';
import { LeftSideFrame, RightSideFrame } from '../../../utils';
import { ComicsChildContext } from '../../../utils/contexts/Comics';
import { ViewPortChildContext } from '../../../utils/contexts/ViewPort';
import { TadpoleLeftSideChildV1 } from '../../organisms';



const Tadpole: React.FC = ({ }) => {
    const { comicsInformations } = useContext(ComicsChildContext);
    const { viewPort } = React.useContext(ViewPortChildContext);
    const { mainAnnonce, annonce, iconTitle } = dataCommon.fr;

    const card = createPropsFromData('card', comicsInformations.comicSelected);
    return (<>
        <LeftSideFrame>
            <TadpoleLeftSideChildV1 card={card} viewPortWidth={viewPort.width} mainAnnonce={mainAnnonce} />

        </LeftSideFrame>
        <RightSideFrame> <h1>  hello tadpole</h1></RightSideFrame>

    </>)

}
export default Tadpole