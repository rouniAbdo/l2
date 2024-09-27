import { VatCalculator } from './vatCalculator'
/**
 * UserInterface class.
 */
export class UserInterface {
  /**
   * Constructor of the UserInterface class.
   *
   * @param {object} VatRates - VAT rates.
   */
  constructor (VatRates) {
    this.vatCalculator = new VatCalculator(VatRates)
  }
}
