/**
 * Item class to create an item object with name and price.
 */
export class Item {
  /**
   * Constructor of the Item class.
   *
   * @param {string} name - name of the item.
   * @param {number} price - price of the item.
   * @param {string} vatRateKey - VAT for the item.
   * @param {number} quantity - quantity of the item.
   * @param {object} vatRates - VAT rates.
   */
  constructor (name, price, vatRateKey, quantity = 1, vatRates) {
    this.name = name
    this.price = price
    this.vatRate = vatRates[vatRateKey]
    this.quantity = quantity
  }

  /**
   * Get name of the item.
   *
   * @returns {string} - name of the item.
   */
  getName () {
    if (!this.name) {
      throw new Error('Item name is empty.')
    }
    return this.name
  }

  /**
   * Get price of the item.
   *
   * @returns {number} - price of the item.
   */
  getPrice () {
    if (isNaN(this.price) || this.price < 0) {
      throw new Error('Item price is not a valid number.')
    }
    return this.price
  }

  /**
   * Get Vat of the item.
   *
   * @returns {number} - VAT of the item
   */
  getVatRate () {
    if (isNaN(this.vatRate)) {
      throw new Error('Item VAT is not a valid number.')
    }
    return this.vatRate
  }

  /**
   * Get quantity of the item.
   *
   * @returns {number} - quantity of the item
   */
  getQuantity () {
    if (isNaN(this.quantity)) {
      throw new Error('Item quantity is not a valid number.')
    }
    return this.quantity
  }

  /**
   * Set a new price of the item.
   *
   * @param { number } newPrice - new price of the item.
   */
  setPrice (newPrice) {
    if (typeof newPrice !== 'number') {
      throw new Error('Price should be a number')
    }
    this.price = newPrice
  }

  /**
   * Set a new quantity of the item.
   *
   * @param {number} newQuantity - new quantity of the item.
   */
  setQuantity (newQuantity) {
    if (typeof newQuantity !== 'number') {
      throw new Error('Quantity should be a number')
    }
    this.quantity = newQuantity
  }

  /**
   * Set a new name of the item.
   *
   * @param {string} newName - new name of the item.
   */
  setName (newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new Error('Name should be a string')
    }
    this.name = newName
  }

  /**
   * Set a new VAT rate using the VAT rate key.
   *
   * @param {object} vatRates - Object containing VAT rates.
   * @param {string} vatRateKey - Key of the VAT rate.
   */
  setVatRate (vatRates, vatRateKey) {
    if (!vatRates[vatRateKey]) {
      throw new Error('Invalid VAT rate key')
    }
    this.vatRate = vatRates[vatRateKey]
  }
}
