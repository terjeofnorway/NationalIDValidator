import { GetTypeFromID, IDTypes } from '../types';

/** Checks if the type of ID is FNUMBER (fødselsnummer) or DNUMBER (d-nummer)
 * @param { string } ID The ID to check.
 * @returns { string } 'FNUMBER' || 'DNUMBER'
 */
const getTypeFromID: GetTypeFromID = (id: string): IDTypes => {
  if (!id) {
    throw new Error('ID is undefined');
  }
  const firstDigit = parseInt(id[0], 10);
  return firstDigit > 3 ? IDTypes.DNUMBER : IDTypes.FNUMBER;
};

export { getTypeFromID };
