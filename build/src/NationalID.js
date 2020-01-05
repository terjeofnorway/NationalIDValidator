"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation_1 = require("./Validation");
var NatID = (function () {
    function NatID() {
    }
    NatID.isValid = function (id) {
        var validation = new Validation_1.Validation(id);
        return validation.checkValidity();
    };
    return NatID;
}());
exports.default = NatID;
