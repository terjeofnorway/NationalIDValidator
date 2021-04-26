import { IsValid } from '../types';

type CalculateControl = (c: Controls) => number;

enum Controls {
  CONTROL1,
  CONTROL2,
}

/** Checks if an ID is valid!
 * @param { string } ID The ID to check
 * @returns { boolean } Wether the ID is valid or not.
 */
const isValid: IsValid = (ID: string): boolean => {
  const controlMultipliers: { [key in Controls]: Array<number> } = {
    [Controls.CONTROL1]: [3, 7, 6, 1, 8, 9, 4, 5, 2],
    [Controls.CONTROL2]: [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
  };

  /** Calculates the control number 1 or 2, depending on argument.
   * @param {number} c The Control number position to calculate
   * @returns {number} The control number
   */
  const calculateControl: CalculateControl = (c: Controls): number => {
    const multipliers: Array<number> = controlMultipliers[c];

    let sum = 0;
    for (let i = 0; i < multipliers.length; i++) {
      const digit = parseInt(ID[i], 10);
      sum += digit * multipliers[i];
    }

    return 11 - (sum % 11);
  };

  if (ID === null || ID === undefined || ID === '') {
    throw new Error('ID cannot be null, empty string or undefined.');
  }

  const c1: number = calculateControl(Controls.CONTROL1);
  const c2: number = calculateControl(Controls.CONTROL2);
  const k1: number = parseInt(ID[9], 10);
  const k2: number = parseInt(ID[10], 10);

  return c1 === k1 && c2 === k2;
};

export { isValid };
