define(function() {
    var controller = require("com/konymp/E2ECard/userE2ECardController");
    var actions = require("com/konymp/E2ECard/E2ECardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});