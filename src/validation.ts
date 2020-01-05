import { IValidation } from './validation.interface';

class Validation implements IValidation {
  constructor(private id: string) {};

  checkValidity = () => {
    return this.id.length > 0;
  }
}

export { Validation };
