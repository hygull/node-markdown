/**
 * Created on: 7 Dec 2018, Fri
 * Aim: To test providing the markdown formatted code for Markdown headings
 */

const {Markdown} = require("../src/markdown");
const md = new Markdown();

md.setHeading("This is a node package for documentation", 1);
console.log(md.markdown.elements);