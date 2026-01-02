# datalytyks Portfolio Site

A personal portfolio site for showcasing low-code/no-code solution development projects. Built with vanilla HTML, CSS, and JavaScript.# Datalytyks Portfolio Site

A personal portfolio site for showcasing low-code/no-code solution development projects. Built with vanilla HTML, CSS, and JavaScript.

**Live site:** [portfolio.datalytyks.com](https://portfolio.datalytyks.com)

---

## File Structure

```
/
├── index.html                  # Main page structure + inline JavaScript
├── styles.css                  # All styling (including dark/light themes)
├── projects.js                 # Project data + tool/tag definitions
├── project-intake-form.html    # Project submission form with live preview
├── n8n-demo-component/         # Custom n8n workflow viewer component
│   └── n8n-demo.bundled.js     # Built component with disablenodeclicks support
|   └── README.md               # Documentation for the n8n demo component
└── README.md                   # This file
```

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
| **n8n Workflow Embeds** | Interactive workflow visualizations (collapsible) |
| **Screenshot Gallery** | Click to view full size (collapsible) |
| **Responsive Design** | Works on mobile and desktop |
| **Project Intake Form** | Live preview + automated submission pipeline |

---

## Quick Reference

### Adding a New Project

#### Option 1: Using the Intake Form (Recommended)

1. Open `project-intake-form.html` locally in your browser
2. Fill out the project details
3. Click **👁 Preview** to see how it will look
4. Click **🔄 Refresh Preview** after making changes
5. When satisfied, click **Submit to GitHub** to create a PR

The form integrates with an n8n workflow that:
- Uploads screenshots to Supabase Storage
- Generates polished content via Claude AI
- Creates a GitHub Pull Request automatically

#### Option 2: Manual Entry

Edit `projects.js` and add a new object to the `PROJECTS` array:

```javascript
{
    id: "project-slug",                    // Unique identifier (lowercase, hyphens)
    title: "Project Title",
    type: "Integration System",            // e.g., "Workflow Automation", "Platform Migration"
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
    
    // Optional - screenshot gallery (collapsible)
    screenshots: [
        { url: "https://supabase-url.com/image.png", alt: "Description", placeholder: "Label" }
    ],
    
    // Optional - n8n workflow embeds (collapsible)
    workflows: [
        {
            title: "Workflow Name",
            data: "{\"nodes\":[...],\"connections\":{...}}"  // Escaped JSON string
        }
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
6. n8n Workflows (collapsible)
7. Screenshots (collapsible)

### Adding n8n Workflow Embeds

#### Using the Intake Form (Recommended)

1. Export your workflow from n8n (Download as JSON)
2. Upload the JSON file in the "n8n Workflows" section of the intake form
3. Add a title for each workflow
4. The form automatically **sanitizes** the workflow data (see Security below)

#### Using the Export Tool

If adding workflows to an existing project:

1. Open `project-intake-form.html`
2. Upload your workflow JSON file(s)
3. Add titles (one per line)
4. Click **📋 Export Workflows Only**
5. Copy the output and paste into your project in `projects.js`

#### Workflow Security (Sanitization)

The intake form automatically strips sensitive data from workflows before submission:

**Kept (for visual rendering):**
- `id`, `name`, `type`, `typeVersion`, `position`, `disabled`
- `connections` (how nodes link together)

**Removed (sensitive):**
- `parameters` (SQL queries, API endpoints, HTTP bodies, etc.)
- `credentials` (credential references)
- `webhookId`, `onError`, and other config

This means:
- ✅ Workflows render visually with all nodes and connections
- ✅ Users can pan/zoom and click nodes
- ✅ Node detail panels show empty content (no sensitive data exposed)
- ✅ Custom component keeps interactions inside the workflow box (no fullscreen takeover)

#### Manual Entry

The workflow data must be a properly escaped JSON string containing sanitized `nodes` and `connections`:

```javascript
workflows: [
    {
        title: "My Workflow",
        data: "{\"nodes\":[{\"id\":\"1\",\"name\":\"Start\",\"type\":\"n8n-nodes-base.start\",\"position\":[250,300]}],\"connections\":{}}"
    }
]
```

**Important:** Always use the Export tool to ensure proper sanitization and escaping. Manual entry risks exposing sensitive data.

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

## Project Intake Form

The intake form (`project-intake-form.html`) provides a streamlined way to add new projects.

### Features

| Feature | Description |
|---------|-------------|
| **Live Preview** | See exactly how your project will look before submitting |
| **Refresh Preview** | Update preview after making changes |
| **Workflow Preview** | Interactive n8n workflow visualization |
| **Screenshot Preview** | See uploaded images in the preview |
| **Export Workflows** | Generate workflow code for existing projects |
| **Dark/Light Theme** | Matches portfolio site styling |

### Buttons

| Button | Action |
|--------|--------|
| **👁 Preview** | Render project card locally |
| **🔄 Refresh Preview** | Re-render with updated form data |
| **📋 Export Workflows Only** | Output workflow array code for copy/paste |
| **Submit to GitHub** | Send to n8n webhook → full automation pipeline |

### n8n Automation Pipeline

When you click "Submit to GitHub", the form sends data to an n8n webhook that:

1. **Uploads Screenshots** → Supabase Storage (`portfolio_projects` bucket)
2. **Trims Workflows** → Extracts only `nodes` and `connections`
3. **Generates Content** → Claude AI enhances summary, challenge, architecture
4. **Merges Workflows** → Adds properly escaped workflow data
5. **Creates PR** → New branch + commit + Pull Request on GitHub
6. **Returns Link** → PR URL displayed in form

After merging the PR, DigitalOcean auto-deploys the updated site.

---

## Cache Busting

### For projects.js (Automatic)
The site automatically adds a timestamp to `projects.js` requests, so changes appear immediately after deployment. No action needed.

### For style.css (Manual)
DigitalOcean caches CSS files. When you update `style.css`, bump the version number in `index.html`:

```html
<link rel="stylesheet" href="style.css?v=10">
```

Increment the number each time you modify the CSS.

---

## Theming

The site supports dark and light modes via CSS variables. Users can toggle with the button in the top-right corner. Preference is saved to localStorage.

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
https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/[project-slug]/[filename].png
```

Screenshots are automatically uploaded to project-specific folders when using the intake form.

---

## Deployment

The site auto-deploys from GitHub to DigitalOcean App Platform.

### Automated Workflow

```
Intake Form → n8n Webhook → Supabase + Claude + GitHub PR → Merge → Auto-Deploy
```

### Manual Deploy

1. Commit and push to GitHub
2. DO App Platform auto-builds and deploys
3. If CSS changes aren't showing, bump `style.css?v=X` version

### Force Fresh Deploy

If caching issues persist:
1. Go to DO App Platform dashboard
2. Click "Actions" → "Force Rebuild & Deploy"
3. Check "Clear build cache" option

---

## Customization

### Changing Brand Color

Find and replace `#DC213C` in `style.css` and update the `rgba(220, 33, 60, ...)` values for the accent color variations.

### Changing Fonts

Update the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
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

## Custom n8n Demo Component

The site uses a custom fork of the [n8n-demo-component](https://github.com/n8n-io/n8n-demo-webcomponent) located in `/n8n-demo-component/`.

### Custom Features

| Attribute | Default | Description |
|-----------|---------|-------------|
| `disablenodeclicks` | `"false"` | When `"true"`, prevents node clicks from triggering fullscreen mode |

This keeps all interactions (pan, zoom, node clicks) contained within the workflow viewer box instead of taking over the entire page.

### Rebuilding the Component

If you need to modify the component:

```bash
cd n8n-demo-component
npm install
npm run build
```

This generates a new `n8n-demo.bundled.js`.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| CSS changes not appearing | Bump `styles.css?v=X` version in `index.html` |
| Projects not rendering | Check browser console for JS errors; validate JSON syntax in `projects.js` |
| Images not loading | Verify Supabase bucket is public; check URL is correct |
| n8n workflow not rendering | Check for escape issues in workflow `data` string; use the Export tool |
| n8n workflow shows sensitive data | Re-export using the intake form's Export tool to sanitize |
| Theme toggle not working | Ensure `styles.css` has `[data-theme="light"]` block; bump CSS version |
| PROJECTS is not defined | Syntax error in `projects.js` - check for missing commas |
| Collapsible sections not working | Check for JS errors; ensure `toggleCollapsible` function exists |

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

**Workflow data not properly escaped:**
```javascript
// Wrong - single quotes break with internal quotes:
data: '{"nodes":[{"name":"Test's Node"}]}'

// Correct - use escaped double quotes:
data: "{\"nodes\":[{\"name\":\"Test's Node\"}]}"
```

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES5) |
| **Fonts** | Google Fonts (Plus Jakarta Sans, JetBrains Mono) |
| **Workflow Embeds** | n8n Demo Component |
| **Image Hosting** | Supabase Storage |
| **AI Processing** | Claude API (via n8n) |
| **Automation** | n8n (self-hosted) |
| **Hosting** | DigitalOcean App Platform |
| **Version Control** | GitHub (auto-deploy trigger) |

---

## License

Private repository - All rights reserved.
