import { VATManager } from '../src/module/vatManager'
describe('VATManager', () => {
  const vatRates = { standard: 0.25, reduced: 0.12 }
  let vatManager
  beforeEach(() => {
    vatManager = new VATManager(vatRates)
  })
  test('should add an Item and return success message', () => {
    const result = vatManager.addItemToCalculator('item1', 100, 'standard', 1)
    expect(result).toBe('Added 1 units of item1 at price 100 each with VAT rate standard')
  })
  test('should return an error message', () => {
    const result = vatManager.addItemToCalculator('item1', '', 'standard', 1)
    expect(result).toBe('Item price is not a valid number.')
  })
  test('should get total price including VAT', () => {
    vatManager.addItemToCalculator('item1', 100, 'standard', 1)
    vatManager.addItemToCalculator('item2', 100, 'reduced', 1)
    expect(vatManager.getTotalPrice()).toBe(237)
  })
  test('should update item details', () => {
    vatManager.addItemToCalculator('item1', 100, 'standard', 1)
    const message = vatManager.updateItemDetails('item1', { price: 150, quantity: 2, vat: 'standard', name: 'item2' })

    expect(vatManager.vatCalculator.items[0].getPrice()).toBe(150)
    expect(vatManager.vatCalculator.items[0].getQuantity()).toBe(2)
    expect(vatManager.vatCalculator.items[0].getVatRate()).toBe(0.25)
    expect(vatManager.vatCalculator.items[0].getName()).toBe('item2')
    expect(message).toBe('Added 2 units of item2 at price 150 each with VAT rate 0.25')
  })
})
