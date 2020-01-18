import { Genders, GetGenderFromID } from '../types';

/** Reads the ID and determines the gender of the ID holder based on 9th digit in ID string.
 * @param { ID } string The 11 digit ID to read.
 * @returns { string } 'FEMALE' || 'MALE'
 */
const getGenderFromID: GetGenderFromID = (ID: string): Genders => {
  if (!ID) {
    throw new Error('ID cannot be undefined');
  }
  const genderDigit = parseInt(ID[8], 10);
  return genderDigit % 2 === 0 ? Genders.FEMALE : Genders.MALE;
};

export { getGenderFromID };
