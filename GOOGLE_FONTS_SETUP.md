# Google Fonts Setup - thomascober.com Match

## Overview

Your portfolio now uses the exact same Google Fonts as your reference site (https://thomascober.com/):

## Font Configuration ✅ Complete

### 1. **Lilita One** - Display Font

- **Usage**: Main headings, logo, attention-grabbing text
- **Weight**: 400 (normal)
- **CSS Class**: `font-display`
- **Tailwind Class**: `font-display`

### 2. **Merriweather** - Body Font (Serif)

- **Usage**: Body text, paragraphs, readable content
- **Weights**: 300 (light), 400 (normal), 700 (bold), 900 (heavy)
- **CSS Class**: `font-sans` (set as default sans in Tailwind)
- **Tailwind Class**: `font-sans`

### 3. **PT Mono** - Monospace Font

- **Usage**: Code blocks, technical content, inline code
- **Weight**: 400 (normal)
- **CSS Class**: `font-mono`
- **Tailwind Class**: `font-mono`

## Technical Implementation

### Nuxt Configuration (`nuxt.config.ts`)

```typescript
googleFonts: {
  families: {
    "Lilita One": [400],
    "PT Mono": [400],
    Merriweather: [300, 400, 700, 900],
  },
  display: "swap",
  preconnect: true,
  prefetch: true,
  download: true,
  base64: false,
}
```

### Tailwind Configuration (`tailwind.config.ts`)

```typescript
fontFamily: {
  sans: ["Merriweather", "ui-serif", "Georgia", "serif"],
  mono: ["PT Mono", "ui-monospace", "SFMono-Regular", "monospace"],
  display: ["Lilita One", "ui-sans-serif", "system-ui", "sans-serif"],
}
```

### CSS Utilities (`assets/css/tailwind.css`)

```css
.font-display {
  font-family: "Lilita One", ui-sans-serif, system-ui, sans-serif;
}
```

## Usage Examples

### Components Updated

- **Homepage**: Main title uses `font-display` (Lilita One)
- **Resume Page**: Main title uses `font-display` (Lilita One)
- **Navigation**: Logo uses `font-display` (Lilita One)
- **Body Text**: All paragraphs use `font-sans` (Merriweather)
- **Code**: Any code blocks use `font-mono` (PT Mono)

### HTML Examples

```html
<!-- Display heading -->
<h1 class="font-display text-4xl">Welcome to My Portfolio</h1>

<!-- Body text (default) -->
<p class="text-lg">This uses Merriweather by default</p>

<!-- Explicit serif -->
<p class="font-sans text-base">Merriweather serif text</p>

<!-- Monospace code -->
<code class="font-mono">const hello = 'world';</code>

<!-- Different weights -->
<p class="font-sans font-light">Merriweather Light (300)</p>
<p class="font-sans font-normal">Merriweather Normal (400)</p>
<p class="font-sans font-bold">Merriweather Bold (700)</p>
<p class="font-sans font-black">Merriweather Heavy (900)</p>
```

## Typography Scale

### Headings with Display Font

```html
<h1 class="font-display text-5xl">Main Title</h1>
<h2 class="font-display text-4xl">Section Header</h2>
<h3 class="font-display text-3xl">Subsection</h3>
```

### Body Text with Merriweather

```html
<p class="text-lg leading-relaxed">Large body text</p>
<p class="text-base leading-relaxed">Normal body text</p>
<p class="text-sm leading-relaxed">Small body text</p>
```

### Code with PT Mono

```html
<code class="font-mono text-sm bg-gray-100 px-2 py-1 rounded">inline code</code>
<pre class="font-mono text-sm bg-gray-900 text-white p-4 rounded">
  code block
</pre>
```

## Font Loading

### Performance Features

- **Font Display**: `swap` for immediate text rendering
- **Preconnect**: Faster Google Fonts connection
- **Prefetch**: Preloads font files
- **Download**: Fonts downloaded locally for better performance
- **No Base64**: Cleaner implementation without embedded fonts

### Loading Status

✅ All fonts successfully downloaded and cached locally
✅ Server running at http://localhost:3000
✅ Fonts match exactly with https://thomascober.com/

## Character Support

- **Lilita One**: Latin, Latin Extended
- **Merriweather**: Latin, Latin Extended, Cyrillic, Vietnamese
- **PT Mono**: Latin, Latin Extended, Cyrillic

## Browser Support

All fonts have excellent browser support and include proper fallbacks:

- **Display**: Falls back to system sans-serif fonts
- **Body**: Falls back to Georgia and system serif fonts
- **Mono**: Falls back to system monospace fonts

Your portfolio now has the exact same typographic feel as your reference site!
