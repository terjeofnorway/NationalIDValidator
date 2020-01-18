import * as Validation from './validation/';
import { GetTypeOfID, IsValid } from './types';

const isValid: IsValid = Validation.isValid;
const getTypeOfID: GetTypeOfID = Validation.getTypeOfID;

export { isValid, getTypeOfID };
