import { VatManagement } from './module/vatManagement.js'
/**
 * This is an example of how to use the VatManagement class.
 * Feel free to modify and extend this code.
 */
const vatRates = {
  standard: 0.25,
  reduced: 0.12,
  superReduced: 0.06,
  zero: 0.00
}
const vatManagement = new VatManagement(vatRates)
vatManagement.addItemToCalculator('item1', 100, 'standard', 1)
vatManagement.addItemToCalculator('item2', 100, 'reduced', 1)
console.table(vatManagement.calculateTotalVAT())
console.log(vatManagement.getTotalPrice())
console.log(vatManagement.updateItemDetails('item1', { price: 150, quantity: 2, vat: 'standard', name: 'item A' }))
console.table(vatManagement.calculateTotalVAT())
console.log(vatManagement.getTotalPrice())
