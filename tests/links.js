/**
 * Created on: 8 Dec 2018, Sat
 * Aim: To test providing the markdown formatted code for Markdown headings
 */

const {Markdown} = require("../src/index");
const md = new Markdown();

/* Get link
   ========
   [Visit w3schools](https://www.w3schools.com)
*/
console.log(md.getTextLink("Visit w3schools", "https://www.w3schools.com"));

/* Set link
   ========
   { elements: [ '[Visit w3schools](https://www.w3schools.com)' ] }
*/
md.setTextLink('Visit w3schools', 'https://www.w3schools.com');
console.log(md.markdown);



