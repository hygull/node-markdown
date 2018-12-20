/**
 * Created on: 14 Dec 2018, Fri
 * Aim: To test providing the markdown formatted code for table
 */

const {Markdown} = require("../src/markdown");
const md = new Markdown();

/* Get markdown code for table
   ===========================
	
	| Col1 | Col2 | Col3 | Col4 |
	| ---- | ---- | ---- | ---- |
	| 12 | 34 | 55 | 66 |
	| 12 | 34 | 55 | 67 |

*/
console.log(md.getTable([[12, 34, 55, 66], [12, 34, 55, 67]]));
console.log(md.getTable([]));

let users = [
	{
		"fullname": 'Raghvendra Thakur',
		'age': 26,
		'salary': '3000000'
	},
	{
		"fullname": 'Hem Agrawani',
		'age': 36,
		'salary': '5000000'
	},
	{
		"fullname": 'Gaulin Pour',
		'age': 25,
		'salary': '2000000'
	},
	{
		"fullname": 'Tiger Golly',
		'age': 30,
		'salary': '3500000'
	},
]

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
