/**
 * Created on: 7 Dec 2018, Fri
 * Aim: To provide the type of data
 */

function getType(object) {
	return Object.prototype.toString.call(object).slice(8, -1);
}

module.exports = {
	getType: getType
}