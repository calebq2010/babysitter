var babysitterCharge = function(hours) {
    var wages = 0;

    for (i = 0; i <= hours.length; i++) {

        if (i < 4) {
            wages += 12;
        }

    }

    return wages;

}

module.exports = babysitterCharge;