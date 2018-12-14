/**
 * Created on: 14 Dec 2018, Fri
 * Aim: To test providing the markdown formatted code for table
 */

const {Markdown} = require("../src/index");
const md = new Markdown();

/* Get markdown code for table
   ===========================
   
*/
console.log(md.getTable([[12, 34, 55, 66], [12, 34, 55, 67]]));

// /* Set anchor link (to visit)
//    ==========================

// 	{
// 	    "elements": [
// 	        "[Visit w3schools](https://www.w3schools.com)"
// 	    ]
// 	}
// */
// md.setTextLink('Visit w3schools', 'https://www.w3schools.com');
// console.log(JSON.stringify(md.markdown, null, 4));

// /* Get image link (to display)
//    ===========================

//    ![Graph icon]{https://image.flaticon.com/icons/svg/123/123407.svg}
// */
// console.log(md.getImageLink("Graph icon", "https://image.flaticon.com/icons/svg/123/123407.svg"));

// /* Set image link (to display)
//    ===========================

// 	{
// 	    "elements": [
// 	        "![Graph icon]{https://image.flaticon.com/icons/svg/123/123407.svg}"
// 	    ]
// 	}
// */
// md.setImageLink('Graph icon', 'https://image.flaticon.com/icons/svg/123/123407.svg');
// console.log(JSON.stringify(md.markdown, null, 4));
