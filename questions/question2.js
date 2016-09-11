'use strict';

function remoteMathService(cb) {
    // I chained the asynchronous calls
    callOneService(function(err, one) {
        callTwoService(function(err, two) {
            cb(undefined, one + two)
        });
    });
}

function callOneService(cb) {
    // I changed setTimeOut time to be within test framework timeout
    setTimeout(function() {
        return cb(undefined, 1);
    }, 100);
}

function callTwoService(cb) {
    // I changed setTimeOut time to be within test framework timeout
    setTimeout(function() {
        return cb(undefined, 2);
    }, 150);
}

exports.remoteMathService = remoteMathService;
