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

const {getType} = require("../types");
const fs = require("fs");

function getTableCodeForArray(arr, options) {
	/**
	 * arr: 2d array of items
	 */
	let tableCodes = [], colNames = [], dashes = [];

	// LOGIC
	for(let i = 0; i < arr.length; i++) {
		let row = "| ";

		for(let j = 0; j < arr[0].length; j++) {
			if(i == 0) {
				colNames.push('Col' + (j + 1));
				dashes.push('---')
			}

			row += arr[i][j] + " | ";
		}

		tableCodes.push(row.trim());
	}

	if(options.columns) {
		colNames += "| " + options.columns.join(" | ") + " |";
	} else {
		colNames = "| " + colNames.join(" | ") + " |"
	}

	dashes = "| " + dashes.join(" | ") + " |";
	let tableCode = colNames + "\n" + dashes + "\n" + tableCodes.join("\n");
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
		// Here it is assumed that arrOrPath is a 2d array of data items
		/*
			[
				['Tom Maccoy', 67, 1000.0],
				['Amar Khan', 78, 3000.0],
				['Dony Jessy', 89, 67000.0]
			]
		*/
		tableCode = getTableCodeForArray(arrOrPath, options);
	} else if(type == "String") {
		// Here it is assumed that arrOrPath is path of csv file
		/*
			D:\Working\Data\CSVs\Users.csv
		*/
		tableCode = getTableCodeForCsv(arrOrPath, options);
	} else {
		// Invalid data (!(Array || String))
		arrOrPath = [['Data 1']];
		options = {columns: ["Column 1"]};
		tableCode = getTableCodeForArray(arrOrPath);
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