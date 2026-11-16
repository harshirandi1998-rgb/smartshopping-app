# Requirements Traceability Matrix (RTM)

**Project:** Smart Shopping App  
**Author / Systems Analyst:** Harshika Randini  
**Organization:** Dongshin University IT Team E  
**Version:** 1.0  

---

## 1. Overview
This Requirements Traceability Matrix (RTM) ensures that all functional and non-functional requirements defined in the SRS Version 1.0 are tracked through system design, UML modeling, implementation, and verification.

---

## 2. Traceability Table

| Req ID | Requirement Description | Category | Related System Feature | UML Diagram Artifact | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **REQ-SF1-1** | User registration via email/phone | Functional | Auth Service | Use Case Diagram | Integration Test |
| **REQ-SF1-2** | Passwords stored via bcrypt/SHA-256 | Security | Auth Service | Component Diagram | Security Audit |
| **REQ-SF2-1** | Product search results returned within < 1.0s | Performance | Catalog Service | Sequence Diagram | Load Testing |
| **REQ-SF3-1** | Add, edit, remove items from digital shopping list | Functional | Cart Service | Class Diagram | Unit Test |
| **REQ-SF3-3** | Weight discrepancy detection (> 50g) | Reliability | Hardware Interface | State Machine Diagram | Hardware-in-Loop Test |
| **REQ-SF4-1** | Real-time calculation of total, taxes, and discounts | Functional | Calculation Engine | Sequence Diagram | Unit Test |
| **REQ-SF4-3** | Trigger budget threshold alert at 90% and 100% | Functional | Budgeting Engine | Activity Diagram | System Test |
| **REQ-SF6-2** | Generate cryptographically signed digital QR receipt | Functional | Payment Service | Class / Sequence Diagram | End-to-End Test |
| **REQ-NFR-SEC-1**| TLS 1.3 encryption across all communication routes | Security | Communications Interface| System Architecture | Penetration Test |
