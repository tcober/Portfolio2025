# Thomas Cober Portfolio 2025

A modern portfolio website built with Nuxt 3, featuring a dynamic feed powered by Storyblok CMS and a clean, responsive design.

## Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS with custom design tokens
- **CMS**: Storyblok
- **Fonts**: Merriweather (headings), Inter (body)

## Features

- Dynamic content feed with Storyblok integration
- Responsive image galleries with lightbox functionality
- Scroll-triggered animations
- Print-optimized resume page
- Custom design system with reusable components

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```
├── assets/css/          # Global styles and design tokens
├── components/          # Vue components
│   └── storyblok/      # Storyblok-specific components
├── composables/         # Vue composables
├── layouts/            # Layout components
├── pages/              # Route pages
└── public/             # Static assets
```

## Design System

The project uses a custom design system with:
- Design tokens for colors, spacing, and animations (see `assets/css/tokens.css`)
- Reusable component styles (cards, buttons, animations)
- Consistent typography system with Merriweather and Inter fonts

## Learn More

- [Nuxt documentation](https://nuxt.com/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Storyblok documentation](https://www.storyblok.com/docs)
