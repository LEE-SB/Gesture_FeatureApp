define(function() {
    var controller = require("com/konymp/CardNoPeek/userCardNoPeekController");
    var actions = require("com/konymp/CardNoPeek/CardNoPeekControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});