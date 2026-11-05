# Web Development Internship Assessment - Eduminatti

Comprehensive technical analysis of top-ranking Indian boarding school websites, paired with a modern, high-converting admissions portal component.

## Project Structure

```text
├── index.html                   # Main application entry point
├── admission-card.html          # Standalone component preview
├── REPORT_FOR_SUBMISSION.txt    # Complete written audit for Task 1 & Task 2
│
├── css/
│   ├── main.css                 # Master stylesheet import orchestrator
│   ├── variables.css            # Design tokens & color variables
│   ├── layout.css               # Typography, reset & 2-column responsive grid
│   ├── components.css           # Cards, metric stats, pills & CTAs
│   └── modals.css               # Native <dialog>, stepper wizard & tour styles
│
└── js/
    ├── app.js                   # Application coordinator
    └── modules/
        ├── modal.js             # Accessible <dialog> controller with light-dismiss
        ├── fee-calc.js          # Live grade switcher & tuition fee estimator
        ├── wizard.js            # 4-step admission wizard & coupon engine
        ├── tour.js              # 360° virtual campus tour explorer
        └── toast.js             # Accessible toast feedback notifications
```

## Features

- **Audit Report:** Comprehensive technical, UX, and architectural assessment of top boarding schools in India (Next.js/Turbopack vs legacy stacks).
- **Interactive Admission Wizard:** 4-step modal with real-time validation, curriculum selection, drag-and-drop document upload simulation, coupon discount system (`EARLYBIRD`), and receipt generation.
- **Dynamic Fee Calculator:** Live tuition and boarding fee recalculation across Junior, Middle, and Senior divisions.
- **360° Virtual Campus Tour:** Interactive location preview for remote/NRI parents.
- **Sticky WhatsApp Quick Action:** Instant counselor consultation trigger.

