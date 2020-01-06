import { IValidation } from './validation.interface';

type CalculateControl = (c: Controls) => number;
type CheckValidity = () => boolean;

enum Controls {
  CONTROL1,
  CONTROL2,
}

class Validation implements IValidation {
  constructor(private id: string) {};

  controlMultipliers: {[key in Controls]: Array<number>} = {
    [Controls.CONTROL1]: [3,7,6,1,8,9,4,5,2],
    [Controls.CONTROL2]: [5,4,3,2,7,6,5,4,3,2],
  }

  /** Calculates the control number 1 or 2, depending on argument.
   * @param {number} c The Control number position to calculate
   * @returns {number} The control number
   */
  private calculateControl: CalculateControl = (c: Controls): number => {
    const multipliers: Array<number> = this.controlMultipliers[c];

    let sum = 0;
    for(let i = 0 ; i < multipliers.length ; i++) {
      const digit = parseInt(this.id[i], 10);
      sum += digit * multipliers[i];
    }

    return 11 - (sum % 11);
  }

  /** Checks the validity of the ID as given to the initial constructor
   * @returns {boolean}
   */
  checkValidity: CheckValidity = (): boolean => {
    if (this.id === null || this.id === undefined || this.id === '') { throw new Error('ID cannot be null, empty string or undefined.')}

    const c1: number = this.calculateControl(Controls.CONTROL1);
    const c2: number = this.calculateControl(Controls.CONTROL2);
    const k1: number = parseInt(this.id[9], 10);
    const k2: number = parseInt(this.id[10], 10);

    return c1 === k1 && c2 === k2;
  }
}

export { Validation };
