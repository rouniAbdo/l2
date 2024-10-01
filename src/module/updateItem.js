import { Item } from './item.js'
/**
 * UpdateItem class to update VAT, name amd price of an item.
 */
export class UpdateItem {
  /**
   * Update an item with new values.
   *
   * @param {Item} item - item object.
   * @param {object} updates - Object containing new values.
   * @param {object} vatRates - Object containing VAT rates.
   */
  update (item, updates, vatRates) {
    for (const [key, value] of Object.entries(updates)) {
      switch (key) {
        case 'price':
          item.price = value
          break
        case 'vat':
          item.vatRate = vatRates[value]
          break
        case 'quantity':
          item.quantity = value
          break
        case 'name':
          item.name = value
          break
        default:
          throw new Error(`Invalid key: ${key}`)
      }
    }
  }
}
