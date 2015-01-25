var lib = require('./lib');

/** 
 * Check if there is a valid id, description, and version and return a new tba function if true. 
 * The first "if" statement starts a check for when an object is used. 
 * The "else if" is used where an object is not used. 
 * If the number of arguments does not match an expected amount, an exception is thrown.
 */

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