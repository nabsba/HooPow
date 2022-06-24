import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import createPropsFromData from '../../../factory/createProps';
import { TComicsInformations } from '../../../utils/contexts/Comics';
import Card, { CSSCardOriginal, TCard } from '../../molecules/Card';

const Loading = () => <span style={{ textAlign: 'center', color: 'white', textTransform: 'capitalize' }}> add a loader</span>;


const ComponentsCards = (viewPortWidth: number, handleComicsInformations: any, comicsInformations: TComicsInformations) => {
    const cards = createPropsFromData('cards', comicsInformations.comicsDisplayed);
    const componentsCards = cards.map((card: TCard) =>
        <CSSCardOriginal viewPortWidth={viewPortWidth} >
            <div onClick={() => handleComicsInformations({
                ...comicsInformations,
                comicSelected: card.informationCard
            })}> <Card {...card} />
            </div>
        </CSSCardOriginal>);
    const indiceNum = 20;
    const componentsCardsOnLoad = []
    for (let index = 0; index < indiceNum; index++) {
        componentsCardsOnLoad.push(<CSSCardOriginal viewPortWidth={viewPortWidth} >
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