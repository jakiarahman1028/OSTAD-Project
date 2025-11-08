# Module 18 Assignment - Project Week - 2

I completed the tasks using **Playwright with JavaScript**, and integrated **Allure Reporter** to generate detailed test reports.

Website under test: [https://www.saucedemo.com/](https://www.saucedemo.com/)

---

## Assignment Tasks

### Q1 - **Scenario:**  
Login with `locked_out_user` and verify the error message.  
Verified error text: “Sorry, this user has been locked out.”

---

### Q2 - **Scenario:**
- Logged in with `standard_user`
- Opened hamburger menu → selected **Reset App State**
- Added **three products** to the cart
- Continued to checkout
- Verified **product names** and **total price**
- Finished purchase → checked message: “Thank you for your order!”
- Reset App State again and logged out

---

### Q3 - **Scenario**
- Logged in with `performance_glitch_user`
- Reset App State
- Sorted products by **Name (Z to A)**
- Added the **first product** to cart
- Went to checkout and verified product name and total
- Completed purchase and verified order success message
- Reset App State again and logged out

---

## Tools & Technologies
- **Language:** JavaScript
- **Framework:** Playwright
- **Reporter:** Allure
- **IDE Used:** VS Code

---

## Installation 

### Clone the Repository
```bash
git clone https://github.com/jakiarahman1028/OSTAD-Project
```
### Install Dependencies 
```bash
npm install
```
### Run the Tests

To execute all test cases:
```bash
npx playwright test
```
To run a specific test file:
```bash
npx playwright test tests/Q1-locked_user.spec.js
```
### Generate Allure Report
```bash
npx playwright test --reporter=line,allure-playwright


