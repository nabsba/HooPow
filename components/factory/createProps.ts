import { PATHS_SERVER } from '../../services/bridge/constant';
import { returnDate } from '../../services/common/funtions';
import { TComic } from '../../services/data/type';
import { TCard } from '../tree/molecules/Card';


const createPropsFromData = (type: string, data: any) => {
	switch (type) {
		case 'cards': {
			const cards: TCard[] = [];
			data.map((element: TComic) =>
				cards.push({
					image: {
						src: PATHS_SERVER.IMAGES(element.imageHomepage),
					},
					dateSentence: {
						date: returnDate(element.publicationDate),
						sentence: element.name,
					},
					informationCard: element
				}),
			);
			return cards;
		}
		case 'card': {
			const card = {
				image: {
					src: PATHS_SERVER.IMAGES(data.imageHomepage),
				},
				dateSentence: { date: '', sentence: data.name },
				informationCard: data,
			}
			return card;
		}
		case 'slidersComicImages': {
			const sliders: any[] = [];
			data.bdImage.map((comic: any) => sliders.push(
				{
					image: {
						src: PATHS_SERVER.IMAGES(comic.bdImageFr),
					},
					informationCard: comic,
				}))
			return sliders;
		}
		default:
			return data;
	}
};

export default createPropsFromData;
