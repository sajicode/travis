let sinon = require('sinon'),

    chai = require('chai'),

    expect = chai.expect,

    should = chai.should(),=

    logger = require("./logger.js"),

    Greeting = require("./app.js");

describe("Greeting App", function(){

    xit("should test if Greetings exist", function() {

        var app = new Greeting();

        expect(app).to.be.an("object");

    });

    it("should test if a name argument was passed", function() {

        var expectedName = "Jack";

        var app = new Greeting(expectedName);

        expect(app.name).to.equal(expectedName);
    });

    it("should test if a default name was passed", function() {

        var app = new Greeting();

        expect(app.name).to.not.equal(undefined);

    });

    it("should test if Greeting was called", function() {

        var app = new Greeting("Jack");         //app holds a new instance of Greeting

        var greetSpy = sinon.spy(app, "greet");     //greet should be a property(method) under Greeting 

        app.greet();            //this method(function) is called once

        expect(greetSpy.calledOnce).to.be.true;         //checks if method was called once
    });

    // it("should test if the method greet returns the expected string when a name is not passed", function() {

    //     let expectedMessage = "Hello, Jane",
    //         app             = new Greeting(),
    //         expectedResult;

    //     expectedResult = app.greet("Hello");
    //     console.log(expectedResult)

    //     expect(expectedResult).to.equal(expectedMessage)
    // });

    describe("#greet", function() {

        var log, error, sandbox, play;

        before(function() {

            play = new Greeting("jude"),
            sandbox = sinon.sandbox.create(),
            log = sandbox.stub(logger, "log"),
            error = sandbox.stub(logger, "error");

        })

        afterEach(function() {

            log.reset();
            error.reset();
            sinon.sandbox.reset();

        })

        it("should pass a greeting message", function() {

            var expectedMessage = 'Good day and how are you jude';

            msg = "Good day and how are you";

            play.greet(msg);

            sinon.assert.calledOnce(log);
            sinon.assert.calledWithExactly(log, expectedMessage);
            sinon.assert.notCalled(error);

        })

        it("should throw an error if msg is not passed", function() {

            var errMessage = "no message was passed";

            play.greet();

            sinon.assert.calledOnce(error);
            sinon.assert.calledWithExactly(error, errMessage);
            sinon.assert.notCalled(log);
        })
    })
    
    describe("#lateGreeting", function() {

        it("should check if greet was called", function(done) {

            var play = new Greeting("jide"),
                msg  = "Good day and how are you",
                greetSpy = sinon.spy(play, "greet");

            play.lateGreeting(msg, function(err, val) {
                
                sinon.assert.calledOnce(greetSpy);

                done();

            });

        });

        it("should check if a msg was passed to lateGreeting", function(done) {

            var play = new Greeting("jide");

            play.lateGreeting(null, function (err, val) {
                
                expect(err).to.be.an.instanceOf(Error);

                done();
            })
        })
    })
});