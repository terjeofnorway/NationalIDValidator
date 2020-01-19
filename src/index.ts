import * as Validation from './validation/';
import * as Retreval from './Retreval/';
import * as Types from './types';

const isValid: Types.IsValid = Validation.isValid;
const getTypeFromID: Types.GetTypeFromID = Retreval.getTypeFromID;
const getGenderFromID: Types.GetGenderFromID = Retreval.getGenderFromID;
const getDateFromID: Types.GetDateFromID = Retreval.getDateFromID;

export { isValid, getTypeFromID, getGenderFromID, getDateFromID };
