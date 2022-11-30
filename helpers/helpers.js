/**
 * Funcion que encuentra la maxima ocurrencia en un array numerico
 * @param {number[]} givenArray
 * @returns number
 */
function MostOcurrentInArray(givenArray) {
	// 2
	let itemsMap = {};
	let maxValue = 0;
	let maxCount = 0;

	// 3
	for (let item of givenArray) {
		// 4
		if (itemsMap[item] == null) {
			itemsMap[item] = 1;
		} else {
			itemsMap[item]++;
		}

		//5
		if (itemsMap[item] > maxCount) {
			maxValue = item;
			maxCount = itemsMap[item];
		}
	}

	// 6
	return maxValue;
}

module.exports = {
	MostOcurrentInArray,
};
