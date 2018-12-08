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
	getTextLink
} = require("./elements/links");

class Markdown {
	constructor(fileName="Untitled-markdown") {
		/******************************
			Methods will be added here
		*******************************/
		this.getType = getType;

		/*
			HEADINGS
		*/
		this.setHeading = setHeading;

		/*
			LINKS
		*/
		this.getTextLink = getTextLink;
		this.setTextLink = setTextLink;

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