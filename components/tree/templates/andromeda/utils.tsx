import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { SIZE_ELEMENTS_ACTUAL_VIEW_PORT } from '../../../../services';
import createPropsFromData from '../../../factory/createProps';
import { TComicsInformations } from '../../../utils/contexts/Comics';
import Card, { CSSCardOriginal, TCard } from '../../molecules/Card';

const Loading = () => <span style={{ textAlign: 'center', color: 'white', textTransform: 'capitalize' }}> add a loader</span>;
const ComponentsCards = (list: any, viewPortWidth: number, handleComicsInformations: any, comicsInformations: TComicsInformations) => {
    const cards = createPropsFromData('cards', list);

    const componentsCards = cards.map((card: TCard) =>
        <CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPortWidth).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPortWidth).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPortWidth).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPortWidth).HEIGHT } }} >
            <div onClick={() => handleComicsInformations({
                ...comicsInformations,
                comicSelected: card.informationCard
            })}> <Card {...card} />
            </div>
        </CSSCardOriginal>);
    const indiceNum = 20;
    const componentsCardsOnLoad = []
    for (let index = 0; index < indiceNum; index++) {
        componentsCardsOnLoad.push(<CSSCardOriginal styleCSS={{ width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPortWidth).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD(viewPortWidth).HEIGHT, sizeImg: { width: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPortWidth).WIDTH, height: SIZE_ELEMENTS_ACTUAL_VIEW_PORT.CARD_IMAGE(viewPortWidth).HEIGHT } }} >
            <Loading />
        </CSSCardOriginal>)

    }


    return { componentsCards, componentsCardsOnLoad };
};



const RetrieveComicsOnScrolling = (comicsInformations: TComicsInformations, functionToRetrieve: any) => {
    const scrollRef: any = useBottomScrollListener(async () => {
        if (comicsInformations.allComics.length !== comicsInformations.comicsDisplayed.length)
            await functionToRetrieve();
    }, { offset: 100 });
    return { scrollRef }
};

export { ComponentsCards, RetrieveComicsOnScrolling }