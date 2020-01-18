import * as Validation from './validation/';
import * as Retreval from './Retreval/';
import * as Types from './types';

const isValid: Types.IsValid = Validation.isValid;
const getTypeOfID: Types.GetTypeOfID = Retreval.getTypeOfID;

export { isValid, getTypeOfID };
