import { VatCalculator, UserInterface } from '../src/module/userInterface'
import { UpdateItem } from '../src/module/updateItem'
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
})
