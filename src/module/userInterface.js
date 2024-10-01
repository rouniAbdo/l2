import { VatCalculator } from './vatCalculator.js'
import { UpdateItem } from './updateItem.js'
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
    this.updateItem = new UpdateItem()
  }

  /**
   * Add an item to the VAT calculator.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {string} vatRateName - VAT rate name.
   * @param {number} quantity - Quantity of the item.
   * @returns {string} - Success message.
   */
  addItemToCalculator (name, price, vatRateName, quantity = 1) {
    try {
      this.vatCalculator.addItem(name, price, vatRateName, quantity)
      return this.successNotification(name, price, vatRateName, quantity)
    } catch (error) {
      return this.errorMessage(error)
    }
  }

  /**
   * Generate a success message.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {number} vatRateName - VAT rate name.
   * @param {number} quantity - Quantity of the item.
   * @returns {string} - Success message.
   */
  successNotification (name, price, vatRateName, quantity) {
    return `Added ${quantity} units of ${name} at price ${price} each with VAT rate ${vatRateName}`
  }

  /**
   * Generate an error message.
   *
   * @param {Error} error - Error object.
   * @returns {string} - Error message.
   */
  errorMessage (error) {
    return error.message
  }

  /**
   * Calculate VAT for all items.
   *
   * @returns {Array} - Array of VAT calculations for all items.
   */
  calculateVATForAllItems () {
    return this.vatCalculator.CalculateTotalPrice()
  }

  /**
   * Get total price including VAT for all items.
   *
   * @returns {number} - Total price including VAT.
   */
  getTotalPrice () {
    return this.vatCalculator.getTotalWithVAT()
  }

  /**
   * Update item details.
   *
   * @param {string} itemName - Name of the item.
   * @param {object} updates - Object containing new values.
   * @returns {string} - Success message or error message.
   */
  updateItemDetails (itemName, updates) {
    try {
      const itemToUpdate = this.vatCalculator.items.find(item => item.getName() === itemName)
      if (!itemToUpdate) {
        throw new Error('Item not found')
      }
      this.updateItem.update(itemToUpdate, updates, this.vatCalculator.vatRates)
      return this.successNotification(itemToUpdate.getName(), itemToUpdate.getPrice(), itemToUpdate.getVatRate(), itemToUpdate.getQuantity())
    } catch (error) {
      return error.message
    }
  }
}
