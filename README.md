# VAT Calculation Library


## Description
The VAT Calculation Library is a JavaScript tool that helps people calculate Value Added Tax (VAT) for different items. It allows users to create item objects, change their details, and find out the total price, including VAT. The library has different classes that work together to handle items, VAT rates, and the calculations needed.

#### Key Features:

- Create and manage items with their names, prices, quantities, and VAT rates.
- Update item details like price, quantity, name, and VAT rate.
- Calculate VAT for each item and the total price, including VAT.
- Easily use it in JavaScript projects.
## Installation
To use the VAT Calculation Library in your project, follow these steps:
1. **Clone the Repository:**
```bash
 git clone git@github.com:rouniAbdo/L2.git
 ```
2. **Install Dependencies**
```bash
 npm install
 ```
3. **Import the Library:**
```javascript
import { VATManager } from './module/vatManager.js'
```

## Usage

## step 1: **Define VAT RATES**
```javascript
const vatRates = {
    standard: 0.25,       // 25% VAT
    reduced: 0.12,        // 12% VAT
    superReduced: 0.06,   // 6% VAT
    zero: 0.0             // 0% VAT
}
```
## step 2: **Initialize the User Interface**
Create an instance of the VATManager class, passing in the VAT rates:
```javascript
const vatManager = new VATManager(vatRates)
```
## step 3: **Add Items**
You can add items to the VAT calculator using the `addItemToCalculator` method:
```javascript
vatManager.addItemToCalculator('Product A', 100, 'standard', 2)
```
## step 4: **Calculate Total Price Including VAT**
To get the total price of all items including VAT, use the `getTotalPrice` method:
```javascript 
const totalPrice = vatManager.getTotalPrice()
```
## step 5: **Update Item Details**
You can update an item’s properties by specifying its name and the new values, using the `updateItemDetails` method:
```javascript
const newItem = vatManager.updateItemDetails('Product A', (200, 'reduced', 10))
```
## step 6: **Calculate VAT for All Items**
To calculate and retrieve VAT details for all items, use `calculateVATForAllItems`:
```javascript
const vatDetails = vatManager.calculateVATForAllItems()
// Output : [{name: 'product A, Price: 200, VatRate: 0.12, quantity: 10, VAT: 240, total: 2 240 }]
```

## License
This project is licensed under the MIT License - see the [LICENSE](./docs/LICENSE) file for details