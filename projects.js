// ============================================
// PROJECTS DATA - Edit this file to add/modify projects
// ============================================

const PROJECTS = [
    {
        id: "vdt-partner-api",
        title: "Real Estate Partner API System",
        type: "Integration System",
        date: "2025",
        tags: ["supabase", "digitalocean"],
        summary: "A comprehensive API integration system enabling external partners to query their partner data in the VDT Homes database. Features secure token-based authentication, intelligent rate limiting, and professional API documentation.",
        
        // Detailed content sections
        challenge: "The client needed a way for external partners to programmatically fetch their data while maintaining data integrity, security, and the ability to receive status updates. The solution needed to leverage the existing database and provide partners with a professional, well-documented API experience.",
        
        // Architecture flow - each node in order
        architecture: [
            { label: "Partner", name: "API Request" },
            { label: "Gateway", name: "Supabase", highlight: true },
            { label: "Processing", name: "Supabase", highlight: true },
            { label: "Storage", name: "Supabase" },
            { label: "Partner", name: "API Response" }
        ],
        
        // Key features - supports **bold** markdown in text
        features: [
            { title: "Token-Based Authentication", description: "Secure API key validation with partner-specific tokens stored in Supabase" },
            { title: "Intelligent Rate Limiting", description: "Per-partner request limits with sliding window tracking to prevent abuse" },
            { title: "Data Validation & Transformation", description: "Comprehensive input validation with proper error responses and CRM field mapping" },
            { title: "Partner Dashboard Data", description: "Database views enabling partners to track their submission history and success rates" },
            { title: "Professional API Documentation", description: "Hosted documentation site with endpoint references, authentication guides, and code examples" }
        ],
        
        // Technical highlights
        highlights: [
            "Supabase Edge Function is the core feature that handles the API call and responds with the data",
            "Supabase PostgreSQL database stores partner credentials, rate limit counters, and lead records with full audit trail",
            "Static documentation site hosted on DigitalOcean App Platform for reliable, fast access",
            "Error handling with descriptive JSON responses following REST best practices"
        ],
        
        // Screenshots - add your Supabase storage URLs here
        screenshots: [
            { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/vdt_homes_api/vdt_homes_api_docs.png", alt: "API Documentation Site", placeholder: "API Documentation Site" },
            { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/vdt_homes_api/vdt_homes_api_db_schema.png", alt: "Supabase Schema", placeholder: "Supabase Schema" },
            { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/vdt_homes_api/vdt_homes_api_function_snippet.png", alt: "Edge Function Snippet", placeholder: "Edge Function Snippet" }
        ]
    },

    // ============================================
    // ADD NEW PROJECTS BELOW - Copy this template:
    // ============================================
    /*
    {
        id: "project-slug",
        title: "Project Title",
        type: "Project Type", // e.g., "Workflow Automation", "Internal Tool", "Data Pipeline", "Integration System"
        date: "2024",
        tags: ["n8n", "supabase"], // use defined tags from DEFINED_TAGS below
        summary: "Brief 1-2 sentence description of the project.",
        
        challenge: "Describe the problem or challenge this project solved.",
        
        architecture: [
            { label: "Step 1", name: "Component" },
            { label: "Step 2", name: "Component", highlight: true },
            { label: "Step 3", name: "Component" }
        ],
        
        features: [
            { title: "Feature Name", description: "What this feature does" },
            { title: "Feature Name", description: "What this feature does" }
        ],
        
        highlights: [
            "Technical detail or accomplishment",
            "Another technical highlight"
        ],
        
        screenshots: [
            { url: "https://your-supabase-url.com/image.png", alt: "Description", placeholder: "Label" },
            { url: "", alt: "Description", placeholder: "Placeholder Label" } // empty url shows placeholder
        ]
    },
    */
];

// ============================================
// DEFINED TAGS - Add new tags here as needed
// ============================================
// Each tag needs: id (lowercase, used in data-tags), label (display name), icon (favicon URL)

const DEFINED_TAGS = {
    n8n: {
        label: "n8n",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/n8n-logo-v2.png"
    },
    supabase: {
        label: "Supabase",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/supabase-logo-icon.png"
    },
    hookdeck: {
        label: "HookDeck",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/hookdeck-logo-v2.png"
    },
    digitalocean: {
        label: "DigitalOcean",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/digitalocean-logo.png"
    },
    retool: {
        label: "Retool",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/retool-logo-v2.png"
    },
    make: {
        label: "Make",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/Make-App-Icon-Circle.png"
    },
    github: {
        label: "GitHub",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/github-logo.png"
    },
    metabase: {
        label: "Metabase",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/metabase-logo.png"
    },
    postman: {
        label: "Postman",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/postman-logo.png"
    },
    fub: {
        label: "Follow Up Boss",
        icon: "https://www.followupboss.com/favicon.ico"
    },
    monday: {
        label: "Monday.com",
        icon: "https://monday.com/favicon.ico"
    },
    discord: {
        label: "Discord",
        icon: "https://discord.com/favicon.ico"
    },
    postgresql: {
        label: "PostgreSQL",
        icon: "https://www.postgresql.org/favicon.ico"
    },
    bigquery: {
        label: "BigQuery",
        icon: "https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/cloud/images/favicons/onecloud/favicon.ico"
    },
    zapier: {
        label: "Zapier",
        icon: "https://zapier.com/favicon.ico"
    },
    airtable: {
        label: "Airtable",
        icon: "https://airtable.com/favicon.ico"
    },
    webflow: {
        label: "Webflow",
        icon: "https://webflow.com/favicon.ico"
    },
    // Add more tags as needed:
    // tagid: { label: "Display Name", icon: "https://example.com/favicon.ico" },
};
