import { TLanguages } from '../common/type';

const HTTP_STATUS_CODE = {
	BAD_REQUEST: 400,
	INTERNAL_SERVER_ERROR: 500,
	SUCCEEDED: 200,
};
const NOTIFICATION_GENERAL_SERVER: {
	[key in TLanguages]: {
		SERVER_FAILURE: string;
		SERVER_SUCCESS: string;
		SERVER_BAD_REQUEST: string;
		UNEXPECTED_ERROR: string;
	};
} = {
	fr: {
		SERVER_FAILURE: 'Erreur',
		SERVER_BAD_REQUEST: 'Mauvaise formulation',
		SERVER_SUCCESS: 'Reussi !',
		UNEXPECTED_ERROR: 'Nous avons rencontré une erreur',
	},
};

const PATHS_SERVER = {
	ALL_COMICS:
		process.env.NEXT_PUBLIC_DEVELOPMENT == 'true'
			? '/api/allComics'
			: 'https://api.jsonbin.io/b/60d15d6c8ea8ec25bd12c083',
	DETAILS_COMIC: (id: string) =>
		process.env.NEXT_PUBLIC_DEVELOPMENT == 'true'
			? '/api/detailComic'
			: `https://api.jsonbin.io/b/${id}`,
	IMAGES: (id: string) =>
		process.env.NEXT_PUBLIC_DEVELOPMENT == 'true'
			? '/api/image'
			: `https://d2hkgoif6etp77.cloudfront.net/${id}`,
};

export { HTTP_STATUS_CODE, NOTIFICATION_GENERAL_SERVER, PATHS_SERVER };
