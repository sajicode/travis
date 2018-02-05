var logger = require("./logger.js");

function Greeting(name) {

    this.name = name || "Jane";

}

Greeting.prototype.greet = function(msg) {

   if(!msg) {

        logger.error("no message was passed");

        return;
   }

    logger.log(msg + " " + this.name);
};

Greeting.prototype.lateGreeting = function (msg, cb) {

    var that = this;
    
    setTimeout(function() {

        try{

            cb(null, that.greet(msg))

        } catch(err) {

            cb(err)
        }
    }, 1000);
};

module.exports = Greeting;