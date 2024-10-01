import { Item } from './item.js'
/**
 * Manages VAT calculation and total price of items.
 */
export class VatCalculator {
  /**
   * Creates an instance of VatCalculator.
   *
   * @param {object} vatRates - Object containing VAT rates.
   */
  constructor (vatRates) {
    this.items = []
    this.vatRates = vatRates
  }

  /**
   * Add an item to the calculator.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {number} vatRateKey - Key of the VAT rate.
   * @param {number} quantity - Quantity of the item.
   */
  addItem (name, price, vatRateKey, quantity = 1) {
    const item = new Item(name, price, vatRateKey, quantity, this.vatRates)
    this.items.push(item)
  }

  /**
   * Method to calculate VAT for each item.
   *
   * @param {Item} item - item object.
   * @returns {number} - VAT for the item.
   */
  CalculateVATForItem (item) {
    return item.getPrice() * item.getVatRate() * item.getQuantity()
  }

  /**
   * Calculate total price including VAT for a single item.
   *
   * @returns {object} - Array of objects containing name, price, VAT rate, quantity, VAT, and total.
   */
  CalculateTotalPrice () {
    return this.items.map(item => ({
      name: item.getName(),
      price: item.getPrice(),
      VatRate: item.getVatRate(),
      quantity: item.getQuantity(),
      VAT: this.CalculateVATForItem(item),
      total: item.getPrice() * item.getQuantity() + this.CalculateVATForItem(item)
    }))
  }

  /**
   * Get total price including VAT for all items.
   *
   * @returns {number} - Total price including VAT.
   */
  getTotalWithVAT () {
    return this.CalculateTotalPrice().reduce((total, item) => total + item.total, 0)
  }
}
