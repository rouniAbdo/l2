/**
 * Item class to create an item object with name and price.
 */
export class Item {
  /**
   * Constructor of the Item class.
   *
   * @param {string} name - name of the item.
   * @param {number} price - price of the item.
   */
  constructor (name, price) {
    this.name = name
    this.price = price
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
}
