import { getDateFromID } from '../src/retrieval';
import { getCenturyFromIndividDigits } from '../src/retrieval/getDateFromID';

describe('getCentury', () => {
  test('It returns 2000 for people with individ digits 500-999', () => {
    const mock = '23010770378';
    const expected = 2000;
    expect(getCenturyFromIndividDigits(mock)).toEqual(expected);
  });

  test('It returns 1800 for people with individ digits 500-999', () => {
    const mock = '27017071683';
    const expected = 1800;
    expect(getCenturyFromIndividDigits(mock)).toEqual(expected);
  });

  test('It returns 1900 for people with individ digits 000-499', () => {
    const mock = '01047941233';
    const expected = 1900;
    expect(getCenturyFromIndividDigits(mock)).toEqual(expected);
  });
});

describe('getDateFromID', () => {
  test('It correctly retrieves the date from a person born in 20th century', () => {
    const mockID = '31031222462';
    const expected = new Date('1912-03-31');
    expect(getDateFromID(mockID)).toEqual(expected);
  });

  test('It correctly retrieves the date from a person born in 21st century', () => {
    const mockID = '28080572524';
    const expected = new Date('2005-08-28');
    expect(getDateFromID(mockID)).toEqual(expected);
  });
});
