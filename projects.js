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
    id: "test-title",
    title: "Test title",
    type: "Platform Migration",
    date: "2025",
    tags: ["supabase", "hookdeck", "digitalocean", "make", "github", "fub", "monday", "zapier"],
    
    summary: "Test",
    
    challenge: "Test challenge",
    
    comparison: {
        before: {
            title: "Test title",
            points: ["Before test"],
            metrics: { label: "Monthly Cost", value: "$5,666/mo" }
        },
        after: {
            title: "Test",
            points: ["After test"],
            metrics: { label: "Monthly Cost", value: "$56/mo" }
        },
        savings: { label: "Monthly Savings", value: "$5,610/mo", percentage: "1000%" }
    },
    
    architecture: [
        { label: "Source", name: "Legacy Platform" },
        { label: "Migration", name: "Supabase Integration", highlight: true },
        { label: "Automation", name: "Make & Zapier Workflows" },
        { label: "Output", name: "Modern Platform" }
    ],
    
    features: [
        { title: "Test", description: "Test" },
        { title: "Test", description: "Test" }
    ],
    
    highlights: [
        "TEst",
        "test",
        "test"
    ],
    
    screenshots: [
        { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/test-title/screenshot-1-1767207535174.png", alt: "_C__Users_grbut_OneDrive_Desktop_test.html(Desktop).png", placeholder: "_C__Users_grbut_OneDrive_Desktop_test.html(Desktop).png" },
        { url: "https://vifobwjrrpembzncdips.supabase.co/storage/v1/object/public/portfolio_projects/test-title/screenshot-2-1767207535430.png", alt: "_C__Users_grbut_OneDrive_Desktop_test2.html(Desktop).png", placeholder: "_C__Users_grbut_OneDrive_Desktop_test2.html(Desktop).png" }
    ],
    workflows: [
        {
            title: "test",
            data: "{\"nodes\":[{\"parameters\":{\"rule\":{\"interval\":[{\"field\":\"hours\",\"hoursInterval\":4}]}},\"id\":\"018117e6-6bab-44d6-9a3b-544bbd58daf8\",\"name\":\"Schedule Trigger\",\"type\":\"n8n-nodes-base.scheduleTrigger\",\"typeVersion\":1,\"position\":[-640,224]},{\"parameters\":{\"url\":\"https://us1.make.com/api/v2/scenarios\",\"authentication\":\"genericCredentialType\",\"genericAuthType\":\"httpHeaderAuth\",\"sendQuery\":true,\"queryParameters\":{\"parameters\":[{\"name\":\"organizationId\",\"value\":\"379071\"},{\"name\":\"pg[limit]\",\"value\":\"1000\"},{\"name\":\"cols[1]\",\"value\":\"id\"},{\"name\":\"cols[2]\",\"value\":\"name\"},{\"name\":\"cols[3]\",\"value\":\"islinked\"},{\"name\":\"cols[4]\",\"value\":\"folderId\"}]},\"options\":{\"timeout\":90000}},\"id\":\"85179e7d-c290-483c-8cda-da633c9c1d42\",\"name\":\"Get All Make Scenarios\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[-416,304],\"credentials\":{\"httpHeaderAuth\":{\"id\":\"uQgkiSJSlPU2JgQG\",\"name\":\"Make - Girmonde Team - API Key (11/13/2024)\"}}},{\"parameters\":{},\"id\":\"2058d394-0953-4235-8bfc-cb7a4ff73ea7\",\"name\":\"When clicking \\\"Execute Workflow\\\"\",\"type\":\"n8n-nodes-base.manualTrigger\",\"typeVersion\":1,\"position\":[-640,384],\"disabled\":true},{\"parameters\":{\"fieldToSplitOut\":\"scenarios\",\"options\":{}},\"id\":\"f369d62f-7b4e-4b12-a197-36a24c587e6d\",\"name\":\"List all scenarios\",\"type\":\"n8n-nodes-base.itemLists\",\"typeVersion\":2.1,\"position\":[-240,304]},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":1},\"conditions\":[{\"id\":\"f8add357-1d47-49d9-a213-4b549fad8a9e\",\"leftValue\":\"={{ $json.body.scenarioLogs }}\",\"rightValue\":0,\"operator\":{\"type\":\"array\",\"operation\":\"lengthEquals\",\"rightType\":\"number\"}}],\"combinator\":\"and\"},\"options\":{}},\"id\":\"ce03e609-990a-45d1-ae39-e32b5d6a1ab9\",\"name\":\"No more results?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1744,928]},{\"parameters\":{\"jsCode\":\"let results = [],\\n  i = 0;\\n\\n// Add first message\\nconsole.log($(\\\"Get initial page\\\").all(0, 0));\\nresults = results.concat($(\\\"Get each next page\\\").all(0, 0));\\n\\n// Add subsequent messages\\ndo {\\n  try {\\n    results = results.concat($(\\\"Get each next page\\\").all(0, i));\\n  } catch (error) {\\n    return results;\\n  }\\n  i++;\\n} while (true);\"},\"id\":\"67f3ee39-39f4-4142-b424-e2d4b6dbd006\",\"name\":\"Merge message batches\",\"type\":\"n8n-nodes-base.code\",\"position\":[1968,848],\"typeVersion\":1,\"alwaysOutputData\":true},{\"parameters\":{\"fieldToSplitOut\":\"body.scenarioLogs\",\"options\":{}},\"id\":\"07d251a7-3e2a-49cf-8200-f98e780b3461\",\"name\":\"Split Out body\",\"type\":\"n8n-nodes-base.splitOut\",\"typeVersion\":1,\"position\":[2192,784]},{\"parameters\":{\"url\":\"=https://us1.make.com/api/v2/scenarios/{{ $('List all scenarios').item.json.id }}/logs\",\"authentication\":\"genericCredentialType\",\"genericAuthType\":\"httpHeaderAuth\",\"sendQuery\":true,\"queryParameters\":{\"parameters\":[{\"name\":\"organizationId\",\"value\":\"379071\"},{\"name\":\"pg[limit]\",\"value\":\"={{ $('Set Variables').item.json.page_limit }}\"},{\"name\":\"from\",\"value\":\"={{ $('Set Variables').item.json.from_time }}\"},{\"name\":\"to\",\"value\":\"={{ $('Set Variables').item.json.to_time }}\"},{\"name\":\"pg[offset]\",\"value\":\"={{ $json.body.pg.offset + $('Set Variables').item.json.page_limit }}\"}]},\"options\":{\"response\":{\"response\":{\"fullResponse\":true}},\"timeout\":90000}},\"id\":\"5c729a78-2d3b-4996-ab31-7cef7ffd4149\",\"name\":\"Get each next page\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[1568,928],\"credentials\":{\"httpHeaderAuth\":{\"id\":\"uQgkiSJSlPU2JgQG\",\"name\":\"Make - Girmonde Team - API Key (11/13/2024)\"}}},{\"parameters\":{\"url\":\"=https://us1.make.com/api/v2/scenarios/{{ $('List all scenarios').item.json.id }}/logs\",\"authentication\":\"genericCredentialType\",\"genericAuthType\":\"httpHeaderAuth\",\"sendQuery\":true,\"queryParameters\":{\"parameters\":[{\"name\":\"pg[limit]\",\"value\":\"={{ $('Set Variables').item.json.page_limit }}\"},{\"name\":\"from\",\"value\":\"={{ $('Set Variables').item.json.from_time }}\"},{\"name\":\"to\",\"value\":\"={{ $('Set Variables').item.json.to_time }}\"}]},\"options\":{\"response\":{\"response\":{\"fullResponse\":true}},\"timeout\":90000}},\"id\":\"b56d2132-f26e-4793-b9f1-09329f9c4bff\",\"name\":\"Get initial page\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[592,784],\"credentials\":{\"httpHeaderAuth\":{\"id\":\"uQgkiSJSlPU2JgQG\",\"name\":\"Make - Girmonde Team - API Key (11/13/2024)\"}}},{\"parameters\":{\"operation\":\"executeQuery\",\"query\":\"INSERT INTO technology.d_make_execution_tracking\\n(\\nscenario_id,\\nexecution_id,\\nexecution_duration,\\nexecution_operations,\\nexecution_transfer,\\nis_instant,\\nexecution_status,\\nexecution_start\\n)\\nVALUES\\n(\\n(SELECT id FROM technology.d_make_scenarios WHERE scenario_id = $1),\\n  $2,\\n  $3,\\n  $4,\\n  $5,\\n  $6,\\n  $7,\\n  $8\\n)\\nRETURNING\\n  id;\",\"options\":{\"queryReplacement\":\"=[\\n{{ $('List all scenarios').item.json.id || null }},\\n{{ $json.id || null }},\\n{{ $json.duration || null }},\\n{{ $json.operations || null }},\\n{{ $json.transfer || null }},\\n{{ $json.instant || null }},\\n{{ $json.status || null }},\\n{{ $json.timestamp || null }}\\n]\"}},\"id\":\"487e886d-d928-4021-821d-dade7027c1e4\",\"name\":\"Add scenario logs to tracking table\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.2,\"position\":[2544,784],\"credentials\":{\"postgres\":{\"id\":\"ycrBiOmEUowzlVIV\",\"name\":\"Supabase - Prod - Pooler Connection\"}}},{\"parameters\":{\"url\":\"=https://us1.make.com/api/v2/scenarios/{{ $json.id }}/blueprint\",\"authentication\":\"genericCredentialType\",\"genericAuthType\":\"httpHeaderAuth\",\"sendQuery\":true,\"queryParameters\":{\"parameters\":[{\"name\":\"draft\",\"value\":\"false\"}]},\"options\":{\"response\":{\"response\":{\"fullResponse\":true}},\"timeout\":90000}},\"id\":\"fc3597c0-f207-4c8a-b203-d08eaf3b4012\",\"name\":\"Get blueprint\",\"type\":\"n8n-nodes-base.httpRequest\",\"typeVersion\":4.1,\"position\":[400,384],\"credentials\":{\"httpHeaderAuth\":{\"id\":\"uQgkiSJSlPU2JgQG\",\"name\":\"Make - Girmonde Team - API Key (11/13/2024)\"}}},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":1},\"conditions\":[{\"id\":\"2e9478b5-0955-488a-bbb8-571c49db5929\",\"leftValue\":\"={{ $json.body.scenarioLogs }}\",\"rightValue\":50,\"operator\":{\"type\":\"array\",\"operation\":\"lengthLt\",\"rightType\":\"number\"}}],\"combinator\":\"and\"},\"options\":{}},\"id\":\"4e517f6b-a810-473e-a8d3-56e89bdb62b8\",\"name\":\"Single page of results?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1344,784]},{\"parameters\":{\"options\":{}},\"id\":\"3f6334e9-c323-48dd-a958-6460b5751974\",\"name\":\"Loop Over Items\",\"type\":\"n8n-nodes-base.splitInBatches\",\"typeVersion\":3,\"position\":[0,304]},{\"parameters\":{\"options\":{}},\"id\":\"b41fa315-e106-475c-be18-1d082851ba42\",\"name\":\"Loop Over Items.1\",\"type\":\"n8n-nodes-base.splitInBatches\",\"typeVersion\":3,\"position\":[192,704]},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":1},\"conditions\":[{\"id\":\"83d8bee4-95f2-4e1d-bdd5-f3b34b9be7ae\",\"leftValue\":\"={{ $json.body.scenarioLogs }}\",\"rightValue\":0,\"operator\":{\"type\":\"array\",\"operation\":\"lengthGt\",\"rightType\":\"number\"}}],\"combinator\":\"and\"},\"options\":{}},\"id\":\"f593c15e-6c25-4c06-9ad0-db65596f09b5\",\"name\":\"Logs to load?\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1168,784]},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":1},\"conditions\":[{\"id\":\"e4029a0f-8a9f-4997-9ffb-202f0c44f497\",\"leftValue\":\"={{$json.type}}\",\"rightValue\":\"=auto\",\"operator\":{\"type\":\"string\",\"operation\":\"equals\"}}],\"combinator\":\"or\"},\"options\":{}},\"id\":\"84cad8de-0ed6-4286-b037-06ca2ab765f9\",\"name\":\"Type = Auto\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[2368,784]},{\"parameters\":{},\"id\":\"1331d12c-4cfd-4df5-b3a1-535ae6c8d598\",\"name\":\"Complete route.1\",\"type\":\"n8n-nodes-base.noOp\",\"typeVersion\":1,\"position\":[224,224]},{\"parameters\":{},\"id\":\"899e61d4-d0d8-4a65-a16c-3147db2defe5\",\"name\":\"Continue route.2\",\"type\":\"n8n-nodes-base.noOp\",\"typeVersion\":1,\"position\":[2368,1008]},{\"parameters\":{\"amount\":\"={{ Math.round($json.headers['x-ratelimit-limit'] - $json.headers['x-ratelimit-remaining']) }}\",\"unit\":\"seconds\"},\"id\":\"29bfe5af-6e27-405c-99ac-afb3bf1eea84\",\"name\":\"Wait for ratelimit reset.1\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[960,912],\"webhookId\":\"6cc1dd80-7b12-402a-b773-0f414a07d383\"},{\"parameters\":{\"amount\":\"={{ Math.round($json.headers['x-ratelimit-limit'] - $json.headers['x-ratelimit-remaining']) }}\",\"unit\":\"seconds\"},\"id\":\"f56216db-0c2f-4ad1-ae25-80ba1eaedc37\",\"name\":\"Wait for ratelimit reset.2\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[2160,1104],\"webhookId\":\"6cc1dd80-7b12-402a-b773-0f414a07d383\"},{\"parameters\":{\"fields\":{\"values\":[{\"name\":\"from_time\",\"type\":\"numberValue\",\"numberValue\":\"={{ DateTime.now().minus({hours: 4}).toFormat(\\\"x\\\") }}\"},{\"name\":\"to_time\",\"type\":\"numberValue\",\"numberValue\":\"={{ DateTime.now().toFormat(\\\"x\\\") }}\"},{\"name\":\"page_limit\",\"type\":\"numberValue\",\"numberValue\":\"50\"}]},\"include\":\"none\",\"options\":{}},\"id\":\"3a64a2a8-084a-4dee-a516-a35439545ca4\",\"name\":\"Set Variables\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.2,\"position\":[0,704]},{\"parameters\":{\"assignments\":{\"assignments\":[{\"id\":\"91553557-d950-49d7-a754-331c10c8137e\",\"name\":\"count\",\"value\":\"={{$json.id.length}}\",\"type\":\"number\"}]},\"options\":{}},\"id\":\"b98426b5-e2ea-4b4c-94e7-08ed0e2faf5b\",\"name\":\"Edit Fields\",\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[400,624]},{\"parameters\":{\"mode\":\"runOnceForEachItem\",\"jsCode\":\"const makeScenarioId = $('If').item.json.id;\\nconst fromTime = $input.item.json.from_time;\\nconst toTime = $input.item.json.to_time;\\n\\nconst baseUrl = `https://us1.make.com/api/v2/scenarios/${makeScenarioId}/logs`;\\nconst makeApiKey = `5948bf73-7f8e-4586-ae7b-e5664089ed02`;\\nconst organizationId = \\\"379071\\\";\\nlet results = [];\\nlet offset = 0;\\nlet rateLimitRemaining = 1; // Initialize to allow the first request.\\n\\ndo {\\n    // Wait if necessary due to rate limits\\n    if (rateLimitRemaining <= 0) {\\n        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second\\n    }\\n\\n // Manually construct the query string\\n    const query = `organizationId=${organizationId}&pg[limit]=50&pg[offset]=${offset}&from=${fromTime}&to=${toTime}`;\\n\\n    const response = await fetch(`${baseUrl}?${query}`, {\\n        method: \\\"GET\\\",\\n        headers: {\\n            \\\"Authorization\\\": `Token ${makeApiKey}`,\\n        }\\n    });\\n\\n    if (!response.ok) {\\n        throw new Error(`HTTP error! status: ${response.status}`);\\n    }\\n\\n    const data = await response.json();\\n    results = results.concat(data.body.scenarioLogs);\\n\\n    offset += 50;\\n    rateLimitRemaining = parseInt(response.headers.get('x-ratelimit-remaining'), 10);\\n\\n    if (data.body.scenarioLogs.length === 0) break; // Stop if no more results\\n} while (true);\\n\\nreturn results;\"},\"id\":\"b4c1cd46-10f6-4938-94b1-e3829627fc53\",\"name\":\"Code\",\"type\":\"n8n-nodes-base.code\",\"typeVersion\":2,\"position\":[-16,1440]},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":1},\"conditions\":[{\"id\":\"7d10964e-111c-4866-a627-f74c3e3d9de8\",\"leftValue\":\"={{ parseInt($json.headers['x-ratelimit-remaining']) }}\",\"rightValue\":0,\"operator\":{\"type\":\"number\",\"operation\":\"gt\"}}],\"combinator\":\"and\"},\"options\":{}},\"id\":\"ab1ab3da-6418-4b44-82dc-f64cf41ac79a\",\"name\":\"Additional requests allowed?.2\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[1968,1008]},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":1},\"conditions\":[{\"id\":\"7d10964e-111c-4866-a627-f74c3e3d9de8\",\"leftValue\":\"={{ parseInt($json.headers['x-ratelimit-remaining']) }}\",\"rightValue\":0,\"operator\":{\"type\":\"number\",\"operation\":\"gt\"}}],\"combinator\":\"and\"},\"options\":{}},\"id\":\"b95929e6-9312-4cc6-b497-85a66f585602\",\"name\":\"Additional requests allowed?.1\",\"type\":\"n8n-nodes-base.if\",\"typeVersion\":2,\"position\":[752,784]},{\"parameters\":{\"operation\":\"executeQuery\",\"query\":\"INSERT INTO\\n  technology.d_make_scenarios\\n(\\nscenario_id,\\nfolder_id,\\norganization_id,\\nname,\\nis_active,\\nis_priority\\n)\\nVALUES\\n(\\n  $1,\\n  $2,\\n  $3,  \\n  $4,\\n  $5,\\n  $6\\n)\\nON CONFLICT ON CONSTRAINT d_make_scenarios_scenario_id_key DO\\n  UPDATE\\n  SET\\n    name = $7,\\n    is_active = $8,\\n    folder_id = $9,\\n    updated_at = CURRENT_TIMESTAMP\\n  WHERE\\n    technology.d_make_scenarios.scenario_id = $10\\nRETURNING\\n  id;\",\"options\":{\"queryReplacement\":\"=[\\n{{ $json.id || null }},\\n{{ $json.folderId || null }},\\n379071,\\n{{ $json.name || null }},\\n{{ $json.islinked }},\\nfalse,\\n{{ $json.name || null }},\\n{{ $json.islinked || null }},\\n{{ $json.folderId || null }},\\n{{ $json.id || null }}\\n]\"}},\"id\":\"6a121b65-3321-41cb-9f98-469d41e7e6d2\",\"name\":\"Upsert Scenario tracker table.1\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.2,\"position\":[0,0],\"credentials\":{\"postgres\":{\"id\":\"ycrBiOmEUowzlVIV\",\"name\":\"Supabase - Prod - Pooler Connection\"}}},{\"parameters\":{\"operation\":\"executeQuery\",\"query\":\"UPDATE\\n  technology.d_make_scenarios\\nSET\\n  scenario_blueprint_backup = $1,\\n  updated_at = CURRENT_TIMESTAMP\\nWHERE technology.d_make_scenarios.scenario_id = $2\\nRETURNING\\n  id;\",\"options\":{\"queryReplacement\":\"=[\\n{{ $json.body.response.blueprint || null }},\\n{{ $('List all scenarios').item.json.id || null }}\\n]\"}},\"id\":\"e0cbe4e6-37e8-4e66-91d4-b4c411b22b6f\",\"name\":\"Update scenario tracker table.2\",\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.2,\"position\":[592,384],\"credentials\":{\"postgres\":{\"id\":\"ycrBiOmEUowzlVIV\",\"name\":\"Supabase - Prod - Pooler Connection\"}},\"onError\":\"continueRegularOutput\"},{\"parameters\":{\"operation\":\"executeQuery\",\"query\":\"SELECT \\n  CAST(COUNT(id) AS numeric) AS total_count,\\n  CAST(COUNT(id) / NULLIF(COUNT(DISTINCT date_trunc('day', created_at)), 0) AS numeric) AS daily_average\\nFROM\\n  technology.d_make_execution_tracking\\nWHERE \\n    scenario_id = (SELECT id FROM technology.d_make_scenarios WHERE scenario_id = '{{ $json.id }}')\\n  AND\\n  execution_start >= '2023-05-05';\",\"options\":{}},\"type\":\"n8n-nodes-base.postgres\",\"typeVersion\":2.6,\"position\":[176,1200],\"id\":\"b3e7f350-65f1-4efc-afd0-5a28129f1bb4\",\"name\":\"Postgres\",\"credentials\":{\"postgres\":{\"id\":\"ycrBiOmEUowzlVIV\",\"name\":\"Supabase - Prod - Pooler Connection\"}}},{\"parameters\":{\"conditions\":{\"options\":{\"caseSensitive\":true,\"leftValue\":\"\",\"typeValidation\":\"strict\",\"version\":2},\"conditions\":[{\"id\":\"2493ce96-34a4-4cc4-9114-feda2a169f7a\",\"leftValue\":\"={{ $json.folderId }}\",\"rightValue\":265376,\"operator\":{\"type\":\"number\",\"operation\":\"equals\"}}],\"combinator\":\"and\"},\"options\":{}},\"type\":\"n8n-nodes-base.filter\",\"typeVersion\":2.2,\"position\":[-16,1200],\"id\":\"794a219a-651c-4431-8d18-104eece61a93\",\"name\":\"Filter\"},{\"parameters\":{\"assignments\":{\"assignments\":[{\"id\":\"25de64ca-d19d-4503-bdf5-ff3872474203\",\"name\":\"total\",\"value\":\"={{ $json.total_count.reduce((sum, str) => sum + parseInt(str), 0) }}\",\"type\":\"number\"}]},\"options\":{}},\"type\":\"n8n-nodes-base.set\",\"typeVersion\":3.4,\"position\":[528,1200],\"id\":\"8c177713-fa3a-4a90-b4a1-a07bb91906d8\",\"name\":\"Edit Fields1\"},{\"parameters\":{\"fieldsToAggregate\":{\"fieldToAggregate\":[{\"fieldToAggregate\":\"total_count\"}]},\"options\":{}},\"type\":\"n8n-nodes-base.aggregate\",\"typeVersion\":1,\"position\":[352,1200],\"id\":\"26e1216c-2bbf-4591-b0ca-6c63ba12a843\",\"name\":\"Aggregate\"},{\"parameters\":{\"amount\":5,\"unit\":\"seconds\"},\"id\":\"3a5cadab-877f-4776-8156-b90ee97d14bf\",\"name\":\"Wait 5 seconds.2\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[400,784],\"webhookId\":\"b30b9c3c-d99d-46e3-8cc8-d67a57ae57d4\"},{\"parameters\":{\"amount\":5,\"unit\":\"seconds\"},\"id\":\"4740b350-f232-4e19-bc80-04d8158569eb\",\"name\":\"Wait 5 secons.1\",\"type\":\"n8n-nodes-base.wait\",\"typeVersion\":1,\"position\":[224,384],\"webhookId\":\"fac45e74-f913-472f-8759-cf46f8ea52fc\"}],\"connections\":{\"Schedule Trigger\":{\"main\":[[{\"node\":\"Get All Make Scenarios\",\"type\":\"main\",\"index\":0}]]},\"Get All Make Scenarios\":{\"main\":[[{\"node\":\"List all scenarios\",\"type\":\"main\",\"index\":0}]]},\"When clicking \\\"Execute Workflow\\\"\":{\"main\":[[{\"node\":\"Get All Make Scenarios\",\"type\":\"main\",\"index\":0}]]},\"List all scenarios\":{\"main\":[[{\"node\":\"Upsert Scenario tracker table.1\",\"type\":\"main\",\"index\":0},{\"node\":\"Loop Over Items\",\"type\":\"main\",\"index\":0},{\"node\":\"Set Variables\",\"type\":\"main\",\"index\":0}]]},\"No more results?\":{\"main\":[[{\"node\":\"Merge message batches\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Additional requests allowed?.2\",\"type\":\"main\",\"index\":0}]]},\"Merge message batches\":{\"main\":[[{\"node\":\"Split Out body\",\"type\":\"main\",\"index\":0}]]},\"Split Out body\":{\"main\":[[{\"node\":\"Type = Auto\",\"type\":\"main\",\"index\":0}]]},\"Get each next page\":{\"main\":[[{\"node\":\"No more results?\",\"type\":\"main\",\"index\":0}]]},\"Get initial page\":{\"main\":[[{\"node\":\"Additional requests allowed?.1\",\"type\":\"main\",\"index\":0}]]},\"Add scenario logs to tracking table\":{\"main\":[[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Get blueprint\":{\"main\":[[{\"node\":\"Update scenario tracker table.2\",\"type\":\"main\",\"index\":0}]]},\"Single page of results?\":{\"main\":[[{\"node\":\"Split Out body\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Get each next page\",\"type\":\"main\",\"index\":0}]]},\"Loop Over Items\":{\"main\":[[{\"node\":\"Complete route.1\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait 5 secons.1\",\"type\":\"main\",\"index\":0}]]},\"Loop Over Items.1\":{\"main\":[[{\"node\":\"Edit Fields\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait 5 seconds.2\",\"type\":\"main\",\"index\":0}]]},\"Logs to load?\":{\"main\":[[{\"node\":\"Single page of results?\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Type = Auto\":{\"main\":[[{\"node\":\"Add scenario logs to tracking table\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Continue route.2\":{\"main\":[[{\"node\":\"Get each next page\",\"type\":\"main\",\"index\":0}]]},\"Wait for ratelimit reset.1\":{\"main\":[[{\"node\":\"Get initial page\",\"type\":\"main\",\"index\":0}]]},\"Wait for ratelimit reset.2\":{\"main\":[[{\"node\":\"Continue route.2\",\"type\":\"main\",\"index\":0}]]},\"Set Variables\":{\"main\":[[{\"node\":\"Loop Over Items.1\",\"type\":\"main\",\"index\":0}]]},\"Additional requests allowed?.2\":{\"main\":[[{\"node\":\"Continue route.2\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait for ratelimit reset.2\",\"type\":\"main\",\"index\":0}]]},\"Additional requests allowed?.1\":{\"main\":[[{\"node\":\"Logs to load?\",\"type\":\"main\",\"index\":0}],[{\"node\":\"Wait for ratelimit reset.1\",\"type\":\"main\",\"index\":0}]]},\"Update scenario tracker table.2\":{\"main\":[[{\"node\":\"Loop Over Items\",\"type\":\"main\",\"index\":0}]]},\"Postgres\":{\"main\":[[{\"node\":\"Aggregate\",\"type\":\"main\",\"index\":0}]]},\"Filter\":{\"main\":[[{\"node\":\"Postgres\",\"type\":\"main\",\"index\":0}]]},\"Aggregate\":{\"main\":[[{\"node\":\"Edit Fields1\",\"type\":\"main\",\"index\":0}]]},\"Wait 5 seconds.2\":{\"main\":[[{\"node\":\"Get initial page\",\"type\":\"main\",\"index\":0}]]},\"Wait 5 secons.1\":{\"main\":[[{\"node\":\"Get blueprint\",\"type\":\"main\",\"index\":0}]]}}}"
        }
    ]
},
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
