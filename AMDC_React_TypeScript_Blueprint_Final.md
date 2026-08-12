# AMDC Interior Design Website

## React + TypeScript Technical Blueprint (Final)

> **Version:** 1.0\
> **Framework:** React + TypeScript only (No Next.js)

------------------------------------------------------------------------

# 1. Project Overview

Develop a premium portfolio website for **AMDC Interior Design**.

The website should: - Showcase completed interior design projects. -
Present approximately **17--18 projects**. - Each project contains
**10--12 high-quality images**. - Generate enquiries through a contact
form. - Feel luxurious, modern, minimal, and fast.

Reference (Inspiration Only): https://www.essentiaenvironments.com/

Do **NOT** copy the design.

------------------------------------------------------------------------

# 2. Technology Stack

## Core

-   React 19
-   TypeScript
-   Vite
-   React Router DOM

## Styling

-   SCSS Modules

## Animations

-   GSAP
-   Lenis (Smooth Scrolling)

## Gallery

-   Swiper.js

## Forms

-   React Hook Form
-   Zod
-   EmailJS

## Icons

-   Lucide React

## SEO

-   react-helmet-async

## Deployment

-   GitHub
-   Vercel

------------------------------------------------------------------------

# 3. Website Pages

Only two pages.

## Home

-   Hero
-   About Preview
-   Projects
-   Contact
-   Footer

## About

-   Hero
-   Company Story
-   Mission
-   Vision
-   Design Philosophy
-   Why Choose Us
-   Call To Action
-   Footer

------------------------------------------------------------------------

# 4. Home Page Details

## Hero

-   Fullscreen hero image
-   Luxury typography
-   CTA button
-   Transparent navbar

## Navbar

-   Sticky
-   Transparent at top
-   Frosted glass on scroll
-   backdrop-filter blur(20px)
-   Smooth 350ms transition
-   Mobile hamburger menu

## About Preview

-   Short introduction
-   Read More button

## Projects

Display all 17--18 projects in a responsive grid.

Each card contains: - Cover image - Project title - Subtitle

Hover effects: - Image zoom - Soft overlay - Smooth transition

Clicking a card opens a fullscreen modal.

Modal includes: - Project title - Subtitle - Swiper image carousel -
10--12 images - Previous/Next navigation - Keyboard support - Mobile
swipe - Image counter - Close button

No separate project pages.

## Contact

Fields: - Name - Email - Phone - Message

Validation: - React Hook Form - Zod

Submission: - EmailJS

After submission: - Success message - Error handling

Alongside the form: - Address - Phone - Email - Working Hours - WhatsApp
button

------------------------------------------------------------------------

# 5. About Page

Sections: - Hero Banner - Company Story - Mission - Vision - Design
Philosophy - Why Choose Us - CTA - Footer

------------------------------------------------------------------------

# 6. Folder Structure

``` text
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── AboutPreview/
│   ├── ProjectCard/
│   ├── ProjectGrid/
│   ├── ProjectModal/
│   ├── ContactForm/
│   ├── Footer/
│   └── Loader/
├── pages/
│   ├── Home/
│   └── About/
├── layouts/
├── hooks/
├── context/
├── services/
│   └── email.ts
├── data/
│   └── projects.ts
├── styles/
├── types/
│   └── project.ts
├── utils/
├── routes/
├── App.tsx
└── main.tsx

public/
└── images/
    └── projects/
        ├── modern-villa/
        │   ├── cover.webp
        │   ├── 1.webp
        │   ├── 2.webp
        │   └── ...
        └── ...
```



# 8. Animations

Use GSAP for: - Hero reveal - Fade up - Text reveal - Image reveal -
Parallax - Gallery transitions - Modal animation

Use Lenis for smooth scrolling.

Animations should remain subtle and elegant.

------------------------------------------------------------------------

# 9. Performance

-   Vite production build
-   Lazy loading images
-   Dynamic import ProjectModal
-   Code splitting
-   WebP/AVIF images
-   Responsive image sizes
-   Compress assets
-   Memoize expensive components when necessary

Target Lighthouse: - Performance: 95+ - Accessibility: 95+ - Best
Practices: 100 - SEO: 95+

------------------------------------------------------------------------

# 10. Accessibility

-   Semantic HTML
-   ARIA labels
-   Keyboard navigation
-   Focus indicators
-   Proper heading hierarchy
-   Accessible forms

------------------------------------------------------------------------

# 11. SEO

-   react-helmet-async
-   Meta title
-   Meta description
-   Open Graph
-   Twitter Cards
-   robots.txt
-   sitemap.xml

------------------------------------------------------------------------

# 12. Packages

``` bash
npm install react-router-dom
npm install gsap
npm install @studio-freight/lenis
npm install swiper
npm install react-hook-form
npm install zod
npm install @hookform/resolvers
npm install @emailjs/browser
npm install react-helmet-async
npm install lucide-react
npm install sass
```

------------------------------------------------------------------------

# 13. Development

``` bash
npm install
npm run dev
```

Production:

``` bash
npm run build
```

Preview:

``` bash
npm run preview
```




# 16. Deliverables

-   React + TypeScript source code
-   Responsive website
-   Contact form integration
-   Project gallery

-   Documentation
-   Clean, reusable component architecture
