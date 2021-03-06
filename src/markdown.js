/**
 * Created on
   ==========
   7 Dec 2018, Fri
 *
 * Aim
   ===
   An npm package which allows to generate a markdown file using a pure 
   object oriented oriented approach which can be used to create documentation (README.md) 
   for projects.
 */

const {getType} = require("./types");
const {setHeading} = require("./elements/headings");

const {
	setTextLink,
	getTextLink,
	setImageLink,
	getImageLink
} = require("./elements/links");

const {
	setTable,
	getTable
} = require("./elements/tables");

const {Message} = require("./message");


class Markdown extends Message {
	constructor(fileName = "Untitled-markdown") {
		/******************************
			Methods will be added here
		*******************************/

		super();

		this.getType = getType;

		/*
			HEADINGS
		*/
		this.setHeading = setHeading;

		/*
			To (visit link | diplay image)
		*/
		this.getTextLink = getTextLink;
		this.setTextLink = setTextLink;
		this.setImageLink = setImageLink;
		this.getImageLink = getImageLink;

		/*
			To set/get markdown code for table
		*/
		this.getTable = getTable;
		this.setTable = setTable;

		this.fileName = this.checkAndSet(fileName);
		this.markdown = {
			elements: []
		}
	}

	checkAndSet(fileName) {
		if(!getType(fileName) === "String") {
			return "Untitled-markdown";
		}
	}
}

module.exports = {
	Markdown: Markdown
};