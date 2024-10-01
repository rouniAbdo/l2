import { UserInterface } from '../src/module/userInterface'
describe('UserInterface', () => {
  const vatRates = { standard: 0.25, reduced: 0.12 }
  let userInterface
  beforeEach(() => {
    userInterface = new UserInterface(vatRates)
  })
  test('should add an Item and return success message', () => {
    const result = userInterface.addItemToCalculator('item1', 100, 'standard', 1)
    expect(result).toBe('Added 1 units of item1 at price 100 each with VAT rate standard')
  })
  test('should return an error message', () => {
    const result = userInterface.addItemToCalculator('item1', '', 'standard', 1)
    expect(result).toBe('Item price is not a valid number.')
  })
  test('should get total price including VAT', () => {
    userInterface.addItemToCalculator('item1', 100, 'standard', 1)
    userInterface.addItemToCalculator('item2', 100, 'reduced', 1)
    expect(userInterface.getTotalPrice()).toBe(237)
  })
  test('should update item details', () => {
    userInterface.addItemToCalculator('item1', 100, 'standard', 1)
    const message = userInterface.updateItemDetails('item1', { price: 150, quantity: 2, vat: 'standard', name: 'item2' })

    expect(userInterface.vatCalculator.items[0].getPrice()).toBe(150)
    expect(userInterface.vatCalculator.items[0].getQuantity()).toBe(2)
    expect(userInterface.vatCalculator.items[0].getVatRate()).toBe(0.25)
    expect(userInterface.vatCalculator.items[0].getName()).toBe('item2')
    expect(message).toBe('Added 2 units of item2 at price 150 each with VAT rate 0.25')
  })
})
