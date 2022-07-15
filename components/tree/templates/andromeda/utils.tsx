import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { ROUTES } from '../../../../services';
import createPropsFromData from '../../../factory/createProps';
import { ViewPortChildContext } from '../../../utils/contexts';
import { ComicsChildContext, TComicsInformations } from '../../../utils/contexts/Comics';
import ComponentWithLogicDataFetching from '../../../utils/higherOrderComponents/ComponentWithLogicDataFetching';
import Card, { CSSCardOriginal, TCard } from '../../molecules/Card';
import Gallery from '../../organisms/Gallery';

const GetAllContexts = () => {
    const { viewPort } = useContext(ViewPortChildContext);
    const { comicsInformations,
        getNewListComics, pending, errorServer } = useContext(ComicsChildContext);
    const comicContext = { comicsInformations, getNewListComics, errorServer, pending }
    return { viewPort, comicContext }

}

const GenerateComicCardsFromDataReceived = (viewPortWidth: number, handleComicsInformations: any, comicsInformations: TComicsInformations) => {
    const cards = createPropsFromData('cards', comicsInformations.comicsDisplayed);
    const componentsCards = cards.map((card: TCard) =>
        <Link key={card.informationCard.mainId} href={ROUTES.COMIC(card.informationCard.mainId)}>
            <CSSCardOriginal key={card.dateSentence.sentence} viewPortWidth={viewPortWidth} >
                <div onClick={() => handleComicsInformations({
                    ...comicsInformations,
                    comicSelected: card.informationCard
                })}> <Card {...card} />
                </div>
            </CSSCardOriginal>
        </Link>);
    return componentsCards;
};
const RetrieveComicsOnScrolling = (comicsInformations: TComicsInformations, functionToRetrieve: any) => {
    const scrollRef: any = useBottomScrollListener(async () => {
        if (comicsInformations.allComics.length !== comicsInformations.comicsDisplayed.length)
            await functionToRetrieve();
    }, { offset: 100 });
    return { scrollRef }
};

const GetAllComponentsNedded = () => {
    const { viewPort } = useContext(ViewPortChildContext);
    const { comicsInformations,
        handleComicsInformations } = useContext(ComicsChildContext);
    const ComponentsComicCards = GenerateComicCardsFromDataReceived(viewPort.width, handleComicsInformations, comicsInformations);
    const ComponentsComicCardsWithLogicDataFetching = React.memo(ComponentWithLogicDataFetching(Gallery));
    return { ComponentsComicCards, ComponentsComicCardsWithLogicDataFetching }
}

export { GenerateComicCardsFromDataReceived, RetrieveComicsOnScrolling, GetAllContexts, GetAllComponentsNedded, }