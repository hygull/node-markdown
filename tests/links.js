/**
 * Created on: 8 Dec 2018, Sat
 * Aim: To test providing the markdown formatted code for image display / vist link
 */

const {Markdown} = require("../src/markdown");
const md = new Markdown();

/* Get anchor link (to visit)
   ==========================
   
   [Visit w3schools](https://www.w3schools.com)
*/
console.log(md.getTextLink("Visit w3schools", "https://www.w3schools.com"));

/* Set anchor link (to visit)
   ==========================

	{
	    "elements": [
	        "[Visit w3schools](https://www.w3schools.com)"
	    ]
	}
*/
md.setTextLink('Visit w3schools', 'https://www.w3schools.com');
console.log(JSON.stringify(md.markdown, null, 4));

/* Get image link (to display)
   ===========================

   ![Graph icon]{https://image.flaticon.com/icons/svg/123/123407.svg}
*/
console.log(md.getImageLink("Graph icon", "https://image.flaticon.com/icons/svg/123/123407.svg"));

/* Set image link (to display)
   ===========================

	{
	    "elements": [
	        "![Graph icon]{https://image.flaticon.com/icons/svg/123/123407.svg}"
	    ]
	}
*/
md.setImageLink('Graph icon', 'https://image.flaticon.com/icons/svg/123/123407.svg');
console.log(JSON.stringify(md.markdown, null, 4));
