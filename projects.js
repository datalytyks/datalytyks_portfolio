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
    {
    id: "make-to-n8n-migration",
    title: "Make.com to n8n Migration & Cost Optimization",
    type: "Workflow Migration",
    date: "2025",
    tags: ["n8n", "docker", "digitalocean"],
    
    summary: "Migrated high-volume automation workflows from Make.com to self-hosted n8n, reducing monthly automation costs by over $1,500 while maintaining full functionality and enabling unlimited workflow expansion.",
    
    challenge: "The company's most critical automation scenarios were consuming the majority of Make.com's monthly operation credits, creating an unsustainable cost structure that limited the ability to add new automations. With growing business needs requiring additional workflows, the existing platform's usage-based pricing model was becoming a bottleneck to scaling operations efficiently.",
    
    architecture: [
        { label: "Infrastructure", name: "DigitalOcean Droplet" },
        { label: "Container", name: "Docker Deployment" },
        { label: "Automation", name: "n8n Self-Hosted", highlight: true },
        {
            label: "Active Workflows",
            name: "Converted Scenarios",
            branches: [
                { name: "Make Execution Tracking" },
                { name: "New Call Conversion Logic" }
                ]
        }
    ],
    
    features: [
        { 
            title: "Self-Hosted Infrastructure", 
            description: "Deployed n8n on a DigitalOcean Droplet using Docker, providing full control over the automation environment with predictable fixed monthly costs instead of usage-based billing." 
        },
        { 
            title: "High-Volume Workflow Migration", 
            description: "Successfully converted the two most operation-intensive Make.com scenarios to n8n, maintaining all existing functionality while eliminating per-operation charges." 
        },
        { 
            title: "Scalable Architecture", 
            description: "Built a foundation that supports unlimited workflow additions without incremental cost increases, removing previous constraints on automation expansion." 
        }
    ],
    
    highlights: [
        "Reduced monthly automation costs by over $1,500 (75%+ savings on infrastructure)",
        "Maintained 100% functionality during migration with zero business disruption",
        "Created scalable platform for unlimited future workflow expansion",
        "Established Docker-based deployment for easy updates and maintenance"
        ],
    
    screenshots: [
        { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/vdt_homes_self_hosted_n8n/bulk_data_sync_workflow.png", alt: "Make Execution Tracking", placeholder: "Make Execution Tracking" },
        { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/vdt_homes_self_hosted_n8n/complex_webhook_workflow.png", alt: "New Call Conversion Logic", placeholder: "New Call Conversion Logic" }
        ]
    },
    {
    id: "hookdeck-webhook-implementation",
    title: "Enterprise Hookdeck Infrastructure Implemetation",
    type: "Integration Infrastructure",
    date: "2025",
    tags: ["hookdeck", "fub", "make", "n8n", "retool"],
    
    summary: "Centralized all webhook infrastructure through Hookdeck, establishing a visible, manageable pipeline for platform events and inter-application communications with advanced routing, transformation, and filtering capabilities that extended to partner agencies through automated provisioning.",
    
    challenge: "The business's webhook infrastructure was fragmented and opaque, with direct connections between source applications and destinations making it impossible to debug failed deliveries, manage rate limits, or understand data flow. Without visibility into webhook traffic or the ability to transform payloads in transit, each integration required custom handling, and partner agencies had no standardized way to receive data from the platform, creating operational bottlenecks and integration complexity.",
    
    architecture: [
    { label: "Sources", name: "Platform Events (Follow Up Boss, etc.)" },
    { label: "Ingestion", name: "Hookdeck Endpoints" },
    { 
        label: "Processing", 
        name: "Hookdeck Pipeline", 
        highlight: true,
        branches: [
            { name: "Deduplication" },
            { name: "Transformation" },
            { name: "Filtering" },
            { name: "Delay Logic" },
            { name: "Retry Management" }
        ]
    },
    { 
        label: "Destinations", 
        name: "Multi-Destination Routing",
        branches: [
            { name: "Make.com Workflows" },
            { name: "n8n Automation" },
            { name: "Retool Applications" },
            { name: "Partner Agency Endpoints" }
        ]
    }
],
    
    features: [
        { 
            title: "Unified Webhook Management", 
            description: "Consolidated all webhook traffic from source applications through Hookdeck, providing complete visibility into delivery status, retry logic, and payload inspection for every event flowing through the system." 
        },
        { 
            title: "Advanced Traffic Control", 
            description: "Implemented custom routing rules, concurrency controls, payload transformations, and filtering logic to intelligently direct webhook events to appropriate destinations based on content, version, or business rules." 
        },
        { 
            title: "Automated Partner Provisioning", 
            description: "Built self-service workflow that automatically generates Hookdeck endpoints for partner agencies, allowing them to receive platform data without manual infrastructure setup or credential management." 
        },
        { 
            title: "Bidirectional Integration Support", 
            description: "Enabled webhook communication in both directions between development tools (Make to Retool, Retool to n8n) with consistent monitoring and error handling across all paths." 
        },
        {
            title: "Project-based Seperation",
            description: "Allows for seperation of product-based webhooks or internal webhooks, each with seperate billing and throughput levels. Each project also has seperate integration and API capability."
        }
    ],
    
    highlights: [
        "Centralized 100% of webhook infrastructure for platform events and inter-app communication",
        "Established visible audit trail for all webhook deliveries with automatic retry and failure management",
        "Created automated partner onboarding that provisions webhook endpoints without manual intervention",
        "Implemented flexible routing system supporting multiple simultaneous destinations with custom transformation logic",
        "Seperates product webhooks and internal webhooks while maintaining enterprise-grade control and access"
    ],
    
    screenshots: []
},

    // ============================================
    // ADD NEW PROJECTS BELOW - Copy this template:
    // ============================================
    /*
    {
        id: "project-slug",
        title: "Project Title",
        type: "Project Type", // e.g., "Workflow Automation", "Internal Tool", "Data Pipeline", "Integration System"
        date: "2025",
        tags: ["n8n", "supabase"], // use defined tags from DEFINED_TAGS below
        summary: "Brief 1-2 sentence description of the project.",
        
        challenge: "Describe the problem or challenge this project solved.",
        
        architecture: [
            { label: "Step 1", name: "Component" },
            { label: "Step 2", name: "Component", highlight: true },
            { label: "Step 3", name: "Component" },
            {
            label: "Branch",
            name: "Branch Name",
            branches: [
        { name: "Branch 1" },
        { name: "Branch 2" }
                ]
        }
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
            { url: "", alt: "Description", placeholder: "Coming Soon!" } // empty url shows placeholder
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
    docker: {
        label: "Docker",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/docker-logo.png"
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
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/fub-logo.png"
    },
    monday: {
        label: "Monday.com",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/monday-logo.png"
    },
    postgresql: {
        label: "PostgreSQL",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/postgresql-logo.png"
    },
    bigquery: {
        label: "BigQuery",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/bigquery-logo.jpg"
    },
    zapier: {
        label: "Zapier",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/zapier-logo.png"
    },
    airtable: {
        label: "Airtable",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/airtable-logo.png"
    },
    webflow: {
        label: "Webflow",
        icon: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/software_logos/webflow-logo.png"
    },
    // Add more tags as needed:
    // tagid: { label: "Display Name", icon: "https://example.com/favicon.ico" },
};
