var expect = require('chai').expect;
var methods = require('../src/index');

describe('canary test', function() {
    it('should return true if everything is ok', function() {
        expect(true).equal(true);
    });
});

describe('babysitter kata', function() {
    it('should return total sum from start time to bed time', function() {
        expect(methods.startTimeToBedTime(4)).to.equal(48.00);
    });

    it('should return total sum from bed time to midnight', function() {
        expect(methods.bedTimeToMidNight(3)).to.equal(24.00);
    });
});