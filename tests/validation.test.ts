import { Validation } from '../src/Validation';

describe('Test Validation class', () => {
  test('it correctly validates a valid fnr', () => {
    const mockFnr = '06010732393';
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity()).toBe(true);
  });

  test('it correctly invalidates an invalid fnr', () => {
    const mockFnr = '12345678912';
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity()).toBe(false);
  });

  test('it correctly throws an error when fnr is null', () => {
    /* eslint-disable-next-line */
    const mockFnr: any = null;
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity).toThrow();
  });

  test('it correctly throws an error when fnr is undefined', () => {
    /* eslint-disable-next-line */
    const mockFnr: any = undefined;
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity).toThrow();
  });

  test('it correctly throws an error when fnr is empty', () => {
    const mockFnr = '';
    const validation: Validation = new Validation(mockFnr);
    expect(validation.checkValidity).toThrow();
  });
});
