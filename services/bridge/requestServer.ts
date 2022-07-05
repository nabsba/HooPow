/* eslint-disable no-console */
import axios from 'axios';
import { logMessage, logErrorAsyncMessage } from '../common/funtions';
import { HTTP_STATUS_CODE } from './constant';
import { TResult } from './type';

const resultTemplate: TResult = {
	state: false,
	data: '',
	status: 0,
	error: false,
};

const serverGet = async (
	url: string,
	time?: number | null,
	source?: any,
	params?: any,
): Promise<TResult> => {
	const result: TResult = { ...resultTemplate };
	let query: any = {};

	try {
		query = await axios.get(url, {
			timeout: time ? time : 15000,
			cancelToken: source ? source.token : null,
			params,
		});
		result.state = Boolean(query.data);
		result.data = query.data;
	} catch (error) {
		logMessage(`${logErrorAsyncMessage('bridge/requestServer', 'serverGet')},
			${error}`);
		result.error = true;
		result.status = HTTP_STATUS_CODE.BAD_REQUEST;
	} finally {
		return result;
	}
};

export { serverGet, resultTemplate };
