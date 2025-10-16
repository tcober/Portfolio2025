# Portfolio 2025 - Coding Instructions

## Project Overview

This is a static website using **Nuxt** and **Storyblok** with 2 main pages: a timeline-style feed of posts and a resume page. The site includes links to GitHub and LinkedIn and is deployed to **Netlify** with Storyblok hooks triggering rebuilds when new content is published.

## Tech Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Storyblok (US region)
- **State Management**: Pinia
- **Hosting**: Netlify
- **Build**: Static Site Generation (SSG)

## Site Structure

- **Homepage**: Timeline-style feed of posts
- **Resume Page**: Professional resume with downloadable PDF
- **Navigation**: Links to GitHub and LinkedIn profiles
- **CMS Integration**: Storyblok webhooks trigger Netlify rebuilds on content publish

## Architecture Principles

### Component Structure

- Use **Storyblok components** for all content blocks
- Keep components in `/storyblok/` directory
- Follow naming convention: PascalCase matching Storyblok component names
- Always accept `blok` prop with proper TypeScript typing

### State Management

- Use **Pinia stores** in `/stores/` directory (like existing `feedStore`)
- Create specific stores for different data types (e.g., `feedStore`, `resumeStore`)
- Implement async actions for Storyblok API calls
- Use `useStoryblokApi()` composable for API requests

### Styling Guidelines

- Use **scoped CSS** in all Vue components
- Implement responsive design (mobile-first approach)
- Use CSS Grid/Flexbox for timeline layout
- Maintain consistent spacing (rem units preferred)
- Apply subtle shadows and transitions for better UX

### Content Management

- Structure Storyblok content with folders:
  - `posts/` - Timeline feed content
  - `pages/` - Static pages (resume, about)
- Use Storyblok's Multi-Assets field for image sets
- Implement proper alt text and accessibility features

## Coding Standards

### Vue Components

```vue
<template>
  <!-- Always use semantic HTML -->
  <article class="component-name">
    <!-- Content here -->
  </article>
</template>

<script setup>
// Import types and composables at top
import { computed } from "vue";

// Define props with proper typing
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// Use computed properties for derived data
const processedData = computed(() => {
  // Processing logic
});
</script>

<style scoped>
/* Component-specific styles */
.component-name {
  /* Styles here */
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  /* Mobile styles */
}
</style>
```

### Timeline Feed Structure

- Use `<ul>` with `<li>` for semantic list structure
- Each post renders via `<StoryblokComponent :blok="post.content" />`
- Implement chronological ordering (newest first)
- Add loading states and empty content handling

### Storyblok Integration

- Access token: `eLrZdcGSol1ru8U12JRKKwtt`
- Region: `us`
- Always use `version: "draft"` during development
- Switch to `version: "published"` for production
- Use `starts_with` parameter for filtered content queries

### Performance Optimizations

- Use `loading="lazy"` for images
- Implement proper image alt attributes
- Use `object-fit: cover` for consistent image display
- Minimize API calls with efficient data fetching

## Content Types

### Timeline Posts

- Rich text content with embedded components
- Image sets for galleries
- YouTube video embeds
- Quote blocks for highlights
- Metadata: title, date, tags, featured image

### Resume Components

- Experience sections with timeline styling
- Skills lists
- Education timeline
- Contact information
- Downloadable PDF version

## Deployment Configuration

### Netlify Settings

- Build command: `npm run generate`
- Publish directory: `dist`
- Environment variables: Storyblok access token
- Deploy contexts: production uses published content

### Storyblok Webhooks

- Configure webhook URL: `https://api.netlify.com/build_hooks/[BUILD_HOOK_ID]`
- Trigger on: Story published, Story unpublished
- Enable for production space only
- Test webhook triggers after content updates

## Development Workflow

### Local Development

1. Use `npm run dev` for hot reloading
2. Connect to Storyblok draft content
3. Test timeline layout with multiple posts
4. Verify responsive design on mobile

### Content Creation

1. Create content in Storyblok draft
2. Preview changes locally
3. Publish content to trigger Netlify rebuild
4. Verify live site updates automatically

### Code Quality

- Use TypeScript for type safety
- Implement proper error handling in stores
- Write descriptive component names
- Comment complex timeline logic
- Test on multiple devices/browsers

## File Organization

```
/
├── components/           # Reusable Vue components
├── pages/               # Nuxt pages (index.vue, resume.vue)
├── stores/              # Pinia stores (feedStore.js, etc.)
├── storyblok/           # Storyblok component library
├── public/              # Static assets
└── nuxt.config.ts       # Nuxt configuration with Storyblok setup
```

## Key Features Implementation

### Timeline Feed (Homepage)

- Chronological post display
- Responsive grid layout
- Smooth scrolling
- Post categories/tags
- Social sharing buttons

### Resume Page

- Professional timeline layout
- Skills visualization
- Experience cards
- Education section
- Contact form
- PDF download button

### Navigation

- Header with GitHub/LinkedIn links
- Mobile-responsive menu
- Clean, minimal design
- Consistent across pages

## Best Practices

- Keep timeline posts as individual Storyblok stories
- Use consistent post structure for uniform display
- Implement proper loading states during content fetch
- Handle empty feed gracefully
- Optimize images for timeline display
- Test webhook integration thoroughly
- Monitor rebuild times and performance
- Maintain clean commit history for deployments
- Make design decisions like you went to the greatest design school in the universe.
- Periodically review and refactor code for maintainability
- Periodically review and update this instructions file for improvements

## External Links

- **GitHub**: Professional code repositories
- **LinkedIn**: Professional networking profile
- Both should open in new tabs
- Include appropriate icons/styling
