import { getTypeFromID, IDTypes } from '../types';

const getTypeFromID: getTypeFromID = (id: string) => {
  if (!id) {
    throw new Error('ID is undefined');
  }
  const firstDigit = parseInt(id[0], 10);
  return firstDigit > 3 ? IDTypes.DNUMBER : IDTypes.FNUMBER;
};

export { getTypeFromID };
