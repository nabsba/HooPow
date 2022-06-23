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

export { logErrorAsyncMessage, logMessage, calculateProportion, returnDate };
