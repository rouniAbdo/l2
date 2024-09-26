/**
 * VatRateManager class.
 */
export class VatRateManager {
  /**
   * Constructor of the VatRateManager class.
   *
   * @param {object}vateRates - VAT rates.
   */
  constructor (vateRates) {
    this.vateRates = vateRates
  }

  /**
   * Get VAT rate by name.
   *
   * @param {string} rateName - VAT rate name.
   * @returns {number} - VAT rate.
   */
  getRate (rateName) {
    if (!Object.keys(this.vateRates).includes(rateName)) {
      throw new Error('Wrong VAT rate name.')
    }
    return this.vateRates(rateName)
  }
}
