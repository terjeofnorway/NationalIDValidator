import { Validation } from "../src/Validation";

var expect = require('chai').expect;

describe('Test Validation class', () => {
  it('returns false if value is empty', () => {
    const mockID = '';
    const validation = new Validation(mockID);
    expect(validation.checkValidity()).to.equal(false);
  })
});