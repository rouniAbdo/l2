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

  test('should return the reduced VAT rate', () => {
    const item = new Item('item2', 150, 'reduced', 2, vatRates)
    expect(item.getVatRate()).toBe(0.12)
  })

  test.each([
    ['', 100, 'standard', 1, 'Item name is empty.'],
    ['item1', '', 'standard', 1, 'Item price is not a valid number.'],
    ['item1', 100, 'invalid', 1, 'Invalid VAT rate key.'],
    ['item1', 100, 'standard', 'invalid', 'Item quantity is not a valid number.']
  ])(
    'should throw an error for invalid input',
    (name, price, vat, quantity, expectedError) => {
      expect(() => new Item(name, price, vat, quantity, vatRates)).toThrow(expectedError)
    }
  )

  test('should throw an error if quantity is less than 1', () => {
    expect(() => new Item('item1', 100, 'standard', 0, vatRates)).toThrow('Item quantity is not a valid number.')
  })

  test('should throw an error if price is negative', () => {
    expect(() => new Item('item1', 0, 'standard', 1, vatRates)).toThrow('Item price is not a valid number.')
  })
})
