import { DAYS } from "../data/constant";

const logMessage = (message: string): void => {
	if (true) console.log(message);
};
const logErrorAsyncMessage = (path: string, method: string): string =>
	`*** file: ${path}, method: ${method} `;

const calculateProportion = (number1: number, number2: number) => {
	const result = number1 / number2;
	return result

}

const returnDate = (date: string) => {
	var now = new Date(date);
	return `${DAYS[now.getDay()]} ${now.getDate()}`
}


const metricsPerformence = (id: any, phase: any, actualDuration: any, baseDuration: any, startTime: any, commitTime: any, interactions: any) => {
	// id, the "id" prop of the Profiler tree that has just committed
	// phase, either "mount" (if the tree just mounted) or "update" (if it re-rendered)
	// actualDuration, time spent rendering the committed update
	// baseDuration, estimated time to render the entire subtree without memoization
	// startTime, when React began rendering this update
	// commitTime, when React committed this update
	// interactions, the Set of interactions belonging to this update
	console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions })
}

export { logErrorAsyncMessage, logMessage, calculateProportion, returnDate, metricsPerformence };
