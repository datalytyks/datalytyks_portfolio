# datalytyks Portfolio Site

A personal portfolio site for showcasing low-code/no-code solution development projects. Built with vanilla HTML, CSS, and JavaScript.

**Live site:** [portfolio.datalytyks.com](https://portfolio.datalytyks.com)

---

## File Structure

```
/
├── index.html      # Main page structure + inline JavaScript
├── style.css       # All styling (including dark/light themes)
├── projects.js     # Project data + tool/tag definitions
└── README.md       # This file
```

---

## Quick Reference

### Adding a New Project

Edit `projects.js` and add a new object to the `PROJECTS` array:

```javascript
{
    id: "project-slug",                    // Unique identifier (lowercase, hyphens)
    title: "Project Title",
    type: "Integration System",            // e.g., "Workflow Automation", "Internal Tool", "Data Pipeline"
    date: "2025",
    tags: ["n8n", "supabase"],             // Must match keys in DEFINED_TAGS
    summary: "Brief 1-2 sentence description.",
    
    challenge: "Describe the problem this project solved.",
    
    architecture: [                        // Optional - shows flow diagram
        { label: "Step 1", name: "Component" },
        { label: "Step 2", name: "Component", highlight: true },
        { label: "Step 3", name: "Component" }
    ],
    
    features: [                            // Optional - key features list
        { title: "Feature Name", description: "What this feature does" }
    ],
    
    highlights: [                          // Optional - technical highlights
        "Technical detail or accomplishment"
    ],
    
    screenshots: [                         // Optional - screenshot gallery
        { url: "https://your-supabase-url.com/image.png", alt: "Description", placeholder: "Label" },
        { url: "", alt: "Description", placeholder: "Placeholder Label" }  // Empty URL shows placeholder
    ]
}
```

### Adding a New Tool/Tag

Edit `projects.js` and add to the `DEFINED_TAGS` object:

```javascript
const DEFINED_TAGS = {
    // ... existing tags ...
    
    newtool: {
        label: "Display Name",
        icon: "https://your-supabase-url.com/storage/v1/object/public/software_logos/icon.png"
    }
};
```

**Tag ID rules:**
- Lowercase
- No spaces (use hyphens if needed)
- Must match exactly when used in project `tags` array

---

## Cache Busting

DigitalOcean App Platform caches static files aggressively. When you update `style.css` or `projects.js`, you must bump the version number in `index.html`:

```html
<!-- Update these version numbers when files change -->
<link rel="stylesheet" href="style.css?v=2">
<script src="projects.js?v=2"></script>
```

**When to bump versions:**
- `style.css?v=X` → When you change any styles
- `projects.js?v=X` → When you add/edit projects or tags

---

## Theming

The site supports dark and light modes via CSS variables.

### Dark Theme (Default)
Defined in `:root` in `style.css`

### Light Theme
Defined in `[data-theme="light"]` in `style.css`

### Key CSS Variables

| Variable | Purpose |
|----------|---------|
| `--bg-primary` | Main background color |
| `--bg-secondary` | Secondary background (cards interior) |
| `--bg-card` | Card background |
| `--bg-card-hover` | Card hover state |
| `--accent` | Brand color (#DC213C) |
| `--accent-dim` | Accent with low opacity |
| `--text-primary` | Main text color |
| `--text-secondary` | Secondary text |
| `--text-muted` | Muted/subtle text |
| `--border` | Default border color |
| `--border-accent` | Accent border color |

---

## Image Hosting

All images are hosted in Supabase Storage:

**Bucket:** `software_logos` (for tool icons)

**URL Pattern:**
```
https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/[filename].png
```

### Uploading New Icons

1. Go to Supabase Dashboard → Storage → `software_logos` bucket
2. Upload PNG file (recommended: 64x64 or 128x128, transparent background)
3. Copy the public URL
4. Add to `DEFINED_TAGS` in `projects.js`

---

## Deployment

The site auto-deploys from GitHub to DigitalOcean App Platform.

### To Deploy Changes

1. Commit and push to GitHub
2. DO App Platform auto-builds and deploys
3. If changes aren't showing, bump cache-bust versions (see above)

### Force Fresh Deploy

If caching issues persist:
1. Go to DO App Platform dashboard
2. Click "Actions" → "Force Rebuild & Deploy"
3. Check "Clear build cache" option

---

## Features

- **Filter by Technology** - Click tag buttons to filter projects
- **Expandable Project Cards** - Click cards to reveal full details
- **Dark/Light Mode Toggle** - Top-right corner button
- **Screenshot Lightbox** - Click screenshots to view full size
- **Responsive Design** - Works on mobile and desktop

---

## Customization

### Changing Brand Color

Find and replace `#DC213C` in `style.css` and update the `rgba(220, 33, 60, ...)` values for the accent color variations.

### Changing Fonts

Update the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

And the font-family in `style.css`:
```css
body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Updating Header Info

Edit the header section in `index.html`:
- Name, title, tagline
- Social links (Website, LinkedIn, GitHub, Email)

### Updating Footer CTA

Edit the footer section in `index.html`:
- Calendly link
- Button text

---

## Troubleshooting

### Changes not appearing after deploy
→ Bump the `?v=X` version numbers in `index.html`

### Images not loading
→ Check Supabase bucket is public
→ Verify URL is correct in `DEFINED_TAGS`

### Projects not rendering
→ Check browser console for JavaScript errors
→ Validate JSON syntax in `projects.js`

### Theme toggle not working
→ Check `style.css` has `[data-theme="light"]` block
→ Bump `style.css?v=X` version

---

## Tech Stack

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES5 compatible)
- Google Fonts (Plus Jakarta Sans, JetBrains Mono)
- Supabase Storage (image hosting)
- DigitalOcean App Platform (hosting)
