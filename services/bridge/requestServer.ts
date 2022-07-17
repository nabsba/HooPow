/* eslint-disable no-console */
import axios from 'axios';
import { logMessage, logErrorAsyncMessage } from '../common/funtions';
import { HTTP_STATUS_CODE } from './constant';
import { TOptionsAxios, TResult } from './type';

const resultTemplate: TResult = {
	state: false,
	data: '',
	status: 0,
	error: false,
};

const optionsAxiosTemplate: TOptionsAxios = {
	time: 15000,
	cancelToken: '',
	params: null,
}
const serverGet = async (
	url: string,
	optionsAxios: TOptionsAxios
): Promise<TResult> => {
	const result: TResult = { ...resultTemplate };
	let query: any = {};
	try {
		query = await axios.get(url, optionsAxios);
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

export { serverGet, resultTemplate, optionsAxiosTemplate };
