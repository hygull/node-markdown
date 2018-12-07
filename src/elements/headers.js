/**
 * Created on: 7 Dec 2018, Fri
 * Aim: To provide the markdown formatted code for Markdown headings
 */

function getHeadingType(headingType) {
	if(!(/^\d$/.test("" + headingType))) {
		headingType = 1;
	}
	headingType = Number(headingType);
	
	if((headingType >=1) && (headingType <= 6)) {
		headingType = 1;
	}

	return headingType;
}

function setHeading(text, headingType=1) {
	hashes = "#".repeat(getHeadingType(headingType));
	heading = hashes + " " + text;
	this.markdown.elements.append(heading);
}