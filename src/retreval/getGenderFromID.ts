import { Genders, GetGenderFromID } from '../types';

const getGenderFromID: GetGenderFromID = (ID: string) => {
  if (!ID) {
    throw new Error('ID cannot be undefined');
  }
  const genderDigit = parseInt(ID[8], 10);
  return genderDigit % 2 === 0 ? Genders.FEMALE : Genders.MALE;
};

export { getGenderFromID };
