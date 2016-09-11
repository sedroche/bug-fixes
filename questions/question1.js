'use strict';
// I defined doThing to error
function doThing(callback) {
    callback({});
}

function foo(callback) {
    doThing(function(err, res) {
        if (err) {
            // I added a return statement to stop execution flow
            return callback(err);
        }

        callback(null, res);
    });
}


exports.foo = foo;
