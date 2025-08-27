# Project-15

## Overview

Project-15 is a Next.js project using the App Router with Supabase authentication. This project is structured to make it easy for contributors to work on different pages, components, and authentication logic.

## Folder Structure

```
├── README.md
├── app
│   ├── about           # Add About page logic here
│   │   └── page.tsx
│   ├── checkout        # Add Checkout page logic here
│   │   └── page.tsx
│   ├── contact         # Add Contact page logic here
│   │   └── page.tsx
│   ├── faq             # Add FAQ page logic here
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx      # Root layout, add header/footer here
│   ├── page.tsx        # Home page logic here
│   └── vehicles        # Add Vehicles page logic here
│       └── page.tsx
├── components
│   ├── About           # Add About page components here
│   ├── Checkout        # Add Checkout page components here
│   ├── Contact         # Add Contact page components here
│   ├── Faq             # Add FAQ page components here
│   ├── Home            # Add Home page components here
│   ├── Popups
│   │   ├── AddPopup.tsx # Add AddPopup logic here
│   │   └── SignUpPopup.tsx # Add SignUpPopup logic here
│   ├── Vehicles        # Add Vehicles page components here
│   └── ui              # Shared UI components here
├── eslint.config.mjs
├── lib
│   └── supabase        # Supabase client and auth helpers
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public              # Add static assets here
└── tsconfig.json
```

## Authentication (Supabase)

All auth-related logic lives in `lib/supabase/`.

### Files:

* `client.ts` → Supabase client instance
* `auth.ts` → Auth helper functions (signup, login, logout)

## Contribution Guidelines

* Feature branches should follow `feature/<name>` format
* Push code to `dev` branch and open PRs to `main`
* Place reusable components in `components/ui` or `components/<page>` folders
* Keep pages inside `app/<page>` folders

## Running the Project

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the project
