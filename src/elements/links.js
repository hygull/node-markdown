/**
 * Created on
   ==========
   8 Dec 2018, Sat
 *
 * Aim
   ===
   - To provide the markdown formatted code to visit a link or diaply image
   - To set visit link or display image
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

function getImageLink(
	altText = "Graph icon", 
	imageUrl = "https://image.flaticon.com/icons/svg/123/123407.svg", 
	options = {}
) {
	/**
	 * Returns markdown code to display image 
	 */

	let imageLink = `![${altText}]` + `{${imageUrl}}`;
	return imageLink;
}

function setImageLink(
	altText = "Graph icon", 
	imageUrl = "https://image.flaticon.com/icons/svg/123/123407.svg", 
	options = {}
) {
	/**
	 * Setting markdown code to display image
	 */

	this.markdown.elements.push(this.getImageLink(altText, imageUrl, options));
}

module.exports = {
	setTextLink: setTextLink,
	getTextLink: getTextLink,

	setImageLink: setImageLink,
	getImageLink: getImageLink
};