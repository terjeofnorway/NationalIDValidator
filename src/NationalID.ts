import { IsValidType } from './nationalID.types';
import { Validation } from './Validation';

class NatID {
  public static isValid: IsValidType = (id: string) => {
    const validation = new Validation(id);
    return validation.checkValidity();
  }
}

export default NatID;
