# Portfolio 2025 - Coding Instructions

## Project Overview

This is a personal and professional static website using **Nuxt 3** and **Storyblok CMS**. The site has **3 distinct pages**: an index/home page (fun & casual), a feed page (timeline of posts), and a resume page (professional). The site is deployed to **Netlify** as a static site with Storyblok webhooks triggering automatic rebuilds on content changes.

## Tech Stack

- **Framework**: Nuxt 3 (Static Site Generation)
- **UI Library**: Vue 3 with TypeScript support
- **Styling**: Tailwind CSS with custom design system
- **Typography Plugin**: @tailwindcss/typography
- **CMS**: Storyblok (US region)
- **State Management**: Pinia (when needed for complex state)
- **Fonts**: Google Fonts (Lilita One, PT Mono, Merriweather)
- **Icons**: Font Awesome via vue-fontawesome
- **Hosting**: Netlify (SSG deployment)
- **Build Tool**: Nuxt's built-in Vite

## Site Structure & Page Purposes

### Three Pages Architecture

1. **Index/Home Page** (`/`) - Fun, casual, welcoming

   - Personal introduction and greeting
   - Friendly, approachable tone
   - Gateway to other sections
   - Creative freedom with design and personality

2. **Feed Page** (`/feed`) - Timeline content stream

   - Chronological display of posts from Storyblok
   - Rich media content (images, videos, quotes)
   - Personal and professional blend
   - Storyblok-powered dynamic content

3. **Resume Page** (`/resume`) - Professional credentials
   - Formal, professional presentation
   - Print-optimized layout
   - PDF download capability
   - Traditional resume structure with work experience, education, skills

## Architecture Principles

### Component Structure

- **Storyblok components** live in `/storyblok/` directory
- **Reusable Vue components** live in `/components/` directory
- Follow **PascalCase naming** matching Storyblok component names
- All Storyblok components accept `blok` prop with proper TypeScript typing
- Use semantic HTML throughout all components

### Data Fetching Strategy

- Use `useAsyncData` for server-side data fetching on pages
- Use `useStoryblokApi()` composable for Storyblok API requests
- Always use `version: "draft"` in development
- Switch to `version: "published"` in production
- Leverage Nuxt's automatic hydration for SSR/SSG

### Styling Guidelines

- **Mobile-first responsive design** (use Tailwind breakpoints)
- Use **scoped CSS** in Vue components when needed
- Prefer Tailwind utility classes over custom CSS
- Maintain consistent spacing using Tailwind's spacing scale
- Use rem units when custom CSS is necessary
- Apply subtle shadows and smooth transitions for polish

### State Management

- Use **Pinia stores** sparingly (only for complex shared state)
- Store files go in `/stores/` directory
- Most page-level data can use `useAsyncData` directly
- Implement async actions for Storyblok API calls when using stores

## Storyblok Configuration

### API Settings

- **Access Token**: `eLrZdcGSol1ru8U12JRKKwtt`
- **Region**: `us`
- **Draft Mode**: Use during development
- **Published Mode**: Use in production builds

### Content Structure

- **Posts folder**: `posts/` - Contains all feed timeline entries
- **Pages folder**: `pages/` - Contains static page content
- Use `starts_with: "posts/"` to filter feed content
- Sort posts by `created_at:desc` for chronological feed

### Content Components Available

- **ImageSet**: Multi-image galleries with controls
- **Youtube**: Embedded YouTube videos
- **Quote**: Styled quote blocks for highlights
- Rich text content with proper typography

## Coding Standards

### Vue Component Template

```vue
<template>
  <!-- Use semantic HTML -->
  <article class="component-name">
    <!-- Component content -->
  </article>
</template>

<script setup>
// Imports at the top
import { computed } from "vue";

// Props with TypeScript typing
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// Computed properties for derived state
const processedData = computed(() => {
  // Processing logic
});
</script>

<style scoped>
/* Component-specific styles only when Tailwind isn't sufficient */
.component-name {
  /* Custom styles here */
}
</style>
```

### Page-Level Data Fetching Pattern

```vue
<script setup>
// SEO meta tags
useSeoMeta({
  title: "Page Title",
  description: "Page description",
  ogTitle: "OG Title",
  ogDescription: "OG Description",
  ogType: "website",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});

// Async data fetching with proper SSR support
const { data, pending, error } = await useAsyncData("unique-key", async () => {
  const storyblokApi = useStoryblokApi();
  const response = await storyblokApi.get("cdn/stories", {
    starts_with: "posts/",
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    sort_by: "created_at:desc",
  });
  return response.data.stories || [];
});
</script>
```

## Performance & SEO Best Practices

### Static Site Generation (SSG)

- Prerender all routes using `routeRules` in `nuxt.config.ts`
- Set `prerender: true` for index, feed, and resume pages
- Enable asset compression with `nitro.compressPublicAssets`
- Use Nuxt's built-in optimization features

### Image Optimization

- Use `loading="lazy"` for below-the-fold images
- Implement proper `alt` attributes for accessibility
- Use `object-fit: cover` for consistent image display
- Optimize images before uploading to Storyblok

### SEO Configuration

- Use `useSeoMeta()` on every page
- Include proper meta descriptions and og tags
- Set appropriate `robots` directives
- Use semantic HTML structure (header, main, section, article)

