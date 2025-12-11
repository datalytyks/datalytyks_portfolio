// ============================================
// PORTFOLIO SITE - Main Script
// ============================================

// Render all projects on page load
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProjects();
    setupFilterListeners();
    setupLightbox();
});

// ============================================
// RENDERING FUNCTIONS
// ============================================

function renderFilters() {
    const container = document.getElementById('filter-buttons');
    
    // Get all unique tags used in projects
    const usedTags = new Set();
    PROJECTS.forEach(project => {
        project.tags.forEach(tag => usedTags.add(tag));
    });
    
    // Build filter buttons HTML
    let html = '<button class="filter-btn active" data-filter="all">All Projects</button>';
    
    usedTags.forEach(tagId => {
        const tag = DEFINED_TAGS[tagId];
        if (tag) {
            html += `<button class="filter-btn" data-filter="${tagId}">${tag.label}</button>`;
        }
    });
    
    container.innerHTML = html;
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = PROJECTS.map(project => renderProjectCard(project)).join('');
}

function renderProjectCard(project) {
    const tagsHtml = project.tags.map(tagId => {
        const tag = DEFINED_TAGS[tagId];
        if (!tag) return '';
        return `
            <span class="tech-tag">
                <img src="${tag.icon}" alt="${tag.label}">
                ${tag.label}
            </span>
        `;
    }).join('');

    const architectureHtml = project.architecture ? `
        <div class="detail-section">
            <h4>Solution Architecture</h4>
            <div class="architecture-diagram">
                <div class="arch-flow">
                    ${project.architecture.map((node, i) => `
                        ${i > 0 ? '<span class="arch-arrow">→</span>' : ''}
                        <div class="arch-node ${node.highlight ? 'highlight' : ''}">
                            <div class="arch-node-label">${node.label}</div>
                            <div class="arch-node-name">${node.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    ` : '';

    const featuresHtml = project.features ? `
        <div class="detail-section">
            <h4>Key Features Built</h4>
            <ul>
                ${project.features.map(f => `
                    <li><strong>${f.title}</strong> — ${f.description}</li>
                `).join('')}
            </ul>
        </div>
    ` : '';

    const highlightsHtml = project.highlights ? `
        <div class="detail-section">
            <h4>Technical Highlights</h4>
            <ul>
                ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    const screenshotsHtml = project.screenshots && project.screenshots.length > 0 ? `
        <div class="detail-section">
            <h4>Screenshots</h4>
            <div class="screenshots-gallery">
                ${project.screenshots.map(s => `
                    <div class="screenshot-item" onclick="openLightbox(this)">
                        ${s.url ? `
                            <img src="${s.url}" alt="${s.alt}">
                        ` : `
                            <div class="screenshot-placeholder">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <path d="m21 15-5-5L5 21"/>
                                </svg>
                                <span>${s.placeholder}</span>
                            </div>
                        `}
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    return `
        <article class="project-card" data-tags="${project.tags.join(',')}" data-id="${project.id}">
            <div class="project-header" onclick="toggleProject(this)">
                <div class="project-meta">
                    <span class="project-type">${project.type}</span>
                    <span class="project-date">${project.date}</span>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="tech-stack">${tagsHtml}</div>
            </div>

            <div class="project-details">
                <div class="project-details-inner">
                    ${project.challenge ? `
                        <div class="detail-section">
                            <h4>The Challenge</h4>
                            <p>${project.challenge}</p>
                        </div>
                    ` : ''}
                    ${architectureHtml}
                    ${featuresHtml}
                    ${highlightsHtml}
                    ${screenshotsHtml}
                </div>
            </div>

            <div class="expand-indicator">
                <span>View Details</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m6 9 6 6 6-6"/>
                </svg>
            </div>
        </article>
    `;
}

// ============================================
// INTERACTION HANDLERS
// ============================================

function toggleProject(header) {
    const card = header.closest('.project-card');
    card.classList.toggle('expanded');
    
    // Update indicator text
    const indicator = card.querySelector('.expand-indicator span');
    indicator.textContent = card.classList.contains('expanded') ? 'Hide Details' : 'View Details';
}

function setupFilterListeners() {
    document.getElementById('filter-buttons').addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-btn')) return;
        
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;
        
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const tags = card.dataset.tags?.split(',') || [];
                card.style.display = tags.includes(filter) ? 'block' : 'none';
            }
        });
    });
}

// ============================================
// LIGHTBOX
// ============================================

function setupLightbox() {
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(element) {
    const img = element.querySelector('img');
    if (img && img.src) {
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').classList.add('active');
    }
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
