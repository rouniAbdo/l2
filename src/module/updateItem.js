import { Item } from './item.js'
/**
 * UpdateItem class to update VAT, name amd price of an item.
 */
export class UpdateItem {
  /**
   * Update vat of the item.
   *
   * @param {Item} item - Item object.
   * @param {number} newVat - New number of the item.
   */
  updateVat (item, newVat) {
    if (typeof newVat !== 'number' || newVat <= 0) {
      throw new Error('VAT rate must be a number and greater than or equal to 1')
    }
    item.setVat(newVat)
  }

  /**
   * Update price of the item.
   *
   * @param {object} item - Item object.
   * @param {number} newPrice - New price of the item.
   */
  updatePrice (item, newPrice) {
    if (typeof newPrice !== 'number') {
      throw new Error('Price should be a number')
    }
    item.setPrice(newPrice)
  }
}
