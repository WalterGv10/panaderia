# Architecture Plan: Bakery Project Restructuring

## Current State Analysis
The project currently has a flat structure:
- `app/page.tsx`: Contains all the logic, components (Hero, Products, Footer), and data (products array). This is a "Monolithic Component" anti-pattern.
- `app/globals.css`: Contains global styles.
- `components/StarBackground.tsx`: Only isolated component.

## Architecture Council Proposal

### 1. Separation of Concerns (The Strategist)
We need to break down `page.tsx` into smaller, focused domain components.
- **Layout/UI**: Header, Footer.
- **Features**: Hero, ProductList, DeliverySection, ContactSection.
- **Data**: Isolate product data into a separate constant/config file.

### 2. File Structure (The Strategist & Data Steward)
Proposed new structure:
```
app/
  (public)/
    page.tsx        <- Composition root, only imports features
  layout.tsx
  globals.css
components/
  ui/               <- Generic UI elements (Buttons, Cards)
    Button.tsx
    GlassCard.tsx
    Section.tsx
  features/         <- Business logic components
    hero/
      HeroSection.tsx
    products/
      ProductGrid.tsx
      ProductCard.tsx
    delivery/
      DeliverySection.tsx
    contact/
      ContactSection.tsx
    layout/
      Header.tsx
      Footer.tsx
lib/
  constants.tsx     <- Product data and static content
  utils.ts          <- Helpers (clsx, etc)
```

### 3. Implementation Steps
1.  **Extract Data**: Move `products` array to `lib/constants.tsx`.
2.  **Create UI Components**: Extract reusable atomic components if any (e.g., the primary button).
3.  **Extract Feature Components**: Move sections from `page.tsx` to individual files in `components/features/`.
4.  **Refactor Page**: `page.tsx` should just be a sequence of sections.

## Action Plan
1.  Create `lib/constants.tsx` with product data.
2.  Create `components/features/layout/Header.tsx` & `Footer.tsx`.
3.  Create `components/features/home/HeroSection.tsx`.
4.  Create `components/features/products/ProductGrid.tsx`.
5.  Create `components/features/delivery/DeliverySection.tsx`.
6.  Create `components/features/contact/ContactSection.tsx`.
7.  Update `app/page.tsx` to assemble these components.
