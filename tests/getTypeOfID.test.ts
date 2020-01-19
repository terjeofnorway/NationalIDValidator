import { getTypeFromID } from '../src/retrieval/';
import { IDTypes } from '../src/types';

describe('getTypeFromID', () => {
  test('it returns the correct type for FNUMBER (norwegian fødselsnummer)', () => {
    const ID = '25040316208';
    expect(getTypeFromID(ID)).toBe(IDTypes.FNUMBER);
  });

  test('it returns the correct type for DNUMBER (norwegian fødselsnummer)', () => {
    const ID = '66047943514';
    expect(getTypeFromID(ID)).toBe(IDTypes.DNUMBER);
  });

  test('it throws an exception if ID is undefined', () => {
    const ID = undefined;

    expect(getTypeFromID.bind(ID)).toThrow();
  });
});
