var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

var expect = chai.expect;
var questionOne = require('../questions/question1');
var questionTwo = require('../questions/question2');

describe('Example questions tests', () => {

    it('Should only call the function once', (done) => {

        var spy = chai.spy();
        questionOne.foo(spy);

        expect(spy).to.have.been.called.once;

        done();
    });

    it('Should return a value of 3', (done) => {

        questionTwo.remoteMathService(function (err, result) {
            expect(result).to.equal(3);

            done();
        });

    });
});
