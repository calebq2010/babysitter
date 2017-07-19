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

    it('should return total sum from midnight to end of job', function() {
        expect(methods.midNightToEnd(4)).to.equal(64.00);
    });

    it('should return total sum for a full day', function() {
        expect(methods.fullDay(4, 3, 4)).to.equal(136.00);
    });


});