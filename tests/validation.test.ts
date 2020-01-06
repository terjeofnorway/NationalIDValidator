import { Validation } from "../src/Validation";

describe('Test Validation class', () => {
  test('returns false if value is empty', () => {
    const mockID = '';
    const validation = new Validation(mockID);
    expect(validation.checkValidity()).toBe(false);
  })
});
