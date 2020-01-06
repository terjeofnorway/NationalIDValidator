import { Validation } from "../src/Validation";

describe('Test Validation class', () => {
  test('it correctly validates a valid fnr', () => {
    const mockFnr: string = '06010732393';
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity()).toBe(true);
  })

  test('it correctly invalidates an invalid fnr', () => {
    const mockFnr: string = '12345678912';
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity()).toBe(false);
  })

  test('it correctly throws an error when fnr is null', () => {
    const mockFnr: any = null;
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity).toThrow();
  })

  test('it correctly throws an error when fnr is empty', () => {
    const mockFnr: any = '';
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity).toThrow();
  })
});
