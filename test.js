var assert = require('assert');
var formatter = require('./index');

describe('Formatter', function () {

	describe('numbers (applying options)', function () {
		it('should handle no options', function () {
			assert.equal(0.00, formatter.number(0));
		});

	});

});