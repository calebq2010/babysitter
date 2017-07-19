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

module.exports = {
    startTimeToBedTime: startTimeToBedTime,
    bedTimeToMidNight: bedTimeToMidNight
};