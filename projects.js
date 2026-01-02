// ============================================
// DEFINED TAGS - Add new tags here as needed
// ============================================

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
    }
};

// ============================================
// ADD NEW PROJECTS BELOW - Copy this template:
// ============================================
    /*
    {
    id: "project-slug",
    title: "Project Title",
    type: "Project Type",  // e.g., "Workflow Automation", "Platform Migration", "Integration System"
    date: "2025",
    tags: ["n8n", "supabase"],  // Must match keys in DEFINED_TAGS
    summary: "Brief 1-2 sentence description.",

    // Detailed content sections
    challenge: "Describe the problem or challenge this project solved.",
    
    // Optional - for migrations/upgrades/comparisons
    comparison: {
        before: {
            title: "Before State",
            points: [
                "Pain point 1",
                "Pain point 2"
            ],
            metrics: {  // Optional
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
            metrics: {  // Optional
                label: "Monthly Cost",
                value: "$48/mo"
            }
        },
        savings: {  // Optional
            label: "Monthly Savings",
            value: "$251/mo",
            percentage: "84%"
        }
    },
    
    // Optional - shows flow diagram
    architecture: [
        { label: "Step 1", name: "Component" },
        { label: "Step 2", name: "Component", highlight: true },
        { label: "Step 3", name: "Component", branches: [
            { name: "Branch 1" },
            { name: "Branch 2" }
        ]}
    ],
    
    // Optional - key features list
    features: [
        { title: "Feature Name", description: "What this feature does" }
    ],
    
    // Optional - technical highlights
    highlights: [
        "Technical detail or accomplishment"
    ],

    //Optional - n8n workflow renders
    "workflows":[
    {
      "title": "Daily Automation Workflow",
      "data": { "nodes": [...], "connections": {...} }
    }
    ],
    
    // Optional - screenshot gallery
    screenshots: [
        { url: "https://supabase-url.com/image.png", alt: "Description", placeholder: "Label" },
        { url: "", alt: "Description", placeholder: "Placeholder Label" }  // Empty URL shows placeholder
    ]
}
    */

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
        
        challenge: "The client needed a way for external partners to programmatically fetch their data while maintaining data integrity, security, and the ability to receive status updates. The solution needed to leverage the existing database and provide partners with a professional, well-documented API experience.",
        
        architecture: [
            { label: "Partner", name: "API Request" },
            { label: "Gateway", name: "Supabase", highlight: true },
            { label: "Processing", name: "Supabase", highlight: true },
            { label: "Storage", name: "Supabase" },
            { label: "Partner", name: "API Response" }
        ],
        
        features: [
            { title: "Token-Based Authentication", description: "Secure API key validation with partner-specific tokens stored in Supabase" },
            { title: "Intelligent Rate Limiting", description: "Per-partner request limits with sliding window tracking to prevent abuse" },
            { title: "Data Validation & Transformation", description: "Comprehensive input validation with proper error responses and CRM field mapping" },
            { title: "Partner Dashboard Data", description: "Database views enabling partners to track their submission history and success rates" },
            { title: "Professional API Documentation", description: "Hosted documentation site with endpoint references, authentication guides, and code examples" }
        ],
        
        highlights: [
            "Supabase Edge Function is the core feature that handles the API call and responds with the data",
            "Supabase PostgreSQL database stores partner credentials, rate limit counters, and lead records with full audit trail",
            "Static documentation site hosted on DigitalOcean App Platform for reliable, fast access",
            "Error handling with descriptive JSON responses following REST best practices"
        ],
        
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
        tags: ["make", "n8n", "docker", "digitalocean"],
        
        summary: "Migrated high-volume automation workflows from Make.com to self-hosted n8n, reducing monthly automation costs by over $1,500 while maintaining full functionality and enabling unlimited workflow expansion.",
        
        challenge: "The company's most critical automation scenarios were consuming the majority of Make.com's monthly operation credits, creating an unsustainable cost structure that limited the ability to add new automations. With growing business needs requiring additional workflows, the existing platform's usage-based pricing model was becoming a bottleneck to scaling operations efficiently.",
        
        comparison: {
            before: {
                title: "Make.com",
                points: [
                    "Usage-based pricing per operation",
                    "Limited to platform's available integrations",
                    "No direct coding ability outside of Enterprise plan",
                    "Vendor-controlled infrastructure"
                ],
                metrics: {
                    label: "Monthly Cost",
                    value: "$2,200/mo"
                }
            },
            after: {
                title: "n8n Self-Hosted",
                points: [
                    "Unlimited operations at fixed cost",
                    "Full code access for custom integrations",
                    "Fully available code nodes for both JS or Python",
                    "Self-managed infrastructure with full control"
                ],
                metrics: {
                    label: "Monthly Cost",
                    value: "$200/mo"
                }
            },
            savings: {
                label: "Monthly Savings",
                value: "$2000/mo",
                percentage: "91%"
            }
        },
        
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
        ],
        
        workflows: [
            {
                title: "Make Execution Tracking",
                data: "{\"nodes\":[{\"id\":\"018117e6-6bab-44d6-9a3b-544bbd58daf8\",\"name\":\"Schedule Trigger\",\"type\":\"n8n-nodes-base.scheduleTrigger\",\"typeVersion\":1,\"position\":[-640,224],\"disabled\":false},{\"id\":\"85179e7d-c290-483c-8cda-da633c9c1d42\",\"name\":\"Get All Make Scenarios\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[-416,304],\"disabled\":false},{\"id\":\"2058d394-0953-4235-8bfc-cb7a4ff73ea7\",\"name\":\"When clicking \\\"Execute Workflow\\\"\",\"type\":\"n8n-nodes-base.manualTrigger\",\"typeVersion\":1,\"position\":[-640,384],\"disabled\":true},{\"id\":\"f369d62f-7b4e-4b12-a197-36a24c587e6d\",\"name\":\"List all scenarios\",\"type\":\"n8n-nodes-base.itemLists\",\"typeVersion\":2.1,\"position\":[-240,304],\"disabled\":false},{\"id\":\"ce03e609-990a-45d1-ae39-e32b5d6a1ab9\",\"name\":\"No more results?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1744,928],\"disabled\":false},{\"id\":\"67f3ee39-39f4-4142-b424-e2d4b6dbd006\",\"name\":\"Merge message batches\",\"type\":\"n8n-nodes-base.code\",\"typeVersion\":1,\"position\":[1968,848],\"disabled\":false},{\"id\":\"07d251a7-3e2a-49cf-8200-f98e780b3461\",\"name\":\"Split Out body\",\"type\":\"n8n-nodes-base.splitOut\",\"typeVersion\":1,\"position\":[2192,784],\"disabled\":false},{\"id\":\"5c729a78-2d3b-4996-ab31-7cef7ffd4149\",\"name\":\"Get each next page\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[1568,928],\"disabled\":false},{\"id\":\"b56d2132-f26e-4793-b9f1-09329f9c4bff\",\"name\":\"Get initial page\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[592,784],\"disabled\":false},{\"id\":\"487e886d-d928-4021-821d-dade7027c1e4\",\"name\":\"Add scenario logs to tracking table\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.2,\"position\":[2544,784],\"disabled\":false},{\"id\":\"fc3597c0-f207-4c8a-b203-d08eaf3b4012\",\"name\":\"Get blueprint\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[400,384],\"disabled\":false},{\"id\":\"4e517f6b-a810-473e-a8d3-56e89bdb62b8\",\"name\":\"Single page of results?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1344,784],\"disabled\":false},{\"id\":\"3f6334e9-c323-48dd-a958-6460b5751974\",\"name\":\"Loop Over Items\",\"type\":\"n8n-nodes-base.splitInBatches\",\"typeVersion\":3,\"position\":[0,304],\"disabled\":false},{\"id\":\"b41fa315-e106-475c-be18-1d082851ba42\",\"name\":\"Loop Over Items.1\",\"type\":\"n8n-nodes-base.splitInBatches\",\"typeVersion\":3,\"position\":[192,704],\"disabled\":false},{\"id\":\"f593c15e-6c25-4c06-9ad0-db65596f09b5\",\"name\":\"Logs to load?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1168,784],\"disabled\":false},{\"id\":\"84cad8de-0ed6-4286-b037-06ca2ab765f9\",\"name\":\"Type = Auto\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[2368,784],\"disabled\":false},{\"id\":\"1331d12c-4cfd-4df5-b3a1-535ae6c8d598\",\"name\":\"Complete route.1\",\"type\":\"n8n-nodes-base.noOp\",\"typeVersion\":1,\"position\":[224,224],\"disabled\":false},{\"id\":\"899e61d4-d0d8-4a65-a16c-3147db2defe5\",\"name\":\"Continue route.2\",\"type\":\"n8n-nodes-base.noOp\",\"typeVersion\":1,\"position\":[2368,1008],\"disabled\":false},{\"id\":\"29bfe5af-6e27-405c-99ac-afb3bf1eea84\",\"name\":\"Wait for ratelimit reset.1\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[960,912],\"disabled\":false},{\"id\":\"f56216db-0c2f-4ad1-ae25-80ba1eaedc37\",\"name\":\"Wait for ratelimit reset.2\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[2160,1104],\"disabled\":false},{\"id\":\"3a64a2a8-084a-4dee-a516-a35439545ca4\",\"name\":\"Set Variables\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.2,\"position\":[0,704],\"disabled\":false},{\"id\":\"b98426b5-e2ea-4b4c-94e7-08ed0e2faf5b\",\"name\":\"Edit Fields\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[400,624],\"disabled\":false},{\"id\":\"b4c1cd46-10f6-4938-94b1-e3829627fc53\",\"name\":\"Code\",\"type\":\"n8n-nodes-base.code\",\"typeVersion\":2,\"position\":[-16,1440],\"disabled\":false},{\"id\":\"ab1ab3da-6418-4b44-82dc-f64cf41ac79a\",\"name\":\"Additional requests allowed?.2\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1968,1008],\"disabled\":false},{\"id\":\"b95929e6-9312-4cc6-b497-85a66f585602\",\"name\":\"Additional requests allowed?.1\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[752,784],\"disabled\":false},{\"id\":\"6a121b65-3321-41cb-9f98-469d41e7e6d2\",\"name\":\"Upsert Scenario tracker table.1\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.2,\"position\":[0,0],\"disabled\":false},{\"id\":\"e0cbe4e6-37e8-4e66-91d4-b4c411b22b6f\",\"name\":\"Update scenario tracker table.2\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.2,\"position\":[592,384],\"disabled\":false},{\"id\":\"b3e7f350-65f1-4efc-afd0-5a28129f1bb4\",\"name\":\"Postgres\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[176,1200],\"disabled\":false},{\"id\":\"794a219a-651c-4431-8d18-104eece61a93\",\"name\":\"Filter\",\"type\":\"n8n-nodes-base.filter\",\"typeVersion\":2.2,\"position\":[-16,1200],\"disabled\":false},{\"id\":\"8c177713-fa3a-4a90-b4a1-a07bb91906d8\",\"name\":\"Edit Fields1\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[528,1200],\"disabled\":false},{\"id\":\"26e1216c-2bbf-4591-b0ca-6c63ba12a843\",\"name\":\"Aggregate\",\"type\":\"n8n-nodes-base.aggregate\",\"typeVersion\":1,\"position\":[352,1200],\"disabled\":false},{\"id\":\"3a5cadab-877f-4776-8156-b90ee97d14bf\",\"name\":\"Wait 5 seconds.2\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[400,784],\"disabled\":false},{\"id\":\"4740b350-f232-4e19-bc80-04d8158569eb\",\"name\":\"Wait 5 secons.1\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[224,384],\"disabled\":false}],\"connections\":{\"Schedule Trigger\":{\"main\":[[{\"node\":\"Get All Make Scenarios\",\"type\":\"main\",\"index\":0}]]},\"Get All Make Scenarios\":{\"main\":[[{\"node\":\"List all scenarios\",\"type\":\"main\",\"index\":0}]]},\"When clicking \\\"Execute Workflow\\\"\":{\"main\":[[{\"node\":\"Get All Make Scenarios\",\"type\":\"main\",\"index\":0}]]},\"List all scenarios\":{\"main\":[[{\"node\":\"Upsert Scenario tracker table.1\",\"type\":\"main\",\"index\":0},{\"node\":\"Loop Over Items\",\"type\":\"main\",\"index\":0},{\"node\":\"Set Variables\",\"type\":\"main\",\"index\":0}]]},\"No more results?\":{\"main\":[[{\"node\":\"Merge message batches\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Additional requests allowed?.2\",\"type\":\"main\",\"index\":0}]]},\"Merge message batches\":{\"main\":[[{\"node\":\"Split Out body\",\"type\":\"main\",\"index\":0}]]},\"Split Out body\":{\"main\":[[{\"node\":\"Type = Auto\",\"type\":\"main\",\"index\":0}]]},\"Get each next page\":{\"main\":[[{\"node\":\"No more results?\",\"type\":\"main\",\"index\":0}]]},\"Get initial page\":{\"main\":[[{\"node\":\"Additional requests allowed?.1\",\"type\":\"main\",\"index\":0}]]},\"Add scenario logs to tracking table\":{\"main\":[[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Get blueprint\":{\"main\":[[{\"node\":\"Update scenario tracker table.2\",\"type\":\"main\",\"index\":0}]]},\"Single page of results?\":{\"main\":[[{\"node\":\"Split Out body\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Get each next page\",\"type\":\"main\",\"index\":0}]]},\"Loop Over Items\":{\"main\":[[{\"node\":\"Complete route.1\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait 5 secons.1\",\"type\":\"main\",\"index\":0}]]},\"Loop Over Items.1\":{\"main\":[[{\"node\":\"Edit Fields\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait 5 seconds.2\",\"type\":\"main\",\"index\":0}]]},\"Logs to load?\":{\"main\":[[{\"node\":\"Single page of results?\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Type = Auto\":{\"main\":[[{\"node\":\"Add scenario logs to tracking table\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Continue route.2\":{\"main\":[[{\"node\":\"Get each next page\",\"type\":\"main\",\"index\":0}]]},\"Wait for ratelimit reset.1\":{\"main\":[[{\"node\":\"Get initial page\",\"type\":\"main\",\"index\":0}]]},\"Wait for ratelimit reset.2\":{\"main\":[[{\"node\":\"Continue route.2\",\"type\":\"main\",\"index\":0}]]},\"Set Variables\":{\"main\":[[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Additional requests allowed?.2\":{\"main\":[[{\"node\":\"Continue route.2\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait for ratelimit reset.2\",\"type\":\"main\",\"index\":0}]]},\"Additional requests allowed?.1\":{\"main\":[[{\"node\":\"Logs to load?\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait for ratelimit reset.1\",\"type\":\"main\",\"index\":0}]]},\"Update scenario tracker table.2\":{\"main\":[[{\"node\":\"Loop Over Items\",\"type\":\"main\",\"index\":0}]]},\"Postgres\":{\"main\":[[{\"node\":\"Aggregate\",\"type\":\"main\",\"index\":0}]]},\"Filter\":{\"main\":[[{\"node\":\"Postgres\",\"type\":\"main\",\"index\":0}]]},\"Aggregate\":{\"main\":[[{\"node\":\"Edit Fields1\",\"type\":\"main\",\"index\":0}]]},\"Wait 5 seconds.2\":{\"main\":[[{\"node\":\"Get initial page\",\"type\":\"main\",\"index\":0}]]},\"Wait 5 secons.1\":{\"main\":[[{\"node\":\"Get blueprint\",\"type\":\"main\",\"index\":0}]]}}}"
            },
            {
                title: "New Call Conversion Logic",
                data: "{\"nodes\":[{\"id\":\"5002a962-3f23-4f33-90ad-1a5997eae790\",\"name\":\"HD - web_brEYWXKGpAvg\",\"type\":\"n8n-nodes-base.webhook\",\"typeVersion\":2,\"position\":[-4464,688],\"disabled\":false},{\"id\":\"e4adc678-aaa4-40be-b84b-f8cbaabd4701\",\"name\":\"Sticky Note\",\"type\":\"n8n-nodes-base.stickyNote\",\"typeVersion\":1,\"position\":[-4464,1376],\"disabled\":false},{\"id\":\"c5cee08f-b92e-4c72-a571-406dc5349859\",\"name\":\"Trusted Rate?\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-3296,672],\"disabled\":false},{\"id\":\"e25dedcf-da1d-4dd3-a947-dca024410ec3\",\"name\":\"Lt Call ID\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[-3632,960],\"disabled\":false},{\"id\":\"8e1e94f3-ebf7-4808-88eb-714d8b09ba21\",\"name\":\"Outgoing/Not 0\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-2960,688],\"disabled\":false},{\"id\":\"01da9651-6eb5-4fc6-9432-44996b8f72d1\",\"name\":\"FUB - Get The Contact\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-2784,688],\"disabled\":false},{\"id\":\"0225e92c-284d-4bac-9d0e-e56365e67215\",\"name\":\"No Recruit\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-2624,688],\"disabled\":false},{\"id\":\"1e49773d-0d40-4d0e-aa2e-e54faa74584a\",\"name\":\"FUB - Remove Call/Stage Change Tags\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-2256,400],\"disabled\":false},{\"id\":\"7da4c689-1266-4aa3-b24a-599ac82da0e8\",\"name\":\"Get lead, user, next call attempt\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[-1568,688],\"disabled\":false},{\"id\":\"f29a2c39-d78c-4126-9d41-14fc7e12cb02\",\"name\":\"Create Lead\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[-1040,528],\"disabled\":false},{\"id\":\"81713b99-241f-4e60-ae06-68c9c120f94f\",\"name\":\"Set Multiple Variables\",\"type\":\"n8n-nodes-base.code\",\"typeVersion\":2,\"position\":[-880,688],\"disabled\":false},{\"id\":\"2e55edbb-2e5c-4b4d-acb1-67e37d57c87f\",\"name\":\"FUB - Update Contact\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-704,688],\"disabled\":false},{\"id\":\"f99d5310-30cc-4cfc-9807-6c6c80008752\",\"name\":\"Update User and Lead\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[-368,688],\"disabled\":false},{\"id\":\"4cfbb2c6-7a1f-4456-acfa-08e0e30e89b7\",\"name\":\"Trigger Make \\\"LO Appointment Jot Link\\\" Scenario\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[400,1008],\"disabled\":false},{\"id\":\"b0d64e1b-debe-4cf3-a23f-7eef66d85c96\",\"name\":\"NULL on phone\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[400,832],\"disabled\":false},{\"id\":\"a2b7370f-8d86-475c-b12a-4b60b0e46240\",\"name\":\"Update ISA Level\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[400,448],\"disabled\":false},{\"id\":\"cac0f636-ad92-4c62-ad7e-d750e9637eba\",\"name\":\"Slybroadcast - Send a campaign\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[576,288],\"disabled\":true},{\"id\":\"934b93e5-f1bb-47d1-829f-8f180f7d84ac\",\"name\":\"Voicemaker - Create voice\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[400,288],\"disabled\":true},{\"id\":\"044b9f1e-600c-4071-b60d-768e95fea907\",\"name\":\"Update Lead\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[1840,384],\"disabled\":false},{\"id\":\"a885df69-767b-4526-b5f0-f18ce99c2511\",\"name\":\"Update Lead1\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[1488,1024],\"disabled\":true},{\"id\":\"20500d5b-89f8-4356-9e55-4f457799801b\",\"name\":\"When clicking ‘Test workflow’\",\"type\":\"n8n-nodes-base.manualTrigger\",\"typeVersion\":1,\"position\":[-4176,1248],\"disabled\":true},{\"id\":\"d3ae3c31-5a49-40a9-9de1-040eca77df23\",\"name\":\"FUB - Update a contact\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-1872,576],\"disabled\":false},{\"id\":\"206a9305-bce2-44cb-8c05-9ac6bc0d63b9\",\"name\":\"FUB - Get Custom Fields\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-4016,1248],\"disabled\":false},{\"id\":\"e2fd9bc4-38e9-4340-b886-e0e43dba6a73\",\"name\":\"Aggregate\",\"type\":\"n8n-nodes-base.aggregate\",\"typeVersion\":1,\"position\":[-3856,1248],\"disabled\":false},{\"id\":\"ad23d12d-d234-4a0c-badf-de367b382ef1\",\"name\":\"FUB - Update Contact.2\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1664,208],\"disabled\":false},{\"id\":\"36141dce-4cc2-4bd7-b62e-84ea770641b4\",\"name\":\"FUB - Search Tasks.1\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1840,208],\"disabled\":false},{\"id\":\"1454214d-136d-4f16-bcc7-491bdba3e3e9\",\"name\":\"FUB - Delete a task.1\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[2384,208],\"disabled\":false},{\"id\":\"7c91452c-ff41-4b30-b23f-6cea88df0a47\",\"name\":\"FUB - Update Contact.3\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1664,384],\"disabled\":false},{\"id\":\"96c1f361-4165-4b31-8ecf-3e205bf5b166\",\"name\":\"FUB - Search Tasks.2\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[2016,384],\"disabled\":false},{\"id\":\"4f6d4569-6eb1-4a11-86dc-f30352287689\",\"name\":\"Split Out.2\",\"type\":\"n8n-nodes-base.splitOut\",\"typeVersion\":1,\"position\":[2384,384],\"disabled\":false},{\"id\":\"db697e63-43fb-4b8c-b28b-ed1952a45bc2\",\"name\":\"Split Out.1\",\"type\":\"n8n-nodes-base.splitOut\",\"typeVersion\":1,\"position\":[2208,208],\"disabled\":false},{\"id\":\"6b19517a-3388-4a7d-87cc-daa91a6b7a3f\",\"name\":\"Sticky Note1\",\"type\":\"n8n-nodes-base.stickyNote\",\"typeVersion\":1,\"position\":[-4464,1152],\"disabled\":false},{\"id\":\"7ad91c52-fab3-44b9-b9c3-01eed0b2b6c4\",\"name\":\"FUB - Update Contact.4\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1664,592],\"disabled\":false},{\"id\":\"434878b7-901b-4778-9ad8-497374bd4887\",\"name\":\"FUB - Update Contact.5\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1840,592],\"disabled\":false},{\"id\":\"633c81e0-3ade-4dfb-983d-b562eabaffa7\",\"name\":\"FUB - Update Contact.6\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1664,784],\"disabled\":false},{\"id\":\"c8e04487-f769-4fca-9323-7ebad10ee491\",\"name\":\"FUB - Update Contact.9\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1664,1024],\"disabled\":true},{\"id\":\"f5b2a919-2d16-44be-a684-3f7f5bf804a4\",\"name\":\"FUB - Search Tasks.3\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1840,1024],\"disabled\":true},{\"id\":\"b616d069-7708-43a3-a702-82e334577875\",\"name\":\"Split Out.3\",\"type\":\"n8n-nodes-base.splitOut\",\"typeVersion\":1,\"position\":[2208,1024],\"disabled\":true},{\"id\":\"94c8cc03-8c30-4d57-b83d-459577d41fb4\",\"name\":\"FUB - Delete a task.3\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[2384,1024],\"disabled\":true},{\"id\":\"e1e6f837-33c7-48ef-969d-36a6c8d94860\",\"name\":\"FUB - Search Tasks.4\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[2864,688],\"disabled\":false},{\"id\":\"b30a6eca-aa8b-4cd0-ab37-d8295d080901\",\"name\":\"Split Out.4\",\"type\":\"n8n-nodes-base.splitOut\",\"typeVersion\":1,\"position\":[3568,576],\"disabled\":false},{\"id\":\"1e9bbc73-475f-4e1c-9de5-4c9a6a604a6b\",\"name\":\"FUB - Create a note.2\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[2016,592],\"disabled\":false},{\"id\":\"760103d4-84b6-449c-b07f-5d21427f5260\",\"name\":\"FUB - Create a note.3\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[1840,784],\"disabled\":false},{\"id\":\"64c211c3-c2ed-42af-8b56-4e8cb241f402\",\"name\":\"FUB - Create a note.1\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[752,288],\"disabled\":true},{\"id\":\"8fc97191-ef4e-4af3-95b1-acc9182533c9\",\"name\":\"FUB - Get All Stages\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-4144,688],\"disabled\":false},{\"id\":\"458d659c-a2ce-4c60-8648-1e3c79e519ce\",\"name\":\"Resource IDs Exist\",\"type\":\"n8n-nodes-base.filter\",\"typeVersion\":2.2,\"position\":[-4304,688],\"disabled\":false},{\"id\":\"e6bd502d-68c1-4b21-90c2-e1a3b59f5d12\",\"name\":\"FUB - Get All Users\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-3968,688],\"disabled\":false},{\"id\":\"695aa441-e296-4051-9e1a-37731d64f272\",\"name\":\"Code\",\"type\":\"n8n-nodes-base.code\",\"typeVersion\":2,\"position\":[-3840,1408],\"disabled\":false},{\"id\":\"9ed568cc-e644-4fef-8286-49657983dc08\",\"name\":\"Call/Stage Change or 'Dustin'\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-2448,688],\"disabled\":false},{\"id\":\"0977d4f0-37d3-4680-a662-968b34102031\",\"name\":\"Lead does NOT exist\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-1232,688],\"disabled\":false},{\"id\":\"109073f6-7d62-4a25-a768-40fddaa503c7\",\"name\":\"Main logic\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[112,624],\"disabled\":false},{\"id\":\"9eb7b9be-26c7-48aa-a769-24e70db42744\",\"name\":\"Lead or no answer\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[1488,304],\"disabled\":false},{\"id\":\"38a70a28-38a4-4293-b323-7d4b063d7b43\",\"name\":\"Failed Connect\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[1488,688],\"disabled\":false},{\"id\":\"61679bac-2a1f-489a-8a64-1971b19e9b77\",\"name\":\"Task Actions\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[3728,560],\"disabled\":false},{\"id\":\"c34eb5e4-0b6a-49bc-a484-8b6fa76cfa44\",\"name\":\"SQL Update Empty?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2.2,\"position\":[-208,688],\"disabled\":false},{\"id\":\"0234d6f4-3fd8-4c1c-9cee-8beceb863186\",\"name\":\"User is Dustin Shaffer\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-2048,400],\"disabled\":true},{\"id\":\"d4b9720b-5a9e-4bbe-b3fd-0c85372b90bf\",\"name\":\"Delete?.1\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2.2,\"position\":[2016,208],\"disabled\":false},{\"id\":\"a6c12e0f-152b-4d40-8ed6-ae7f7f138c41\",\"name\":\"Secondary Logic\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[1168,640],\"disabled\":false},{\"id\":\"e5d194b0-e879-40a5-b3d7-9e177716b012\",\"name\":\"Test account and null username logic\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[-3632,656],\"disabled\":false},{\"id\":\"77c7a23e-b3db-418f-ac02-8a59013bf3e9\",\"name\":\"Wait 1 sec\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1.1,\"position\":[-3456,832],\"disabled\":false},{\"id\":\"db4dae58-3f89-479d-9bfc-48d621d08dae\",\"name\":\"FUB - Get The Call\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[-3808,688],\"disabled\":false},{\"id\":\"5173ea66-1b5a-4412-999c-027108b7f6da\",\"name\":\"End flow.1\",\"type\":\"n8n-nodes-base.noOp\",\"typeVersion\":1,\"position\":[-2448,912],\"disabled\":false},{\"id\":\"c9b47c1b-9b2f-4e3e-924f-233228ff514a\",\"name\":\"Build SQL query\",\"type\":\"n8n-nodes-base.code\",\"typeVersion\":2,\"position\":[-528,688],\"disabled\":false},{\"id\":\"cc583cfe-ad1e-4cb2-b23b-c09629066652\",\"name\":\"Log Call\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[-3120,688],\"disabled\":false},{\"id\":\"f1a87b7e-1a66-4d64-80a8-0e01785b4af6\",\"name\":\"FUB - Create a task.1\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[3376,816],\"disabled\":false},{\"id\":\"e060aaa9-d571-4da7-ab22-b94838dc8439\",\"name\":\"FUB - Update a task.1\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[3904,576],\"disabled\":false},{\"id\":\"faaecbe7-2312-40b5-a9c9-4ce237ee0f83\",\"name\":\"End flow.2\",\"type\":\"n8n-nodes-base.noOp\",\"typeVersion\":1,\"position\":[3904,752],\"disabled\":false},{\"id\":\"f101dcb2-eb22-4328-8b3b-abc3a94416bb\",\"name\":\"Task Logic\",\"type\":\"n8n-nodes-base.switch\",\"typeVersion\":3.2,\"position\":[3184,672],\"disabled\":false},{\"id\":\"db067898-a99b-409e-8a1e-01919d621a7d\",\"name\":\"Delete?.3\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2.2,\"position\":[2016,1024],\"disabled\":true},{\"id\":\"ea34f348-2f55-4bf2-a45e-eb0d04ace5f2\",\"name\":\"Delete?.2\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2.2,\"position\":[2208,384],\"disabled\":false},{\"id\":\"56965856-eff3-40b1-a12b-ba6c07dc4bd8\",\"name\":\"FUB - Delete a task.4\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[3904,416],\"disabled\":false},{\"id\":\"69cde1f9-fc1d-4287-85a1-bc9775ca8c5e\",\"name\":\"FUB - Delete a task.2\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[2560,384],\"disabled\":false},{\"id\":\"985b5708-fc9b-4d35-9258-8ec9e03470d0\",\"name\":\"Task Logic Function\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[3024,688],\"disabled\":false},{\"id\":\"6b9cb226-f751-47d1-a570-8c39860792d4\",\"name\":\"Secondary Logic Function\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[1008,672],\"disabled\":false},{\"id\":\"a05dd28c-2507-4e85-9182-acc7773e1570\",\"name\":\"FUB - Search Tasks.5\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.2,\"position\":[3392,576],\"disabled\":false},{\"id\":\"cd45d95b-87c7-4175-9628-15a07fb2241f\",\"name\":\"Search Data\",\"type\":\"n8n-nodes-base.executionData\",\"typeVersion\":1.1,\"position\":[-1392,688],\"disabled\":false},{\"id\":\"67010159-dfe7-480f-964a-31c32b62e987\",\"name\":\"Throw Error - SQL Query Issue\",\"type\":\"n8n-nodes-base.stopAndError\",\"typeVersion\":1,\"position\":[112,432],\"disabled\":false},{\"id\":\"6b2bd914-bcda-4731-b317-f250ae5a5eb8\",\"name\":\"Main Logic Function\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[-48,688],\"disabled\":false},{\"id\":\"1d7ed6fe-0220-46cf-b5bd-a223d9897556\",\"name\":\"Send chat to \\\"Michael Michael Motorcycle\\\"\",\"type\":\"n8n-nodes-base.microsoftTeams\",\"typeVersion\":2,\"position\":[400,624],\"disabled\":false},{\"id\":\"4b11ac70-93dc-4398-8966-5e968b69841c\",\"name\":\"Send chat to \\\"Dialer Comms\\\"\",\"type\":\"n8n-nodes-base.microsoftTeams\",\"typeVersion\":2,\"position\":[-3120,880],\"disabled\":false}],\"connections\":{\"HD - web_brEYWXKGpAvg\":{\"main\":[[{\"node\":\"Resource IDs Exist\",\"type\":\"main\",\"index\":0}]]},\"Trusted Rate?\":{\"main\":[[{\"node\":\"Log Call\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Send chat to \\\"Dialer Comms\\\"\",\"type\":\"main\",\"index\":0}],[]]},\"Outgoing/Not 0\":{\"main\":[[{\"node\":\"FUB - Get The Contact\",\"type\":\"main\",\"index\":0}],[{\"node\":\"End flow.1\",\"type\":\"main\",\"index\":0}]]},\"FUB - Get The Contact\":{\"main\":[[{\"node\":\"No Recruit\",\"type\":\"main\",\"index\":0}]]},\"No Recruit\":{\"main\":[[{\"node\":\"Call/Stage Change or 'Dustin'\",\"type\":\"main\",\"index\":0}],[{\"node\":\"End flow.1\",\"type\":\"main\",\"index\":0}]]},\"FUB - Remove Call/Stage Change Tags\":{\"main\":[[{\"node\":\"Get lead, user, next call attempt\",\"type\":\"main\",\"index\":0}],[]]},\"Get lead, user, next call attempt\":{\"main\":[[{\"node\":\"Search Data\",\"type\":\"main\",\"index\":0}]]},\"Set Multiple Variables\":{\"main\":[[{\"node\":\"FUB - Update Contact\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact\":{\"main\":[[{\"node\":\"Build SQL query\",\"type\":\"main\",\"index\":0}]]},\"Update User and Lead\":{\"main\":[[{\"node\":\"SQL Update Empty?\",\"type\":\"main\",\"index\":0}]]},\"Slybroadcast - Send a campaign\":{\"main\":[[{\"node\":\"FUB - Create a note.1\",\"type\":\"main\",\"index\":0}]]},\"Voicemaker - Create voice\":{\"main\":[[{\"node\":\"Slybroadcast - Send a campaign\",\"type\":\"main\",\"index\":0}]]},\"Update Lead\":{\"main\":[[{\"node\":\"FUB - Search Tasks.2\",\"type\":\"main\",\"index\":0}]]},\"Update Lead1\":{\"main\":[[{\"node\":\"FUB - Update Contact.9\",\"type\":\"main\",\"index\":0}]]},\"When clicking ‘Test workflow’\":{\"main\":[[{\"node\":\"FUB - Get Custom Fields\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update a contact\":{\"main\":[[{\"node\":\"Get lead, user, next call attempt\",\"type\":\"main\",\"index\":0}]]},\"Create Lead\":{\"main\":[[{\"node\":\"Set Multiple Variables\",\"type\":\"main\",\"index\":0}]]},\"FUB - Get Custom Fields\":{\"main\":[[{\"node\":\"Aggregate\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact.2\":{\"main\":[[{\"node\":\"FUB - Search Tasks.1\",\"type\":\"main\",\"index\":0}]]},\"FUB - Search Tasks.1\":{\"main\":[[{\"node\":\"Delete?.1\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact.3\":{\"main\":[[{\"node\":\"Update Lead\",\"type\":\"main\",\"index\":0}]]},\"FUB - Search Tasks.2\":{\"main\":[[{\"node\":\"Delete?.2\",\"type\":\"main\",\"index\":0}]]},\"Split Out.2\":{\"main\":[[{\"node\":\"FUB - Delete a task.2\",\"type\":\"main\",\"index\":0}]]},\"Split Out.1\":{\"main\":[[{\"node\":\"FUB - Delete a task.1\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact.4\":{\"main\":[[{\"node\":\"FUB - Update Contact.5\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact.5\":{\"main\":[[{\"node\":\"FUB - Create a note.2\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact.6\":{\"main\":[[{\"node\":\"FUB - Create a note.3\",\"type\":\"main\",\"index\":0}]]},\"FUB - Update Contact.9\":{\"main\":[[{\"node\":\"FUB - Search Tasks.3\",\"type\":\"main\",\"index\":0}]]},\"FUB - Search Tasks.3\":{\"main\":[[{\"node\":\"Delete?.3\",\"type\":\"main\",\"index\":0}]]},\"Split Out.3\":{\"main\":[[{\"node\":\"FUB - Delete a task.3\",\"type\":\"main\",\"index\":0}]]},\"FUB - Search Tasks.4\":{\"main\":[[{\"node\":\"Task Logic Function\",\"type\":\"main\",\"index\":0}],[]]},\"Split Out.4\":{\"main\":[[{\"node\":\"Task Actions\",\"type\":\"main\",\"index\":0}]]},\"FUB - Get All Stages\":{\"main\":[[{\"node\":\"FUB - Get All Users\",\"type\":\"main\",\"index\":0}],[]]},\"Resource IDs Exist\":{\"main\":[[{\"node\":\"FUB - Get All Stages\",\"type\":\"main\",\"index\":0}]]},\"FUB - Get All Users\":{\"main\":[[{\"node\":\"FUB - Get The Call\",\"type\":\"main\",\"index\":0}],[]]},\"Call/Stage Change or 'Dustin'\":{\"main\":[[{\"node\":\"FUB - Remove Call/Stage Change Tags\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Update a contact\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Get lead, user, next call attempt\",\"type\":\"main\",\"index\":0}]]},\"Lead does NOT exist\":{\"main\":[[{\"node\":\"Create Lead\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Set Multiple Variables\",\"type\":\"main\",\"index\":0}]]},\"Main logic\":{\"main\":[[{\"node\":\"Voicemaker - Create voice\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Update ISA Level\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Send chat to \\\"Michael Michael Motorcycle\\\"\",\"type\":\"main\",\"index\":0}],[{\"node\":\"NULL on phone\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Trigger Make \\\"LO Appointment Jot Link\\\" Scenario\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Secondary Logic Function\",\"type\":\"main\",\"index\":0}]]},\"Lead or no answer\":{\"main\":[[{\"node\":\"FUB - Update Contact.2\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Update Contact.3\",\"type\":\"main\",\"index\":0}]]},\"Failed Connect\":{\"main\":[[{\"node\":\"FUB - Update Contact.4\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Update Contact.6\",\"type\":\"main\",\"index\":0}]]},\"Task Actions\":{\"main\":[[{\"node\":\"FUB - Delete a task.4\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Update a task.1\",\"type\":\"main\",\"index\":0}],[{\"node\":\"End flow.2\",\"type\":\"main\",\"index\":0}]]},\"SQL Update Empty?\":{\"main\":[[{\"node\":\"Throw Error - SQL Query Issue\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Main Logic Function\",\"type\":\"main\",\"index\":0}]]},\"User is Dustin Shaffer\":{\"main\":[[],[{\"node\":\"FUB - Update a contact\",\"type\":\"main\",\"index\":0}]]},\"FUB - Create a note.1\":{\"main\":[[{\"node\":\"Secondary Logic Function\",\"type\":\"main\",\"index\":0}]]},\"Update ISA Level\":{\"main\":[[{\"node\":\"Secondary Logic Function\",\"type\":\"main\",\"index\":0}]]},\"NULL on phone\":{\"main\":[[{\"node\":\"Secondary Logic Function\",\"type\":\"main\",\"index\":0}]]},\"Trigger Make \\\"LO Appointment Jot Link\\\" Scenario\":{\"main\":[[{\"node\":\"Secondary Logic Function\",\"type\":\"main\",\"index\":0}]]},\"Delete?.1\":{\"main\":[[{\"node\":\"Split Out.1\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"FUB - Delete a task.1\":{\"main\":[[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"FUB - Create a note.2\":{\"main\":[[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"FUB - Create a note.3\":{\"main\":[[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"FUB - Delete a task.3\":{\"main\":[[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"Secondary Logic\":{\"main\":[[{\"node\":\"Lead or no answer\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Failed Connect\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"Test account and null username logic\":{\"main\":[[{\"node\":\"Trusted Rate?\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait 1 sec\",\"type\":\"main\",\"index\":0}]]},\"Wait 1 sec\":{\"main\":[[{\"node\":\"FUB - Get The Call\",\"type\":\"main\",\"index\":0}]]},\"FUB - Get The Call\":{\"main\":[[{\"node\":\"Test account and null username logic\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Lt Call ID\",\"type\":\"main\",\"index\":0}]]},\"Build SQL query\":{\"main\":[[{\"node\":\"Update User and Lead\",\"type\":\"main\",\"index\":0}]]},\"Log Call\":{\"main\":[[{\"node\":\"Outgoing/Not 0\",\"type\":\"main\",\"index\":0}]]},\"Task Logic\":{\"main\":[[{\"node\":\"FUB - Search Tasks.5\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Create a task.1\",\"type\":\"main\",\"index\":0}],[{\"node\":\"End flow.2\",\"type\":\"main\",\"index\":0}]]},\"Delete?.3\":{\"main\":[[{\"node\":\"Split Out.3\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"Delete?.2\":{\"main\":[[{\"node\":\"Split Out.2\",\"type\":\"main\",\"index\":0}],[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"FUB - Delete a task.2\":{\"main\":[[{\"node\":\"FUB - Search Tasks.4\",\"type\":\"main\",\"index\":0}]]},\"Task Logic Function\":{\"main\":[[{\"node\":\"Task Logic\",\"type\":\"main\",\"index\":0}]]},\"Secondary Logic Function\":{\"main\":[[{\"node\":\"Secondary Logic\",\"type\":\"main\",\"index\":0}]]},\"FUB - Search Tasks.5\":{\"main\":[[{\"node\":\"Split Out.4\",\"type\":\"main\",\"index\":0}]]},\"Search Data\":{\"main\":[[{\"node\":\"Lead does NOT exist\",\"type\":\"main\",\"index\":0}]]},\"Main Logic Function\":{\"main\":[[{\"node\":\"Main logic\",\"type\":\"main\",\"index\":0}]]},\"Send chat to \\\"Michael Michael Motorcycle\\\"\":{\"main\":[[{\"node\":\"Secondary Logic Function\",\"type\":\"main\",\"index\":0}]]}}}"
            }
        ]
    },
    {
        id: "hookdeck-webhook-implementation",
        title: "Enterprise Hookdeck Infrastructure Implementation",
        type: "Integration Infrastructure",
        date: "2025",
        tags: ["hookdeck", "make", "n8n", "retool", "fub"],
        
        summary: "Centralized all webhook infrastructure through Hookdeck, establishing a visible, manageable pipeline for platform events and inter-application communications with advanced routing, transformation, and filtering capabilities that extended to partner agencies through automated provisioning.",
        
        challenge: "The business's webhook infrastructure was fragmented and opaque, with direct connections between source applications and destinations making it impossible to debug failed deliveries, manage rate limits, or understand data flow. Without visibility into webhook traffic or the ability to transform payloads in transit, each integration required custom handling, and partner agencies had no standardized way to receive data from the platform, creating operational bottlenecks and integration complexity.",
    
        comparison: {
            before: {
                title: "Before Hookdeck",
                points: [
                    "Direct webhook connections with no visibility",
                    "Manual debugging of failed deliveries",
                    "No payload transformation capabilities",
                    "Partner agencies required custom integration work"
                ]
            },
            after: {
                title: "After Hookdeck",
                points: [
                    "Centralized dashboard with full event visibility",
                    "Automatic retry and failure management",
                    "Built-in transformation and filtering",
                    "Self-service partner endpoint provisioning"
                ]
            }
        },
        
        architecture: [
            { label: "Sources", name: "Platform Events" },
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
                title: "Project-based Separation",
                description: "Allows for separation of product-based webhooks or internal webhooks, each with separate billing and throughput levels. Each project also has separate integration and API capability."
            }
        ],
    
        highlights: [
            "Centralized 100% of webhook infrastructure for platform events and inter-app communication",
            "Established visible audit trail for all webhook deliveries with automatic retry and failure management",
            "Created automated partner onboarding that provisions webhook endpoints without manual intervention",
            "Implemented flexible routing system supporting multiple simultaneous destinations with custom transformation logic",
            "Separates product webhooks and internal webhooks while maintaining enterprise-grade control and access"
        ],
    
        screenshots: [
            { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/hookdeck_implementation/hookdeck_event_dashboard.png", alt: "Hookdeck Event Dashboard", placeholder: "Hookdeck Event Dashboard" },
            { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/hookdeck_implementation/hookdeck_connections_page.png", alt: "Hookdeck Connection Management", placeholder: "Hookdeck Connection Management" }
        ]
    }
];
