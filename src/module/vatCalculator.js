import Item from './item'
import VatRateManager from './VatRateManager'
/**
 *
 */
export class VatCalculator {
  /**
   * Constructor of the VatCalculator class.
   *
   * @param {string} name - name of the item.
   * @param {number} price - price of the item.
   * @param {object}vatRate - VAT rate.
   */
  constructor (name, price, vatRate) {
    this.item = []
    this.vatRateManager = new VatRateManager(vatRate)
  }

  /**
   * Method to add item to the list.
   *
   * @param {string} name - name of the item.
   * @param {number} price - price of the item.
   * @param {string} vatRate - VAT rate of the item.
   * @returns {object} - item object without VAT.
   */
  addItem (name, price, vatRate) {
    return this.item.push(new Item(name, price, vatRate))
  }
}
