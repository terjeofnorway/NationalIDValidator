"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation_1 = require("../src/Validation");
var expect = require('chai').expect;
describe('Test Validation class', function () {
    it('returns false if value is empty', function () {
        var mockID = '';
        var validation = new Validation_1.Validation(mockID);
        expect(validation.checkValidity()).to.equal(false);
    });
});
