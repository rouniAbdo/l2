import { Item } from './item.js'
import { VatRateManager } from './VatRateManager.js'
/**
 *
 */
export class VatCalculator {
  /**
   * Constructor of the VatCalculator class.
   *
   * @param {object}vatRates - VAT rate.
   */
  constructor (vatRates) {
    this.item = []
    this.vatRateManager = new VatRateManager(vatRates)
  }

  /**
   * Method to add item to the list.
   *
   * @param {string} name - name of the item.
   * @param {number} price - price of the item.
   */
  addItem (name, price) {
    const items = new Item(name, price)
    this.item.push(items)
  }

  /**
   * Method to calculate VAT for each item.
   *
   * @param {object} rateName - VAT rate name.
   * @returns {object} - item object with VAT.
   */
  CalculateVAT (rateName) {
    const rate = this.vatRateManager.getRate(rateName)
    return this.item.map(item => ({
      name: item.getName(),
      price: item.getPrice(),
      vat: item.getPrice() * rate / 100,
      priceWithVat: item.getPrice() + item.getPrice() * rate / 100
    })
    )
  }
}
