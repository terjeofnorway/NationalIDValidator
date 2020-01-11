import { isValid } from '../src/validation/validation';

describe('Test Validation class', () => {
  test('it correctly validates a valid fnr', () => {
    const mockFnr = '06010732393';
    expect(isValid(mockFnr)).toBe(true);
  });

  test('it correctly invalidates an invalid fnr', () => {
    const mockFnr = '12345678912';
    expect(isValid(mockFnr)).toBe(false);
  });

  test('it correctly throws an error when fnr is null', () => {
    /* eslint-disable-next-line */
    const mockFnr: any = null;
    expect(isValid.bind(mockFnr)).toThrow();
  });

  test('it correctly throws an error when fnr is undefined', () => {
    /* eslint-disable-next-line */
    const mockFnr: any = undefined;
    expect(isValid.bind(mockFnr)).toThrow();
  });

  test('it correctly throws an error when fnr is empty', () => {
    const mockFnr = '';
    expect(isValid.bind(mockFnr)).toThrow();
  });
});
