import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from "../../../services";
import { Card } from "../molecules";
import { TCard, CSSCardOriginal } from "../molecules/Card";
import MainAnnonce, { TMainAnnonce } from "./MainAnnonce";

type TTadpoleLeftSideChildV1 = {
    card: TCard;
    viewPortWidth: number;
    mainAnnonce: TMainAnnonce
}
const TadpoleLeftSideChildV1: React.FC<TTadpoleLeftSideChildV1> = ({ card, viewPortWidth, mainAnnonce }) => {
    return <div className='flex_column_center_end' style={{ flex: 1 }}>
        <CSSCardOriginal viewPortWidth={viewPortWidth} >
            <Card {...card} />
        </CSSCardOriginal>
        <div style={{ height: '10px' }} />
        <MainAnnonce {...mainAnnonce} />


    </div>
}
export default TadpoleLeftSideChildV1