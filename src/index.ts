import * as Validation from './validation/';
import * as Retreval from './Retreval/';
import * as Types from './types';

const isValid: Types.IsValid = Validation.isValid;
const getTypeFromID: Types.getTypeFromID = Retreval.getTypeFromID;

export { isValid, getTypeFromID };
