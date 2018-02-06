function Sandbox(core) {        //using dependency injections

    this.core = core;
}

Sandbox.prototype = {

    listen: function(evt, module_id) {
        this.core.registerEvents(evt, module_id);
    },

    notify: function(evt) {

        this.core.triggerEvents(evt);
    }
}

module.exports = Sandbox;