define(function() {
    var controller = require("com/samples/smsMessage/usersmsMessageController");
    var actions = require("com/samples/smsMessage/smsMessageControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});