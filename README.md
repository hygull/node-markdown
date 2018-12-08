<h1 id="readme">node-markdown</h1>

An npm package which allows to generate a markdown file using a pure object oriented oriented approach which can be used to create documentation (README.md) for projects.

> You can also visit [https://hygull.github.io/node-markdown/](https://hygull.github.io/node-markdown/) and read the beautiful documentation.

<h2 id="installation">Installation</h2>

| Type | Command |
| --- | --- |
| Locally | `npm install  node-markdown` |
| Globally | `npm install  node-markdown  -g` |

<h2 id="why-markdown">What is markdown and who developed it</h2>

+ Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.

+ **Developed by:** **John Gruber** (in collaboration with **Aaron Swartz** on the syntax)


<h2 id='examples'>Examples</h2>

* <a href="#link-to-visit">Get/set visit links</a>

* <a href="#link-to-display-image">Get/set markdown code to display image</a>

> Please look into the below well commented examples to have a quick taste. 

<h3 id="link-to-visit">Get/set visit links</h3>

```javascript
const {Markdown} = require("node-markdown");
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

```

<h3 id="link-to-display-image">Get/set markdown code to display image</h3>

```javascript
const {Markdown} = require("node-markdown");
const md = new Markdown();


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

```
