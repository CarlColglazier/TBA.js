var lib = require('./lib');

module.exports = function() {
	var obj,
	    tba;
    if (arguments.length == 1 && typeof arguments[0] === 'object') {
	    obj = arguments[0];
	    if (obj.id && obj.description && obj.version) {
			tba = new lib(obj);
			return tba;
		}
		throw new Error('Invalid description');
	} else if  (arguments.length == 3) {
		obj = {};
		obj.id = arguments[0];
		obj.description = arguments[1];;
		obj.version = arguments[2];
		tba = new lib(obj);
		return tba;
	}
	throw new Error('Invalid description');
}