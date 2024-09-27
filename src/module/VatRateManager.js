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
    if (typeof vateRates !== 'object' || vateRates === null) {
      throw new Error('VAT rates are not an object.')
    }
    this.vateRates = vateRates
  }

  /**
   * Get VAT rate by name.
   *
   * @param {object} rateName - VAT rate name.
   * @returns {number} - VAT rate.
   */
  getRate (rateName) {
    const rate = this.vateRates[rateName]
    if (!Object.keys(this.vateRates).includes(rateName)) {
      throw new Error('Wrong VAT rate name.')
    }
    return rate
  }
}
