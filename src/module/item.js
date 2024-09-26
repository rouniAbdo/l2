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
    return this.name
  }

  /**
   * Get price of the item.
   *
   * @returns {number} - price of the item.
   */
  getPrice () {
    return this.price
  }
}
