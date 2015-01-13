/* jshint mocha:true */

var assert = require('assert');
var re = require('../');

function test ( val ) {
	return re().test(val);
}

function match ( val ) {
	return re().exec(val);
}

it('should have 13 digits', function () {
	assert.ok(test('0212988000000'));
	assert.ok(!test('02129880000001'));
	assert.ok(!test('021298800000'));
});

it('should have date in format ddmmyyy, respecting leap year', function () {
	assert.ok(test('0212988000000'));
	assert.ok(test('2902988000000'));
	assert.ok(!test('3002988000000'));
	assert.ok(!test('3213988000000'));
});

it('should have region in range 00-96', function () {
	assert.ok(test('0212988000000'));
	assert.ok(test('0212988500000'));
	assert.ok(test('0212988960000'));
	assert.ok(!test('0212988970000'));
	assert.ok(!test('0212988990000'));
});

it('should have gender in range 000-999', function () {
	assert.ok(test('0212988000000'));
	assert.ok(test('0212988005550'));
	assert.ok(test('0212988009990'));
});

it('should have proper match groups', function () {
	assert.equal(match('1304005111059')[0], '1304005111059');
	assert.equal(match('1304005111059')[1], '13');
	assert.equal(match('1304005111059')[2], '04');
	assert.equal(match('1304005111059')[3], '005');
	assert.equal(match('1304005111059')[4], '11');
	assert.equal(match('1304005111059')[5], '105');
	assert.equal(match('1304005111059')[6], '9');
});

it('should return null if match is not found', function () {
	assert.equal(match('3213973392147'), null);
});
