var startTimeToBedTime = function(hours) {
    var wages = 0,
        rate = 12;

    wages = hours * rate;

    return wages;

}

var bedTimeToMidNight = function(hours) {
    var wages = 0,
        rate = 8;

    wages = hours * rate;

    return wages;
}

var midNightToEnd = function(hours) {
    var wages = 0,
        rate = 16;

    wages = hours * rate;

    return wages;
}

var fullDay = function(startBed, bedMid, midEnd) {
    var startToBed = startTimeToBedTime(startBed),
        bedToMid = bedTimeToMidNight(bedMid),
        midToEnd = midNightToEnd(midEnd);

    return startToBed + bedToMid + midToEnd;



}

module.exports = {
    startTimeToBedTime: startTimeToBedTime,
    bedTimeToMidNight: bedTimeToMidNight,
    midNightToEnd: midNightToEnd,
    fullDay: fullDay
};