### Performance Tips

- Prefetch links on interaction using Nuxt's defaults
- Download Google Fonts locally with `download: true`
- Use `display: swap` for font loading
- Minimize unnecessary API calls

## Deployment Configuration

### Netlify Setup

- **Build Command**: `npm run generate`
- **Publish Directory**: `dist`
- **Environment Variables**:
  - `STORYBLOK_ACCESS_TOKEN`: Your Storyblok token
  - `NODE_ENV`: `production`

### Storyblok Webhooks

1. Get build hook URL from Netlify: `https://api.netlify.com/build_hooks/[YOUR_BUILD_HOOK_ID]`
2. Add webhook in Storyblok settings
3. Trigger on: Story published, Story unpublished
4. Test webhook after configuration

### Static Site Considerations

- All routes must be known at build time
- Dynamic routes need to be defined in `routeRules`
- Content changes require rebuild (handled by webhooks)
- Preview changes locally before publishing to Storyblok

## Development Workflow

### Local Development

```bash
npm run dev           # Start dev server with hot reload
npm run build         # Test production build locally
npm run generate      # Generate static site for deployment
npm run preview       # Preview generated static site
```

### Content Update Flow

1. Create/edit content in Storyblok (draft mode)
2. Preview changes locally (fetches draft content)
3. Publish content in Storyblok
4. Webhook triggers Netlify rebuild automatically
5. Verify changes on live site after deployment

### Code Quality Standards

- Use TypeScript for type safety
- Implement proper error handling with try/catch
- Use descriptive component and variable names
- Add loading states for async operations
- Handle empty states gracefully (no data scenarios)
- Test responsive design on mobile and desktop

## File Organization

```
/Users/thomascober/Desktop/Portfolio2025/
├── .github/
│   └── copilot-instructions.md
├── assets/
│   └── css/
│       └── tailwind.css
├── components/          # Reusable Vue components
│   ├── FeedFeed.vue
│   ├── LoadingSpinner.vue
│   └── WellFuck.vue
├── layouts/            # Nuxt layouts
│   └── default.vue
├── pages/              # Three main pages
│   ├── index.vue      # Home (fun & casual)
│   ├── feed.vue       # Timeline feed
│   └── resume.vue     # Professional resume
├── plugins/            # Nuxt plugins
│   ├── fontawesome.client.js
│   └── sitemap.client.js
├── public/             # Static assets
│   └── robots.txt
├── stores/             # Pinia stores (when needed)
├── storyblok/          # Storyblok components
│   ├── ImageSet.vue
│   ├── Quote.vue
│   └── Youtube.vue
├── app.config.ts       # App configuration
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Page-Specific Guidelines

### Index/Home Page (`/`)

- **Tone**: Fun, casual, welcoming, personal
- **Purpose**: First impression, introduce yourself
- **Design Freedom**: Be creative, show personality
- **Content**: Friendly greeting, who you are, what you do
- **No Storyblok**: Can be hardcoded in template (static)

### Feed Page (`/feed`)

- **Tone**: Blend of personal and professional
- **Purpose**: Timeline of posts, updates, projects, thoughts
- **Data Source**: Storyblok posts folder
- **Components**: Use LoadingSpinner, WellFuck for states
- **Layout**: Chronological list (newest first)
- **Rich Media**: Support images, videos, quotes via Storyblok components

### Resume Page (`/resume`)

- **Tone**: Professional, formal, credential-focused
- **Purpose**: Traditional resume for employers/recruiters
- **Features**: Print button, PDF download, structured sections
- **Sections**: Experience, Education, Skills, Contact
- **Print-Ready**: Use print-specific CSS classes
- **No Storyblok**: Hardcoded content (static, infrequently changed)

## Design Philosophy

- **Fun where appropriate** (index page - creative freedom)
- **Professional where necessary** (resume - traditional credibility)
- **Balanced everywhere else** (feed - authentic personality + quality)
- Make design decisions like you went to the greatest design school in the universe
- Prioritize clarity and usability over cleverness
- Use white space intentionally
- Maintain consistent typography hierarchy
- Apply smooth transitions and subtle animations

## Best Practices Checklist

- ✅ Prerender all three pages for optimal performance
- ✅ Use `useAsyncData` for data fetching (not onMounted)
- ✅ Implement loading and error states on feed page
- ✅ Add SEO meta tags to every page
- ✅ Test responsive design on mobile devices
- ✅ Optimize images before uploading to Storyblok
- ✅ Use semantic HTML throughout
- ✅ Test print layout for resume page
- ✅ Verify Storyblok webhook triggers rebuilds
- ✅ Test production build before deploying
- ✅ Keep dependencies updated
- ✅ Maintain clean Git commit history
- ✅ Review and refactor code periodically
- ✅ Update this instructions file as project evolves

## External Links Configuration

Links to external profiles should:

- Open in new tabs (`target="_blank"`)
- Include `rel="noopener noreferrer"` for security
- Use appropriate icons (Font Awesome available)
- Be accessible from navigation or footer
- Include: GitHub, LinkedIn

**Configured in `app.config.ts`:**

```typescript
social: {
  github: "https://github.com/thomascober",
  linkedin: "https://linkedin.com/in/thomascober",
}
```
