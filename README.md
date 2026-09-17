# Sanjeevani Physiotherapy Centre — Website

React + Vite + Tailwind CSS frontend for Sanjeevani Physiotherapy Centre, Hisar.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```
npm run build
```
Output goes to `dist/` — upload that folder to any static host (Netlify, Vercel, Hostinger, etc.)

## Editing content
Almost all text (clinic info, phone numbers, address, services, conditions,
process steps, testimonials, FAQs) lives in one file:

  src/data/content.js

Change it there and it updates everywhere on the site automatically.

## Editing colors / fonts
  tailwind.config.js  — brand colors (primary, secondary, accent, etc.) and fonts

## Structure
```
src/
  components/   one file per section (Navbar, Hero, Services, ...)
  data/         content.js — all editable text/numbers
  App.jsx       assembles the page
  main.jsx      React entry point
  index.css     global styles + Tailwind
```

## Notes
- Appointment form sends details straight to WhatsApp (wa.me) — update the
  phone number in `src/data/content.js` (`clinic.phones`) if it changes.
- The map embed uses `clinic.mapQuery` from content.js — update if the
  clinic address changes.
- Floating call/WhatsApp buttons are in `src/components/FloatingActions.jsx`.
