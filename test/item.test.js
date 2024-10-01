import { Item } from '../src/module/item.js'
describe('Item', () => {
  const vatRates = { standard: 0.25, reduced: 0.12 }
  test('should create an Item with valid values', () => {
    const item = new Item('item1', 100, 'standard', 1, vatRates)
    expect(item.getName()).toBe('item1')
    expect(item.getPrice()).toBe(100)
    expect(item.getVatRate()).toBe(0.25)
    expect(item.getQuantity()).toBe(1)
  })
  test('should throw an error if name is empty', () => {
    expect(() => new Item('', 100, 'standard', 1, vatRates)).toThrow('Item name is empty.')
  })
})
