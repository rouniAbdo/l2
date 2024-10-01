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
    this.setName(name)
    this.setPrice(price)
    this.setVatRate(vatRates, vatRateKey)
    this.setQuantity(quantity)
  }

  /**
   * Get name of the item.
   *
   * @returns {string} - name of the item.
   */
  getName () {
    if (typeof this.name !== 'string' || this.name.trim() === '') {
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
    if (typeof this.price !== 'number' || isNaN(this.price || this.price <= 0)) {
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
    if (typeof this.vatRate !== 'number' || isNaN(this.vatRate)) {
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
    if (typeof this.quantity !== 'number' || isNaN(this.quantity) || this.quantity <= 0) {
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
    if (typeof newPrice !== 'number' || isNaN(newPrice) || newPrice <= 0) {
      throw new Error('Item price is not a valid number.')
    }
    this.price = newPrice
  }

  /**
   * Set a new quantity of the item.
   *
   * @param {number} newQuantity - new quantity of the item.
   */
  setQuantity (newQuantity) {
    if (typeof newQuantity !== 'number' || isNaN(newQuantity) || newQuantity <= 0) {
      throw new Error('Item quantity is not a valid number.')
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
      throw new Error('Item name is empty.')
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
      throw new Error('Invalid VAT rate key.')
    }
    this.vatRate = vatRates[vatRateKey]
  }
}
