import { getGenderFromID } from '../src/retreval';
import { Genders } from '../src/types';

describe('getGenderFromID', () => {
  test('it returns MALE when gender digit is odd', () => {
    const ID = '12111812118';
    expect(getGenderFromID(ID)).toBe(Genders.MALE);
  });

  test('it returns FEMALE when gender digit is even', () => {
    const ID = '30101632004';
    expect(getGenderFromID(ID)).toBe(Genders.FEMALE);
  });

  test('it throws and error when ID is empty', () => {
    const ID = undefined;
    expect(getGenderFromID.bind(ID)).toThrow();
  });
});
