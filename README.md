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

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd Portfolio2025
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and add your Storyblok access token:

```bash
cp .env.example .env
```

Edit `.env` and add your Storyblok access token:

```
STORYBLOK_ACCESS_TOKEN=your_storyblok_access_token_here
```

You can get your access token from [Storyblok Settings > Access Tokens](https://app.storyblok.com/#!/me/account).

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

## Storyblok Setup

### Creating a New Space

1. Log in to [Storyblok](https://app.storyblok.com/)
2. Create a new Space (select "US" region for best performance with this config)
3. Go to **Settings > Access Tokens** and copy your Preview access token

### Required Components

Create the following Block components in Storyblok under **Block Library**:

#### 1. ImageSet

A component for displaying image galleries with lightbox support.

| Field Name | Type | Description |
|------------|------|-------------|
| `imageSet` | Multi-Assets | Collection of images to display in a grid |

#### 2. Quote

A component for displaying styled quotations.

| Field Name | Type | Description |
|------------|------|-------------|
| `quote` | Text (required) | The quote text |
| `author` | Text | Attribution (optional) |

#### 3. Youtube

A component for embedding YouTube videos with lazy loading.

| Field Name | Type | Description |
|------------|------|-------------|
| `url` | Text | YouTube video URL (supports various formats) |
| `title` | Text | Accessible title for the video |

#### 4. Reddit

A component for embedding Reddit videos (supports Reddit-hosted and Streamable).

| Field Name | Type | Description |
|------------|------|-------------|
| `url` | Text | Reddit post URL |
| `title` | Text | Accessible title for the video |

### Content Structure

Create a folder called `posts` in your Content section. Each post inside this folder will appear in the feed, sorted by creation date (newest first).

#### Post Structure

Each post story should contain a blocks field that can include any of the above components (ImageSet, Quote, Youtube, Reddit).

### Visual Editor Setup

To enable the Storyblok Visual Editor for local development:

1. Go to **Settings > Visual Editor** in your Storyblok space
2. Set the default environment URL to `https://localhost:3000/`
3. Enable HTTPS in your local dev environment if needed

## Production

### Build the Application

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Generate Static Site

```bash
npm run generate
```

## Project Structure

```
├── assets/css/          # Global styles and design tokens
├── components/          # Vue components
├── composables/         # Vue composables
├── layouts/             # Layout components
├── pages/               # Route pages
│   ├── index.vue        # Home page
│   ├── feed.vue         # Content feed
│   └── resume.vue       # Resume page
├── storyblok/           # Storyblok components
│   ├── ImageSet.vue     # Image gallery component
│   ├── Quote.vue        # Quote component
│   ├── Youtube.vue      # YouTube embed component
│   └── Reddit.vue       # Reddit video embed component
└── public/              # Static assets
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
- [Storyblok Nuxt Module](https://github.com/storyblok/storyblok-nuxt)
