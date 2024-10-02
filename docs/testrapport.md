# Test Report for the Project

## Overview
This report summarizes the results of unit tests for the classes `Item`, `UpdateItem`, `VatCalculator`, and `VATManager` in the project.

## Test Environment
- **Testing Tool**: Jest
- **Programming Language**: JavaScript
- **Classes**: Item, UpdateItem, VatCalculator, VATManager

## Test Cases and Results

### 1. Item
| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| **1.1. Create Item with valid values**                    | Correctly creates `Item` with specified name, price, VAT rate, and quantity. | Pass     |
| **1.2. Return reduced VAT rate**                         | Returns correct reduced VAT rate (0.12).                        | Pass     |
| **1.3. Error for empty item name**                        | Item name is empty.                                           | Pass     |
| **1.4. Error for invalid price**                          | Item price is not a valid number.                            | Pass     |
| **1.5. Error for invalid VAT rate**                        | Invalid VAT rate key.                                       | Pass     |
| **1.6. Error for invalid quantity**                        | Item quantity is not a valid number.                         | Pass     |
| **1.7. Error for quantity less than 1**                   | Item quantity is not a valid number.                         | Pass     |
| **1.8. Error for negative price**                          | Item price is not a valid number.                            | Pass     |

### 2. UpdateItem

| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| **2.1. Update the price of an item**                      | Successfully updates the item's price to 200.                  | Pass     |
| **2.2. Update the VAT of an item**                        | Successfully updates the item's VAT rate to 0.12 (reduced).    | Pass     |
| **2.3. Update the quantity of an item**                   | Successfully updates the item's quantity to 2.                  | Pass     |
| **2.4. Update the name of an item**                       | Successfully updates the item's name to "item2".                | Pass     |

### 3. VatCalculator
| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| **3.1. Add an item to the list**                              | Successfully adds an item with expected properties.                | Pass     |
| **3.2. Calculate VAT for an item**                            | Correctly calculates the VAT for the item as 25.                  | Pass     |
| **3.3. Calculate total price including VAT for all items**    | Correctly calculates total price including VAT as 237.            | Pass     |

### 4. VATManager

| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| **4.1. Add an item and return success message**           | Returns success message: "Added 1 units of item1 at price 100 each with VAT rate standard" | Pass     |
| **4.2.Return an error message for invalid price**       | Returns error message: "Item price is not a valid number."          | Pass     |
| **4.3.Get total price including VAT**                    | Returns total price including VAT as 237.                           | Pass     |
|**4.4. Update item details**                              | Updates item properties and returns success message for updated item. | Pass     |

## Summary
All tests for the classes `Item`, `UpdateItem`, `VatCalculator`, and `VATManager` were successfully executed and returning expected results.

## Test Report Date
- **Date**: 2024-10-01
