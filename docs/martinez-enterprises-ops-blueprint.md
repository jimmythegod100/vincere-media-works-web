# Martinez Enterprises — Ops Memory (Payments & Bookkeeping)

> **Status:** Committed to project memory — both **Valley Notary Services** and **Vincere Media Works** are live.  
> **Parent entity:** Martinez Enterprises (Sole Proprietorship)  
> **Legal name:** Andrew James Martinez  
> **EIN:** 42-4044769  
> **Central banking hub:** Relay Financial  
> **Bookkeeping:** Wave Accounting (free tier)

This document is the streamlined blueprint for accepting payments cleanly and managing bookkeeping across both brands under Martinez Enterprises.

---

## Entire Business Structure (Gameplan Diagram Summary)

```
Martinez Enterprises (Sole Proprietorship)
Legal: Andrew James Martinez · EIN 42-4044769
                │
                ▼
     Central Banking Hub: Relay Financial
                │
    ┌───────────┼───────────┬────────────────┐
    ▼           ▼           ▼                ▼
 Main OPEX /  Valley      Vincere Media    Real Estate
 Tax Reserve  Notary      Works OPEX       Operations
              Services    OPEX             OPEX
                │           │                │
                ▼           ▼                ▼
         Notary cash    High-margin      Wealth asset
         flow (mobile   agency (web,     (CA salesperson
         notary, loan   automation,      license, cross-
         signings)      marketing)       referrals)
                │           │
                └─────┬─────┘
                      ▼
         Wave Accounting (Multi-Business Dashboard)
                      │
         Schedule C (Form 1040) year-end consolidation
```

### Core business units

| Unit | Role | Focus | Notes |
|------|------|--------|--------|
| **Valley Notary Services** | Cash flow | Mobile notary, loan signings | Stanislaus County (Modesto); valleynotaryservices.com |
| **Vincere Media Works** | High-margin agency | Web design, software automation, digital marketing | Docker, GitHub Pages, AI workflow tools |
| **Real Estate Services** | Wealth asset | CA salesperson license, cross-referrals, long-term wealth | Separate Relay OPEX account |

### Relay OPEX sub-accounts

- Main OPEX / Tax Reserve (linked with Notary OPEX)
- Valley Notary Services OPEX
- Vincere Media Works OPEX
- Real Estate Operations OPEX

---

## 1. Setting Up Payment Collection

Relay Financial is the central banking hub. Process payments directly through Relay to avoid extra monthly SaaS fees for third-party payment tools.

### A. Add DBAs to Relay (Critical Step)

**Before** collecting checks or bank transfers addressed to trade names, submit DBA/FBN registration documents to Relay customer support.

**Why:** If a client writes a check or initiates an ACH to **"Valley Notary Services"** or **"Vincere Media Works"** instead of **"Andrew James Martinez,"** Relay may bounce the payment unless those names are verified on the account.

### B. Use Relay Invoicing & Quick Requests

Relay includes built-in invoicing and payment collection links:

1. Go to **Invoices → Settings** in Relay and upload individual logos + customized brand details for both websites.
2. Generate **Quick Payment Links** or **Invoices** to send via email or link.
3. Choose the **target destination account**:
   - Notary jobs → Valley Notary Services sub-account
   - Web/dev payments → Vincere Media Works sub-account
4. Clients can pay via **Credit/Debit card**, **ACH**, or **Wire**.

---

## 2. Bookkeeping Setup (Wave Accounting)

Use **Wave Accounting** (free tier) for IRS-compliant tracking without monthly subscription fees.

### A. Multi-Business Dashboard Architecture

Wave supports up to **15** distinct business entities / trade names under one login/email.

1. Sign up / log in to Wave Apps.
2. Profile (top-right) → **Create New Business**.
3. Create two distinct business profiles:
   - **Profile 1:** Valley Notary Services
   - **Profile 2:** Vincere Media Works
4. Switch between them from the top menu for separate Profit & Loss (P&L) statements per brand.

### B. Syncing Relay Accounts

| Wave business profile | Link via Plaid |
|-----------------------|----------------|
| Valley Notary Services | Matching Relay checking (Notary OPEX) |
| Vincere Media Works | Matching Relay checking (Media OPEX) |

Wave will automatically import and categorize daily transactions into separate general ledgers.

---

## 3. Best Practices for Bookkeeping & Tax Time

- **Schedule C consolidation:** At year-end, because both brands operate under the Sole Proprietorship EIN (**42-4044769**), export both P&L statements from Wave to file the standard **Schedule C (Form 1040)**.
- **Automated receipts:** Use the Wave mobile app or email receipt-forwarding to capture receipts (notary supplies, web hosting, equipment) so every deduction is backed up.
- **Reference walk-through:** Wave Accounting Multiple Businesses Guide (YouTube) for configuring distinct business profiles under one dashboard.

---

## Operational Checklist (Quick Reference)

- [ ] Submit Valley Notary Services DBA/FBN docs to Relay support
- [ ] Submit Vincere Media Works DBA/FBN docs to Relay support
- [ ] Configure Relay Invoices settings with both brand logos
- [ ] Create Wave business profile: Valley Notary Services
- [ ] Create Wave business profile: Vincere Media Works
- [ ] Plaid-link Notary Relay checking → Wave Notary profile
- [ ] Plaid-link Media Relay checking → Wave Media profile
- [ ] Route invoices/payment links to the correct Relay sub-account
- [ ] Enable Wave receipt capture (app / email forwarding)
- [ ] Year-end: export both Wave P&Ls → Schedule C

---

## Related sites / brands

- **Vincere Media Works** (this repo): marketing site — web design, SEO, analytics, monthly care
- **Valley Notary Services:** valleynotaryservices.com — mobile notary / loan signings (Stanislaus County)
- **Parent:** Martinez Enterprises — sole proprietorship umbrella for all brands
