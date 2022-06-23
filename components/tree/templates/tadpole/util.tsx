import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from "../../../../services";
import { TComic } from "../../../../services/data/type";
import createPropsFromData from "../../../factory/createProps";
import { Card } from "../../molecules";
import { CSSCardOriginal } from "../../molecules/Card";
import { ComponentsCards } from "../andromeda/utils";

const ComponentCard = (comicSelected: TComic, viewPortWidth: number) => {
    const card = createPropsFromData('card', comicSelected);
    <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPortWidth).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPortWidth).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPortWidth).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPortWidth).HEIGHT } }} >
        <Card {...card} />
    </CSSCardOriginal>
}

export { ComponentsCards }