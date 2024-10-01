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
   * Get the VAT rate.
   *
   * @param {number} rate - VAT rate.
   * @returns {number} - VAT rate.
   */
  getRate (rate) {
    if (typeof rate !== 'number' || rate <= 0) {
      throw new Error('VAT rate must be a number and greater than or equal to 1')
    }
    return rate
  }

  /**
   * Add an item to the calculator.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {number} vatRate - VAT rate.
   * @param {number} quantity - Quantity of the item.
   */
  addItem (name, price, vatRate, quantity = 1) {
    const item = new Item(name, price, vatRate, quantity)
    this.items.push(item)
  }

  /**
   * Method to calculate VAT for each item.
   *
   * @param {Item} item - item object.
   * @returns {number} - VAT for the item.
   */
  CalculateVATForItem (item) {
    return item.getPrice() * item.getVat() * item.getQuantity() / 100
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
      VatRate: item.getVat(),
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
