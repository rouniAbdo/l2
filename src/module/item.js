/**
 * Item class to create an item object with name and price.
 */
export class Item {
  /**
   * Constructor of the Item class.
   *
   * @param {string} name - name of the item.
   * @param {number} price - price of the item.
   * @param {number} vat - VAT for the item.
   * @param {number} quantity - quantity of the item.
   */
  constructor (name, price, vat, quantity = 1) {
    this.name = name
    this.price = price
    this.vat = vat
    this.quantity = quantity
  }

  /**
   * Get name of the item.
   *
   * @returns {string} - name of the item.
   */
  getName () {
    if (this.name === '' || this.name === undefined) {
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
    if (this.price === '' || isNaN(Number(this.price))) {
      throw new Error('Item price is not a valid number.')
    } else if (this.price < 0) {
      throw new Error('Item price is negative.')
    }
    this.price = Number(this.price)
    return this.price
  }

  /**
   * Get Vat of the item.
   *
   * @returns {number} - VAT of the item
   */
  getVat () {
    if (this.vat === '' || isNaN(Number(this.vat))) {
      throw new Error('Item VAT is not a valid number.')
    }
    this.vat = Number(this.vat)
    return this.vat
  }

  /**
   * Get quantity of the item.
   *
   * @returns {number} - quantity of the item
   */
  getQuantity () {
    if (this.quantity === '' || isNaN(Number(this.quantity))) {
      throw new Error('Item quantity is not a valid number.')
    }
    this.quantity = Number(this.quantity)
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
   * Set a new vat of the item.
   *
   * @param {number} newVat - new vat of the item.
   */
  setVat (newVat) {
    if (typeof newVat !== 'number') {
      throw new Error('Vat should be a number')
    }
    this.vat = newVat
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
}
