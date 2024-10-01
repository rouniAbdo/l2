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
      throw new Error('VAT rate must be a number and greater than 0')
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

  /**
   * Update quantity of the item.
   *
   * @param {object} item - Item object.
   * @param {number} newQuantity - New quantity of the item.
   */
  updateQuantity (item, newQuantity) {
    if (typeof newQuantity !== 'number' || newQuantity <= 0) {
      throw new Error('Quantity should be a positive number greater than 0')
    }
    item.setQuantity(newQuantity)
  }

  /**
   * Update name of the item.
   *
   * @param {object} item - Item object.
   * @param {string} newName - New name of
   */
  updateName (item, newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new Error('Name should be a string')
    }
    item.setName(newName)
  }
}
