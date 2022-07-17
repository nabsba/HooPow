type TResult = {
	state: boolean;
	data: any;
	status: number;
	error: boolean;
};
type TOptionsAxios = {
	time: number,
	cancelToken: any,
	params: any,
}

export type { TResult, TOptionsAxios };
