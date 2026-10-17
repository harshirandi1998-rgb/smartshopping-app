# Smart Shopping App

## Introduction

The Smart Shopping App is a shopping application designed to help users
plan their shopping, manage expenses, and keep track of their orders.
The system brings product search, shopping lists, cart management,
budget checking, and order information together in one place.

## Objectives

-   Make it easier for users to search for products and view product
    details.
-   Help users create and manage shopping lists.
-   Calculate the total cost of selected products.
-   Help users monitor their shopping budget.
-   Provide product recommendations to support shopping decisions.
-   Keep order details and receipts organized.

## Main Features

### User Registration and Login

Users can create an account and log in to access the application.

### Product Search

Users can search for products and view information such as product names
and prices.

### Shopping List

Users can create a shopping list and add, update, or remove items.

### Shopping Cart

Users can select products and view the total cost of their shopping
cart.

### Budget Management

The system compares the cart total with the user's budget. If the total
is higher than the budget, the application displays a warning.

### Product Recommendations

The system can provide recommendations to help users consider suitable
products and manage their spending.

### Payment and Order History

The shopping process includes payment handling, order confirmation, and
access to digital receipts and order history.

## System Architecture

The system is organized into five main components:

1.  **Customer:** Uses the application to search for products and manage
    shopping.
2.  **Mobile Application:** Provides the interface for product browsing,
    shopping lists, cart review, and order information.
3.  **Backend Server:** Processes requests, checks information,
    calculates cart totals, and coordinates communication with the
    database and payment system.
4.  **Database:** Stores information such as user details, products,
    shopping lists, cart data, recommendations, and order history.
5.  **Payment System:** Processes payment requests and returns payment
    confirmation.

## System Workflow

1.  The customer opens the application and registers or logs in.
2.  The customer searches for products and views product details.
3.  The customer creates a shopping list and adds selected products to
    the cart.
4.  The backend calculates the total price and checks it against the
    customer's budget.
5.  The application displays a budget warning when the total exceeds the
    budget and provides product recommendations.
6.  The customer reviews the cart and confirms the order.
7.  The payment system processes the payment and returns the result.
8.  The system saves the order information and displays the digital
    receipt and order history.

## Project Documents

-   **Software Requirements Specification:**
    `SRS for Online Shopping app.docx`
-   **SRS Template:** `SRS for Online Shopping app.dotx`
-   **Case Diagram and Sequence Diagram:**
    `case diagram and sequence diagram.png`

## Technologies

The technologies used for the application will be documented alongside
the implementation and source code.

## Testing

The main areas considered for testing are:

-   User registration and login
-   Product search and product details
-   Creating and updating shopping lists
-   Adding and removing cart items
-   Calculating the total price
-   Checking budget warnings
-   Payment confirmation
-   Saving orders and displaying receipts

## Future Scope

-   Improve product search and filtering.
-   Enhance recommendations based on user preferences and budget.
-   Improve the user interface and mobile usability.
-   Add more testing for reliability and security.
-   Provide clearer order tracking and expense summaries.

## Team

Smart Shopping App Project
