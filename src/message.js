/**
 * Created on: 20 Dec 2018, Thu
 * Aim: To create a class containing methods for printig different kind of messages
 		on console.
 */

class Message {
	/**
	 * A class containing the different methods for printing relevant 
	   messages on console.
	 *
	 * These messages may be of types warning, error, success etc.
	 * 
	 */

	constructor() {
		// Empty
	}

	__combiner(message, ...args) {
		message = '' + message + args.map((c) => '' + c).join(' ');
		return message;
	}

	__warning(message, ...args) {
		console.log('\n[WARNING] ' + this.__combiner(message, args));
	}

	__error(message, ...args) {
		console.log('\n[ERROR] ' + this.__combiner(message, args));
	}

	__success(message, ...args) {
		console.log('\n[SUCCESS] ' + this.__combiner(message, args));
	}

	__info(message, ...args) {
		console.log('\n[INFO] ' + this.__combiner(message, args));
	}
}

// small cases keys looks good, this is just to remember the name of class
module.exports = {
	Message: Message
}