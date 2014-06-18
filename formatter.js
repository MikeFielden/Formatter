'use strict';

var humanize = require('humanize')
	, _ = require('lodash')
	, defaultNumberFormat = {
		decimals: 2,
		decPoint: '.',
		thousandsSep: ','
	};

module.exports = {
	/**
	 *	Takes a number and optional values and formats it
	 **/
	number: function (val, options) {
		options = options || {};

		var o = _.defaults(options, defaultNumberFormat);

		return humanize.numberFormat(val, o.decimals, o.decPoint, o.thousandsSep);
	}
};
