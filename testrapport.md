# Test Report for the Project

## Overview
This report summarizes the results of unit tests for the classes `Item`, `UpdateItem`, `VatCalculator`, and `UserInterface` in the project.

## Test Environment
- **Testing Tool**: Jest
- **Programming Language**: JavaScript
- **Classes**: Item, UpdateItem, VatCalculator, UserInterface

## Test Cases and Results

### 1. Item
| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| **1.1. Create Item with valid values                    | Correctly creates `Item` with specified name, price, VAT rate, and quantity. | Pass     |
| **1.2. Return reduced VAT rate                          | Returns correct reduced VAT rate (0.12).                        | Pass     |
