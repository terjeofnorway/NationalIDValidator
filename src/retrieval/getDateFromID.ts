import { GetDateFromID, GetCenturyFromIndividDigits } from '../types';

/** Determines the century based on individDigits
 * @param { string } individDigits 3 digit string representing the invidid.
 * @return { number } The century
 *
 * 000–499 for people born 1900–1999.
 * 500–749 for people born 1854–1899.
 * 500–999 for people born 2000–2039.
 * 900–999 for people born 1940–1999.
 *
 */
const getCenturyFromIndividDigits: GetCenturyFromIndividDigits = (ID: string): number => {
  const intDigits = parseInt(ID.substr(6, 3), 10);

  if (intDigits >= 500 && intDigits <= 749) {
    const year = parseInt(ID.substr(4, 2), 10);
    return year >= 54 ? 1800 : 2000;
  }

  if (intDigits >= 500 && intDigits <= 999) {
    return 2000;
  }

  return 1900;
};

/** Retrieves the date from the ID, taking into account the correct centry
 * based on rules given by the individ digits in the ID.
 *
 */
const getDateFromID: GetDateFromID = (ID: string) => {
  const day: string = ID.substr(0, 2);
  const month: string = ID.substr(2, 2);
  const year: string = ID.substr(4, 2);

  const century: number = getCenturyFromIndividDigits(ID);
  const fullYear: number = century + parseInt(year, 10);

  return new Date(`${fullYear}-${month}-${day}`);
};

export { getDateFromID, getCenturyFromIndividDigits };
