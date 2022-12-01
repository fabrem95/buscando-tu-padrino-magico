/**
 * Funcion que encuentra la maxima ocurrencia en un array numerico
 * @param {number[]} givenArray
 * @returns number
 */
function MostOcurrentInArray(givenArray) {
	// 2
	let itemsMap = {};
	let maxValues = [];
	let maxCount = 0;
	let maxValue = 0;

	// 3
	for (let item of givenArray) {
		// 4
		if (itemsMap[item] == null) {
			itemsMap[item] = 1;
		} else {
			itemsMap[item]++;
		}

		//5
		if (itemsMap[item] >= maxCount) {
			maxValues.push(item);
			maxCount = itemsMap[item];
		}
	}

	maxValue = getRandomArbitrary(maxValues)

	// 6
	return maxValue;
}

function getRandomArbitrary(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	MostOcurrentInArray,
};
