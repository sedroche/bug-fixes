# bug-fixes

##To run tests

1. `$ npm install`
2. `$ npm run test`

##To run exponential backoff

`$ node backoff/backoff.js`

###[Question 1](https://github.com/sedroche/bug-fixes/blob/master/questions/question1.js)

The issue here was that if `doThing` erred, then the callback was called twice as the function did not return.
I implemented `doThing` to err and I added the `return` statement.
I have implemented a test to check that the callback is only called once.

###[Question 2](https://github.com/sedroche/bug-fixes/blob/master/questions/question2.js)

The issue here was that `callOneService` and `callTwoService` are asynchronous calls and were not called in sequence.
I changed the code to call the callbacks in sequence and have created a test

###[Question 3](https://github.com/sedroche/bug-fixes/blob/master/backoff/backoff.js)

I have implemented the exponentialBack function.
