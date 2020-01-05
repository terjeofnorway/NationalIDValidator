"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation = (function () {
    function Validation(id) {
        var _this = this;
        this.id = id;
        this.checkValidity = function () {
            return _this.id.length > 0;
        };
    }
    ;
    return Validation;
}());
exports.Validation = Validation;
