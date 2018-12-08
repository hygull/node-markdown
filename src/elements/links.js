/**
 * Created on
   ==========
   8 Dec 2018, Sat
 *
 * Aim
   ===
   - To provide the markdown formatted code for link
   - To set link
 */

function getTextLink(text, url, options = {}) {
	/**
	 * Returns markdown code for urls
	 *
	 * text: 'Visit Google'
	 * url : 'https://www.google.com/'
	 *
	 * [Visit Google](https://www.google.com/)
	 */	

	if(!text) {
		text = "Visit Google";
	}

	if(!url) {
		url = "https://www.google.com"
	}

	let markdownLink = `[${text}](${url})`;
	return markdownLink;
}

function setTextLink(text, url, options = {}) {
	/**
	 * It sets the link as part of the final markdown document
	 */

	this.markdown.elements.push(this.getTextLink(text, url, options));
}

module.exports = {
	setTextLink: setTextLink,
	getTextLink: getTextLink
};