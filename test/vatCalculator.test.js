import { VatCalculator } from '../src/module/vatCalculator'
import { Item } from '../src/module/item'
describe('VatCalculator', () => {
  const vatRates = { standard: 0.25, reduced: 0.12 }
  let vatCalculator
  beforeEach(() => {
    vatCalculator = new VatCalculator(vatRates)
  })
  test('should add an Item to the list', () => {
    vatCalculator.addItem('item1', 100, 'standard', 1, vatRates)
    expect(vatCalculator.items.length).toBe(1)
    expect(vatCalculator.items[0].getName()).toBe('item1')
    expect(vatCalculator.items[0].getPrice()).toBe(100)
    expect(vatCalculator.items[0].getVatRate()).toBe(0.25)
    expect(vatCalculator.items[0].getQuantity()).toBe(1)
  })
  test('should calculate VAT for an item', () => {
    const item = new Item('item1', 100, 'standard', 1, vatRates)
    expect(vatCalculator.CalculateVATForItem(item)).toBe(25)
  })
})
