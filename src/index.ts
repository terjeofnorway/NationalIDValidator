import * as Validation from './validation/';
import * as Retrieval from './retrieval';
import * as Types from './types';

const isValid: Types.IsValid = Validation.isValid;
const getTypeFromID: Types.GetTypeFromID = Retrieval.getTypeFromID;
const getGenderFromID: Types.GetGenderFromID = Retrieval.getGenderFromID;
const getDateFromID: Types.GetDateFromID = Retrieval.getDateFromID;

export { isValid, getTypeFromID, getGenderFromID, getDateFromID };
