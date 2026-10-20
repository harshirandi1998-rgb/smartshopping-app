# Architectural & Design Patterns Specification

**Project:** Smart Shopping App  
**Author / Systems Analyst:** Harshika Randini  
**Organization:** Dongshin University IT Team E  
**Version:** 1.0  

---

## 1. Applied Design Patterns

### 1.1 Observer Pattern (Chapter 7)
* **Problem:** When a user scans an item or the smart cart load sensor detects a weight change, multiple client display components (running subtotal, item list, budget progress bar) must update simultaneously without tightly coupling the scanner hardware to the UI.
* **Solution:** The `SmartCart` acts as the **ConcreteSubject**. The `CartSummaryView`, `BudgetProgressBarView`, and `StaffAlertMonitor` act as **ConcreteObservers** implementing an `update()` interface.
* **Benefit:** Decouples sensor event detection from user interface rendering.

### 1.2 Adapter Pattern (Chapter 7)
* **Problem:** Integrating multiple third-party payment providers (e.g., Stripe, KakaoPay) with differing API signatures.
* **Solution:** Implement a unified `PaymentGatewayAdapter` interface that normalizes calls across external payment APIs.

---

## 2. Configuration & License Management (Chapter 7)

| Component / Library | Open Source License | Usage Purpose | Compliance Action |
| :--- | :--- | :--- | :--- |
| **PostgreSQL** | PostgreSQL License (BSD-style) | Relational Database | Attributed in README |
| **Express.js / Node.js** | MIT License | Backend REST API Framework | License retained in source |
| **Bcrypt.js** | MIT License | Password Hashing | License retained in source |
