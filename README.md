# Next.js Checkout Case Study

A secure, performant, mock payments checkout flow built using **Next.js App Router**.

## Features

- Cart Summary (items, subtotal, delivery charge, total)
- Payment Form (Card Number, Expiry, CVV, Cardholder Name)
- Client-side validation (card, expiry, CVV, name)
- Server-side validation & sanitization
- Mock payment API (`/api/payment`)
- Loading, error, and success states
- Redirect to success page after payment
- Unit tests with Jest + React Testing Library
- Fully responsive design
- Styled with Tailwind CSS
- Icons with Lucide-React

## Technology Choices

- **Next.js 16** – Framework with App Router & API routes  
- **React 19** – Component-based UI library  
- **Tailwind CSS 4** – Utility-first CSS framework for styling  
- **TypeScript 5** – Static typing for safety  
- **Lucide-React** – Icon library  
- **Jest 30 + React Testing Library** – Unit and integration testing  

## Assumptions & Limitations

- **Mocked Payments** – No real payment gateway integration  
- **Hardcoded Cart** – Cart items are static for demonstration purposes  
- **No Database** – Data resets on page refresh; no persistent storage  
- **Basic Validation** – Server API includes simple validation & sanitization  
- **Focused Scope** – Designed for checkout UI/UX only, not full e-commerce  

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
