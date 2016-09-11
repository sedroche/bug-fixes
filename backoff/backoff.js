'use strict';

// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully

var counter = 0;

var db = {
    connect: function(cb) {
        console.log('connection attempt', counter + 1);
        if (counter < 9) {
            counter++;
            return cb('db not ready yet');
        }

        return cb();
    }
};

var connectCallback = function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('successfully connected!');
};

function exponentialBackoff(fn, max, delay, callback) {
    fn();
    
    if (max > 1) {
        return setTimeout(function() {
            exponentialBackoff(fn, --max, delay * 2);
        }, delay);
    }
}

exponentialBackoff(db.connect.bind(null, connectCallback), 10, 10);
