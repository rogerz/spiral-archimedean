'use strict';

var chai = require('chaijs/chai');
var expect = chai.expect;

var lib = require('..');

describe('lib', function () {
	var func = lib();
	it('should return a function', function () {
		expect(func).to.be.a.function;
	});
});