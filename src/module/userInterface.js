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

  /**
   * Add an item to the VAT calculator.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {string} vatRateName - VAT rate name.
   * @param {number} quantity - Quantity of the item.
   */
  addItemToCalculator (name, price, vatRateName, quantity = 1) {
    try {
      this.vatCalculator.addItem(name, price, vatRateName, quantity)
    } catch (error) {
      throw new Error(error)
    }
  }
}
