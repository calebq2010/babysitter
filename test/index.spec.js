var expect = require('chai').expect;
var method = require('../src/index');

describe('canary test', function() {
    it('should return true if everything is ok', function() {
        expect(true).equal(true);
    });
});

describe('babysitter kata', function() {
    it('should return total sum from start time to bed time', function() {
        expect(method('5:00PM', '9:00PM')).to.equal(48.00);
    });
});