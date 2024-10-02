import { UpdateItem } from '../src/module/updateItem'
import { Item } from '../src/module/item'
describe('UpdateItem', () => {
  const vatRates = { standard: 0.25, reduced: 0.12 }

  let item
  let updateItem
  beforeEach(() => {
    item = new Item('item1', 100, 'standard', 1, vatRates)
    updateItem = new UpdateItem()
  })
  test('should update the price of an item', () => {
    updateItem.update(item, { price: 200 }, vatRates)
    expect(item.getPrice()).toBe(200)
  })
  test('should update the VAT of an item', () => {
    updateItem.update(item, { vat: 'reduced' }, vatRates)
    expect(item.getVatRate()).toBe(0.12)
  })
  test('should update the quantity of an item', () => {
    updateItem.update(item, { quantity: 2 }, vatRates)
    expect(item.getQuantity()).toBe(2)
  })
  test('should update the name of an item', () => {
    updateItem.update(item, { name: 'item2' }, vatRates)
    expect(item.getName()).toBe('item2')
  })
})
