<h1 id="readme">node-markdown</h1>

> You can also visit [https://hygull.github.io/node-markdown/](https://hygull.github.io/node-markdown/) and read the beautiful documentation.

An npm package which allows to generate a markdown file using a pure object oriented oriented approach which can be used to create documentation (README.md) for projects.

<h2 id="installation">Installation</h2>

| Type | Command |
| --- | --- |
| Locally | npm install node-markdown |
| Globally | npm install node-markdown |

<h2 id='examples'>Examples</h2>

* <a href="#links">Get/set links</a>

<h3 id="links">Get/set links</h3>

```javascript
const {Markdown} = require("node-markdown");
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
```
