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
    type: "Integration System",            // e.g., "Workflow Automation", "Platform Migration", "Integration Infrastructure"
    date: "2025",
    tags: ["n8n", "supabase"],             // Must match keys in DEFINED_TAGS
    summary: "Brief 1-2 sentence description.",
    
    challenge: "Describe the problem this project solved.",
    
    // Optional - for migrations/upgrades/platform comparisons
    comparison: {
        before: {
            title: "Before State",
            points: [
                "Pain point 1",
                "Pain point 2"
            ],
            metrics: {                     // Optional
                label: "Monthly Cost",
                value: "$299/mo"
            }
        },
        after: {
            title: "After State",
            points: [
                "Improvement 1",
                "Improvement 2"
            ],
            metrics: {                     // Optional
                label: "Monthly Cost",
                value: "$48/mo"
            }
        },
        savings: {                         // Optional - shows banner below comparison
            label: "Monthly Savings",
            value: "$251/mo",
            percentage: "84%"              // Optional - shows as badge
        }
    },
    
    // Optional - shows flow diagram
    architecture: [
        { label: "Step 1", name: "Component" },
        { label: "Step 2", name: "Component", highlight: true },
        { 
            label: "Step 3", 
            name: "Component", 
            branches: [                    // Optional - shows branching items below node
                { name: "Branch 1" },
                { name: "Branch 2" }
            ]
        }
    ],
    
    // Optional - key features list
    features: [
        { title: "Feature Name", description: "What this feature does" }
    ],
    
    // Optional - technical highlights
    highlights: [
        "Technical detail or accomplishment"
    ],
    
    // Optional - screenshot gallery
    screenshots: [
        { url: "https://supabase-url.com/image.png", alt: "Description", placeholder: "Label" },
        { url: "", alt: "Description", placeholder: "Placeholder Label" }  // Empty URL shows placeholder
    ]
}
```

### Section Render Order

Sections display in this order (if present):
1. The Challenge
2. Comparison
3. Solution Architecture
4. Key Features Built
5. Technical Highlights
6. Screenshots

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

### For projects.js (Automatic)
The site automatically adds a timestamp to `projects.js` requests, so changes appear immediately after deployment. No action needed.

### For style.css (Manual)
DigitalOcean caches CSS files. When you update `style.css`, bump the version number in `index.html`:

```html
<link rel="stylesheet" href="style.css?v=7">
```

Increment the number (v=7 → v=8, etc.) each time you modify the CSS.

---

## Theming

The site supports dark and light modes via CSS variables. Users can toggle with the button in the top-right corner. Preference is saved to localStorage.

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

All images are hosted in Supabase Storage.

### Tool Icons
**Bucket:** `software_logos`

**URL Pattern:**
```
https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/[filename].png
```

### Project Screenshots
**Bucket:** `portfolio_projects`

**URL Pattern:**
```
https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/[project_folder]/[filename].png
```

### Uploading New Images

1. Go to Supabase Dashboard → Storage → select bucket
2. Upload file (recommended: PNG with transparent background for icons)
3. Copy the public URL
4. Add to `DEFINED_TAGS` or project `screenshots` array in `projects.js`

---

## Deployment

The site auto-deploys from GitHub to DigitalOcean App Platform.

### To Deploy Changes

1. Commit and push to GitHub
2. DO App Platform auto-builds and deploys
3. If CSS changes aren't showing, bump `style.css?v=X` version

### Force Fresh Deploy

If caching issues persist:
1. Go to DO App Platform dashboard
2. Click "Actions" → "Force Rebuild & Deploy"
3. Check "Clear build cache" option

---

## Features

| Feature | Description |
|---------|-------------|
| **Filter by Technology** | Click tag buttons to filter projects |
| **Expandable Project Cards** | Click "View Details" to reveal full details |
| **Dark/Light Mode Toggle** | Top-right corner button, preference saved |
| **Architecture Diagrams** | Visual flow with optional branching |
| **Before/After Comparisons** | Side-by-side with optional cost metrics |
| **Savings Banner** | Highlight cost savings with percentage badge |
| **Screenshot Lightbox** | Click screenshots to view full size |
| **Responsive Design** | Works on mobile and desktop |

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

| Issue | Solution |
|-------|----------|
| CSS changes not appearing | Bump `style.css?v=X` version in `index.html` |
| Projects not rendering | Check browser console for JS errors; validate JSON syntax in `projects.js` |
| Images not loading | Verify Supabase bucket is public; check URL is correct |
| Theme toggle not working | Ensure `style.css` has `[data-theme="light"]` block; bump CSS version |
| PROJECTS is not defined | Syntax error in `projects.js` - check for missing commas |

### Common Syntax Errors in projects.js

**Missing commas between array items:**
```javascript
// Wrong:
points: [
    "Point 1"
    "Point 2"
]

// Correct:
points: [
    "Point 1",
    "Point 2"
]
```

**Missing commas between object properties:**
```javascript
// Wrong:
metrics: {
    label: "Cost"
    value: "$100"
}

// Correct:
metrics: {
    label: "Cost",
    value: "$100"
}
```

---

## Tech Stack

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES5 compatible)
- Google Fonts (Plus Jakarta Sans, JetBrains Mono)
- Supabase Storage (image hosting)
- DigitalOcean App Platform (hosting)
- GitHub (version control + auto-deploy trigger)
