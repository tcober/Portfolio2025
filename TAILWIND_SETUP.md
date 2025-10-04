# Tailwind CSS Integration Guide

## Overview

Tailwind CSS has been successfully integrated into your Nuxt portfolio project. This guide covers the setup, customization, and usage.

## Installation ✅ Complete

- **@nuxtjs/tailwindcss** module installed via `npx nuxi@latest module add tailwindcss`
- Custom CSS file created at `~/assets/css/tailwind.css`
- Tailwind configuration file created at `tailwind.config.ts`

## Configuration

### Nuxt Config (`nuxt.config.ts`)

```typescript
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      content: ["content/**/*.md", "storyblok/**/*.vue"],
    },
  },
});
```

### Tailwind Config (`tailwind.config.ts`)

Custom theme extensions include:

- **Colors**: Primary (blue), Secondary (gray), Accent (emerald), Neutral (slate)
- **Fonts**: Inter for sans-serif, JetBrains Mono for monospace
- **Animations**: fade-in, slide-up, slide-in-left, bounce-gentle
- **Custom spacing**: 18, 88, 128
- **Max widths**: 8xl, 9xl

## Custom Components & Utilities

The `~/assets/css/tailwind.css` file includes custom component classes:

### Timeline Components

- `.timeline-container` - Main timeline wrapper
- `.timeline-item` - Individual timeline items with bullet points
- `.timeline-content` - Content cards with hover effects

### Card Components

- `.card` - Basic card with shadow and border
- `.card-header` - Card header with bottom border
- `.card-title` - Card title styling
- `.card-subtitle` - Card subtitle styling

### Button Components

- `.btn` - Base button class
- `.btn-primary` - Primary button (blue)
- `.btn-secondary` - Secondary button (gray)
- `.btn-ghost` - Ghost button (transparent)

### Navigation Components

- `.nav-link` - Navigation link styling
- `.nav-link.active` - Active navigation state

### Form Components

- `.form-input` - Styled form inputs
- `.form-label` - Form label styling

### Content Components

- `.prose-custom` - Custom prose styling for rich text
- `.animate-on-scroll` - Scroll-triggered animations

## Updated Components

### Pages

- **`pages/index.vue`** - Homepage with timeline layout using Tailwind classes
- **`pages/resume.vue`** - Resume page with professional styling

### Storyblok Components

- **`storyblok/Quote.vue`** - Quote component with improved styling and author support
- **`storyblok/ImageSet.vue`** - Image gallery with lightbox functionality
- **`storyblok/Youtube.vue`** - Enhanced YouTube embed with error states

### Layout

- **`layouts/default.vue`** - Site-wide navigation and footer

## Usage Examples

### Basic Classes

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>

<!-- Cards -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card Subtitle</p>
  </div>
  <p>Card content...</p>
</div>

<!-- Timeline -->
<div class="timeline-container">
  <div class="timeline-item">
    <div class="timeline-content">Content here...</div>
  </div>
</div>
```

### Custom Animations

```html
<!-- Fade in on page load -->
<div class="animate-fade-in">Content</div>

<!-- Slide up animation -->
<div class="animate-slide-up">Content</div>

<!-- Scroll-triggered animation -->
<div class="animate-on-scroll">Content</div>
```

### Responsive Design

```html
<!-- Responsive grid -->
<div class="grid-responsive">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>

<!-- Mobile-first responsive -->
<div class="text-sm md:text-base lg:text-lg">Responsive text</div>
```

## Color Palette

- **Primary**: Blue shades (blue-50 to blue-900)
- **Secondary**: Gray shades (gray-50 to gray-900)
- **Accent**: Emerald shades (emerald-50 to emerald-900)
- **Neutral**: Slate shades (slate-50 to slate-900)

## Development Tips

### IntelliSense Setup

Add to your VS Code settings for better Tailwind support:

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.experimental.classRegex": ["tw`(.*?)`", "tw\\('(.*?)'\\)"]
}
```

### Print Styles

Print-specific utilities are included:

- `.no-print` - Hide element when printing
- `.print-break-before` - Page break before element
- `.print-break-after` - Page break after element

### Dark Mode (Future)

Dark mode utilities are prepared but not activated:

- `.dark:bg-dark` - Dark background
- `.dark:text-dark` - Dark text

## Next Steps

1. Test all components with various content types
2. Customize colors to match your brand
3. Add more custom components as needed
4. Consider adding dark mode toggle
5. Optimize for production builds

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Nuxt Tailwind Module](https://tailwindcss.nuxtjs.org/)
- [Tailwind UI Components](https://tailwindui.com/)
