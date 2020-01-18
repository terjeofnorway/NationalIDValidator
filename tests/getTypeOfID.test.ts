import { getTypeOfID } from '../src/validation/';
import { IDTypes } from '../src/types';

describe('getTypeOfID', () => {
  test('it returns the correct type for FNUMBER (norwegian fødselsnummer)', () => {
    const ID = '26047943514';
    expect(getTypeOfID(ID)).toBe(IDTypes.FNUMBER);
  });

  test('it returns the correct type for DNUMBER (norwegian fødselsnummer)', () => {
    const ID = '66047943514';
    expect(getTypeOfID(ID)).toBe(IDTypes.DNUMBER);
  });

  test('it throws an exception if ID is undefined', () => {
    const ID = undefined;

    expect(getTypeOfID.bind(ID)).toThrow();
  });
});
