/**
 * Created on
   ==========
   9 Dec 2018, Sun
 *
 * Aim
   ===
   - To provide the markdown formatted code for tables
     (It will take 2D arrays, csv path as parameters)
 */

const {getType} = require("types");
const fs = require("fs");

function getTableCodeForArray(arr, options) {
	/**
	 * arr: 2d array of items
	 */
	let tableCode;
	// LOGIC
	
	return tableCode;
}


function getTableCodeForCsv(csvPath, options) {
	/**
	 * csvPath: Relative/absolute path of csv file
	 */
	 let tableCode;
	 // LOGIC

	 return tableCode;
}


function getTable(arrOrPath, options = {}) {
	let type = getType(arrOrPath);
	let tableCode;

	if(type == "Array") {
		tableCode = getTableCodeForArray(arrOrPath, options);
	} else if(type == "String") {
		tableCode = getTableCodeForCsv(arrOrPath, options);
	} else {
		// Invalid data (!(Array || String))
		arrOrPath = [['Data 1']];
		options = {columns: ["Column 1"]};
		tableCode = getTableCode(arrOrPath);
	}

	return tableCode;
}


function setTable(arrOrPath, options = {}) {
	this.markdown.elements.push(this.getTable(arrOrPath, options));
}

// Exporting functions to be used as methods of Markdown class
module.exports = {
	getTable: getTable,
	setTable: setTable
};