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
		var o;

		if (options === undefined) {
			options = {};
		}

		o = _.defaults(options, defaultNumberFormat);

		return humanize.numberFormat(val, o.decimals, o.decPoint, o.thousandsSep);
	}
};
