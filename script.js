/* ==================== CONFIG LOADER ==================== */
// Embedded configuration object (for GitHub Pages compatibility with private repos)
let config = {
  "personal": {
    "firstName": "Rodas",
    "lastName": "Berhane",
    "title": "MSc Business Analytics | Applied Mathematics | Data Analyst",
    "bio": "MSc Business Analytics Candidate at UCD Smurfit",
    "tagline": "I turn chaos to clarity to build meaningful stories.",
    "email": "rodas.okubagabir@ucdconnect.ie",
    "location": "Dublin, Ireland"
  },
  "social": {
    "linkedin": "https://www.linkedin.com/in/rodasokubagabir",
    "github": "https://github.com/rodberhane",
    "twitter": "https://x.com/RBerhane2008"
  },
  "files": {
    "resume": "documents/Rodas-Berhane-Resume.pdf",
    "profileImage": "images/profile.jpg"
  },
  "theme": {
    "primaryPink": "#FF1493",
    "deepRose": "#C2185B",
    "darkBackground": "#111111",
    "lightBackground": "#f8f8f8",
    "darkText": "#ffffff",
    "lightText": "#1a1a1a",
    "darkSecondaryText": "#b8b8b8",
    "lightSecondaryText": "#666666",
    "defaultMode": "dark"
  },
  "about": {
    "subtitle": "Where I studied",
    "education": {
      "institution": "UCD Michael Smurfit Graduate Business School",
      "degree": "MSc Business Analytics",
      "gpa": "Expected 2:1 — Second Class Honours Grade 1",
      "graduationDate": "Sep 2025 – Present",
      "modules": [
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Database Concepts",
        "Discrete Mathematics and Graph Theory",
        "Linear Programming",
        "Numerical Methods",
        "Mathematical Statistics",
        "Probability and Statistics",
        "Differential Equations",
        "Linear Algebra II",
        "Optimisation / Mathematical Methods"
      ]
    },
    "paragraphs": [
      "My name is Rodas. I graduated in Applied Mathematics and Computer Science because I was genuinely fascinated by how numbers and systems work together — not just the theory, but how they solve real problems.",
      "That passion for data naturally led me to pursue an MSc in Business Analytics at UCD on a full scholarship. I wanted to understand not just the technical side, but the business impact — what the data actually means and how to use it to make better decisions.",
      "Now I'm focused on bridging that gap between complex analysis and clear insights. Whether it's building models, querying databases, or visualising data in Tableau, I care about the story the numbers tell and how it drives action.",
      "Based in Dublin, graduating 2026. Looking for data analytics, BI, or strategy roles where I can keep solving problems that matter."
    ],
    "additionalEducation": [
      {
        "degree": "BSc Applied Mathematics and Computer Science",
        "institution": "Eritrea Institute of Technology, Asmara, Eritrea",
        "gpa": "Grade: 1.1 — First Class Honours",
        "period": "Sep 2016 – Jul 2020"
      },
      {
        "degree": "Diploma in Accounting & Finance in Business and Management",
        "institution": "Cambridge International College, Jersey, UK",
        "gpa": "Grade: 3.5",
        "period": "Jan 2021 – Dec 2022"
      }
    ],
    "stats": {
      "projectsCompleted": 8,
      "organizationsWorked": 3,
      "yearsInTech": 4
    }
  },
  "experience": [
    {
      "title": "Instructor & Database Manager",
      "company": "Eritrean Airforce",
      "location": "Asmara, Eritrea",
      "startDate": "Oct 2020",
      "endDate": "Feb 2023",
      "highlights": [
        "Delivered instruction in Python programming and pre-calculus mathematics",
        "Designed and maintained structured database systems for operational data",
        "Analysed datasets to improve reporting accuracy and decision support",
        "Collaborated across departments during rotational assignments to support data management initiatives"
      ]
    },
    {
      "title": "Database Systems Designer",
      "company": "Freelance",
      "location": "Asmara, Eritrea",
      "startDate": "Jan 2021",
      "endDate": "Feb 2023",
      "highlights": [
        "Designed and implemented customised database management systems for car rental businesses",
        "Improved operational efficiency through structured data workflows",
        "Advised small businesses on database optimisation and data governance practices",
        "Provided introductory programming tuition (Scratch) to junior learners"
      ]
    },
    {
      "title": "Customer Service Agent",
      "company": "Betna Ruftana Remittance Services",
      "location": "Kampala, Uganda",
      "startDate": "Jul 2023",
      "endDate": "Jan 2025",
      "highlights": [
        "Delivered real-time remote customer support for cross-border payment services",
        "Resolved client inquiries efficiently while maintaining high service standards",
        "Supported transaction accuracy and compliance within digital remittance operations"
      ]
    }
  ],
  "projects": [
    {
      "title": "UrbanEats Expansion Strategy",
      "description": "Analysed 4 years of demand data to identify operational bottlenecks and designed a 5-branch expansion strategy; allocated €1.36M investment, €220K under budget",
      "tags": ["Python", "Holt-Winters", "Forecasting"],
      "category": "python",
      "links": {
        "report": "https://github.com/rodberhane",
        "demo": ""
      }
    },
    {
      "title": "Airline Hub Optimisation Model",
      "description": "Mixed-integer optimisation model using FICO Xpress (Mosel) for a 12-city airline expansion with sensitivity analysis on demand, emissions and budget scenarios",
      "tags": ["FICO Xpress", "Mosel", "Optimisation"],
      "category": "optimisation",
      "links": {
        "report": "documents/Airline_Hub_Optimisation_Portfolio.pdf",
        "code": "documents/Airline_Hub_Code_Portfolio.pdf"
      }
    },
    {
      "title": "AI-Powered Meeting Minutes Generator",
      "description": "Automated system using Whisper AI for transcription and LLM-powered summarisation of meeting notes",
      "tags": ["Python", "LLM", "Streamlit"],
      "category": "python",
      "links": {
        "github": "https://github.com/rodberhane/meeting_minutes_generator",
        "demo": ""
      }
    },
    {
      "title": "Telco Customer Churn Analysis",
      "description": "Analysed 7,043 customer records using Python and Pandas for data cleaning, queried patterns across contract type, tenure, payment method and internet service, then visualised findings in an interactive Tableau dashboard published live on Tableau Public.",
      "tags": ["Python", "Pandas", "SQL", "Tableau"],
      "category": "python tableau sql",
      "links": {
        "report": "#",
        "tableau": "https://public.tableau.com/app/profile/rodiiberhane/viz/churnpredictionviz/Dashboard1"
      }
    },
    {
      "title": "Statistical Methods in Irish Property Market Analysis",
      "description": "A statistical analysis of the Irish property market using regression modelling, hypothesis testing, and descriptive statistics to identify key pricing trends and regional patterns.",
      "tags": ["Hypothesis Testing", "Statistics", "Excel"],
      "category": "statistics",
      "links": {
        "report": "documents/Ireland_Property_Report1.pdf"
      }
    },
    {
      "title": "Customer Churn Prediction",
      "description": "Machine learning model predicting customer churn using Logistic Regression and Random Forest, deployed as a live Streamlit web app. Combines Python, ML, and business storytelling.",
      "tags": ["Python", "Machine Learning", "Streamlit"],
      "category": "python",
      "links": {
        "github": "https://github.com/rodberhane",
        "demo": ""
      }
    }
  ],
  "volunteer": [
    {
      "organization": "University College Dublin",
      "role": "Global Leadership Program",
      "startDate": "2025",
      "endDate": "2026",
      "description": "Participating in UCD's Global Leadership Program contributing to community impact initiatives."
    },
    {
      "organization": "Eritrea Institute of Technology",
      "role": "Editorial Volunteer",
      "startDate": "2019",
      "endDate": "2020",
      "description": "Contributed to the 14th Commencement Graduation Magazine, supporting the editorial team in documenting institutional milestones and celebrating student achievements."
    },
    {
      "organization": "Eritrea Institute of Technology",
      "role": "Academic Events Organiser",
      "startDate": "2017",
      "endDate": "2020",
      "description": "Assisted in organising annual academic events across the institution, coordinating logistics and supporting student engagement activities."
    }
  ],
  "contact": {
    "heading": "Let's create something meaningful together",
    "message": "I'm always open to discussing data-driven opportunities, analytics projects, or just a conversation about turning complex problems into clear solutions. Feel free to reach out.",
    "formPlaceholders": {
      "name": "Your name",
      "email": "your@email.com",
      "message": "Tell me about your project or opportunity..."
    }
  },
  "footer": {
    "copyright": "2026",
    "credit": "Designed & Built by Rodas Berhane"
  }
};

// Initialize the portfolio
function loadConfig() {
    try {
        applyTheme();
        populateContent();
    } catch (error) {
        console.error('Error loading config:', error);
        showError('Error loading portfolio configuration. See console for details.');
    }
}

// Show error message
function showError(message) {
    document.body.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #111111; color: #ffffff; font-family: Inter, sans-serif; text-align: center; padding: 2rem;">
            <div>
                <h1 style="margin-bottom: 1rem;">⚠️ Configuration Error</h1>
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">${message}</p>
                <p style="color: #b8b8b8; margin-bottom: 1rem;">Please ensure <code>static_private_info.json</code> exists and is valid JSON.</p>
                <p style="color: #b8b8b8; margin-top: 2rem; font-size: 0.9rem;">
                    Need help? Copy <code>static_private_info.example.json</code> to <code>static_private_info.json</code>
                </p>
            </div>
        </div>
    `;
}

/* ==================== APPLY THEME ==================== */
function applyTheme() {
    if (!config.theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary-pink', config.theme.primaryPink);
    root.style.setProperty('--deep-rose', config.theme.deepRose);
    root.style.setProperty('--dark-bg', config.theme.darkBackground);
    root.style.setProperty('--light-bg', config.theme.lightBackground);
    root.style.setProperty('--text-light', config.theme.darkText);
    root.style.setProperty('--text-dark', config.theme.lightText);
    root.style.setProperty('--text-secondary-light', config.theme.darkSecondaryText);
    root.style.setProperty('--text-secondary-dark', config.theme.lightSecondaryText);

    // Set default theme mode
    if (config.theme.defaultMode === 'light') {
        document.body.classList.add('light-mode');
    }
}

/* ==================== POPULATE CONTENT ==================== */
function populateContent() {
    if (!config) return;

    // Page title
    if (config.personal) {
        const title = `${config.personal.firstName} ${config.personal.lastName}`;
        document.getElementById('pageTitle').textContent = title;

        // Navbar
        document.getElementById('firstName').textContent = config.personal.firstName;
        document.getElementById('lastName').textContent = config.personal.lastName;
        document.getElementById('homeBio').textContent = `${config.personal.bio} · ${config.personal.location}`;
    }

    // Social links
    if (config.social) {
        const linkedinUrl = config.social.linkedin;
        const githubUrl = config.social.github;
        const email = config.personal.email;

        document.getElementById('cvButton').href = config.files.resume;
        document.getElementById('linkedinIcon').href = linkedinUrl;
        document.getElementById('githubIcon').href = githubUrl;

        document.getElementById('socialLinkedin').href = linkedinUrl;
        document.getElementById('socialGithub').href = githubUrl;
        document.getElementById('socialEmail').href = `mailto:${email}`;

        document.getElementById('contactLinkedin').href = linkedinUrl;
        document.getElementById('contactGithub').href = githubUrl;
        document.getElementById('contactEmail').href = `mailto:${email}`;
        document.getElementById('contactEmail').querySelector('span').textContent = email;

        document.getElementById('emailText').textContent = email;
        document.getElementById('cvButtonMobile').href = config.files.resume;

        document.getElementById('footerLinkedin').href = linkedinUrl;
        document.getElementById('footerGithub').href = githubUrl;
        document.getElementById('footerEmail').href = `mailto:${email}`;

        if (config.social.twitter) {
            const twitterUrl = config.social.twitter;
            const els = ['twitterIcon', 'socialTwitter', 'footerTwitter'];
            els.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.href = twitterUrl;
            });
        }
    }

    // Profile image
    if (config.files && config.files.profileImage) {
        document.getElementById('profileImage').src = config.files.profileImage;
    }

    // About section
    if (config.about) {
        const edu = config.about.education;

        // Render individual education cards
        const allEdu = [
            { degree: edu.degree, institution: edu.institution, gpa: edu.gpa, period: edu.graduationDate },
            ...(config.about.additionalEducation || [])
        ];
        const eduGrid = document.getElementById('educationCardsGrid');
        if (eduGrid) {
            eduGrid.innerHTML = allEdu.map(e => `
                <div class="edu-card">
                    <div class="edu-card-icon"><i class="fas fa-graduation-cap"></i></div>
                    <div class="edu-card-degree">${e.degree}</div>
                    <div class="edu-card-institution">${e.institution}</div>
                    <ul class="edu-card-details">
                        <li>${e.gpa}</li>
                        <li>${e.period}</li>
                    </ul>
                </div>
            `).join('');
        }

        let modulesHtml = edu.modules.map(m => `<li>${m}</li>`).join('');
        document.getElementById('modulesList').innerHTML = modulesHtml;

        let bioHtml = config.about.paragraphs.map(p => `<p>${p}</p>`).join('');
        document.getElementById('bioContent').innerHTML = bioHtml;

        document.getElementById('projectCount').textContent = config.about.stats.projectsCompleted;
        document.getElementById('orgCount').textContent = config.about.stats.organizationsWorked;
        document.getElementById('yearCount').textContent = config.about.stats.yearsInTech;
    }

    // Work experience
    if (config.experience) {
        let workHtml = config.experience.map(job => `
            <div class="timeline-item">
                <div class="work-card">
                    <h3>${job.title}</h3>
                    <h4>${job.company}</h4>
                    <div class="work-date">${job.location} · ${job.startDate} - ${job.endDate}</div>
                    <ul>
                        ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
        document.getElementById('workContainer').innerHTML = workHtml;
    }

    // Projects
    if (config.projects) {
        // Generate filter pills
        const categories = new Set();
        config.projects.forEach(p => {
            p.category.split(' ').forEach(c => categories.add(c));
        });

        let filterHtml = '<button class="filter-pill active" data-filter="all">All</button>';
        categories.forEach(cat => {
            filterHtml += `<button class="filter-pill" data-filter="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`;
        });
        document.getElementById('projectFilters').innerHTML = filterHtml;

        // Generate project cards
        let projectsHtml = config.projects.map(proj => `
            <div class="project-card" data-category="${proj.category}">
                <div class="project-header">
                    <h3>${proj.title}</h3>
                    <p class="project-desc">${proj.description}</p>
                </div>
                <div class="project-body">
                    <div class="tech-stack">
                        ${proj.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${proj.links.pdf ? `<button class="project-link" onclick="openPdfModal('${proj.links.pdf}')">📄 View Report</button>` : ''}
                        ${proj.links.report ? `<a href="${proj.links.report}" target="_blank" class="project-link">Report</a>` : ''}
                        ${proj.links.code ? `<a href="${proj.links.code}" target="_blank" class="project-link">Code</a>` : ''}
                        ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" class="project-link">GitHub</a>` : ''}
                        ${proj.links.tableau ? `<a href="${proj.links.tableau}" target="_blank" class="project-link">Tableau Dashboard</a>` : ''}
                        ${proj.links.demo ? `<a href="${proj.links.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        document.getElementById('projectsContainer').innerHTML = projectsHtml;
    }

    // Volunteer
    if (config.volunteer) {
        let volunteerHtml = config.volunteer.map(vol => `
            <div class="volunteer-card">
                <div class="volunteer-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <h3>${vol.organization}</h3>
                <div class="volunteer-role">${vol.role}</div>
                <div class="volunteer-date">${vol.startDate} - ${vol.endDate}</div>
                <p class="volunteer-desc">${vol.description}</p>
            </div>
        `).join('');
        document.getElementById('volunteerContainer').innerHTML = volunteerHtml;
    }

    // Contact
    if (config.contact) {
        document.getElementById('contactHeading').textContent = config.contact.heading;
        document.getElementById('contactMessage').textContent = config.contact.message;
    }

    // Footer
    if (config.footer) {
        document.getElementById('footerText').textContent = `${config.footer.credit} · ${config.footer.copyright}`;
    }

    // Re-attach event listeners after populating
    attachEventListeners();
}

/* ==================== TYPEWRITER EFFECT ==================== */
function initTypewriter() {
    const sentence = "Welcome \u2014 let\u2019s meet. I\u2019m Rodas. I bring chaos to clarity to build meaningful stories.";
    const el = document.getElementById('typewriter');
    if (!el) return;

    let charIndex = 0;

    function getDelay(char) {
        if (char === '.' || char === '\u2014') return 480;
        if (char === ',') return 260;
        if (char === ' ') return 55 + Math.random() * 25;
        return 60 + Math.random() * 55;
    }

    function type() {
        el.textContent = sentence.substring(0, charIndex);
        if (charIndex === sentence.length) {
            setTimeout(() => { charIndex = 0; type(); }, 2000);
            return;
        }
        const nextChar = sentence[charIndex];
        charIndex++;
        setTimeout(type, getDelay(nextChar));
    }

    setTimeout(type, 400);
}

/* ==================== HERO CANVAS BACKGROUND ==================== */
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const PINK = 'rgba(255, 20, 147,';
    const GRID = 65;
    const PARTICLE_COUNT = 68;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let smoothX = mouseX;
    let smoothY = mouseY;
    let time = 0;

    // Deterministic glow nodes — no random per frame, no flicker
    function isGlowNode(col, row) {
        return ((col * 17 + row * 11) % 8) === 0;
    }

    // Particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.6 + 0.5,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.45 + 0.12,
        phase: Math.random() * Math.PI * 2
    }));

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function drawGrid(ox, oy) {
        const sx = -(((ox % GRID) + GRID) % GRID);
        const sy = -(((oy % GRID) + GRID) % GRID);

        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `${PINK} 0.045)`;
        ctx.beginPath();
        for (let x = sx; x < canvas.width + GRID; x += GRID) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
        }
        for (let y = sy; y < canvas.height + GRID; y += GRID) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
        }
        ctx.stroke();

        // Glowing intersection nodes
        let col = 0;
        for (let x = sx; x < canvas.width + GRID; x += GRID, col++) {
            let row = 0;
            for (let y = sy; y < canvas.height + GRID; y += GRID, row++) {
                if (isGlowNode(col, row)) {
                    const pulse = 0.5 + 0.5 * Math.sin(time * 1.4 + col * 0.9 + row * 0.7);
                    ctx.shadowBlur = 7;
                    ctx.shadowColor = `${PINK} 0.7)`;
                    ctx.fillStyle = `${PINK} ${0.08 + 0.28 * pulse})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 1.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
        ctx.shadowBlur = 0;
    }

    function drawFlowLines(oy) {
        for (let i = 0; i < 4; i++) {
            const baseY = canvas.height * (i + 1) / 5;
            const amp = 22 + i * 9;
            const freq = 0.007 - i * 0.0008;
            ctx.beginPath();
            ctx.strokeStyle = `${PINK} ${0.038 + i * 0.012})`;
            ctx.lineWidth = 0.9;
            for (let x = 0; x <= canvas.width; x += 4) {
                const y = baseY + Math.sin(time * 0.42 + x * freq + i * 1.3) * amp + oy * 0.35;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    }

    function updateAndDrawParticles() {
        ctx.save();
        ctx.shadowBlur = 13;
        ctx.shadowColor = `${PINK} 0.75)`;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.phase += 0.018;

            if (p.x < -12) p.x = canvas.width + 12;
            if (p.x > canvas.width + 12) p.x = -12;
            if (p.y < -12) p.y = canvas.height + 12;
            if (p.y > canvas.height + 12) p.y = -12;

            // Mouse repulsion
            const dx = p.x - smoothX;
            const dy = p.y - smoothY;
            const distSq = dx * dx + dy * dy;
            const R = 115;
            if (distSq < R * R && distSq > 0) {
                const dist = Math.sqrt(distSq);
                const force = ((R - dist) / R) * 1.6;
                p.x += (dx / dist) * force;
                p.y += (dy / dist) * force;
            }

            const op = p.opacity * (0.72 + 0.28 * Math.sin(p.phase));
            const sz = p.size + Math.sin(p.phase) * 0.4;
            ctx.fillStyle = `${PINK} ${op})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    }

    function animate() {
        time += 0.016;

        // Smooth mouse follow
        smoothX += (mouseX - smoothX) * 0.05;
        smoothY += (mouseY - smoothY) * 0.05;

        // Parallax offsets
        const ox = (smoothX / canvas.width - 0.5) * 42;
        const oy = (smoothY / canvas.height - 0.5) * 42;

        // Dark background
        ctx.fillStyle = '#0b0b0b';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Radial glow following mouse
        const g = ctx.createRadialGradient(smoothX, smoothY, 0, smoothX, smoothY, Math.max(canvas.width, canvas.height) * 0.44);
        g.addColorStop(0, 'rgba(255, 20, 147, 0.07)');
        g.addColorStop(0.45, 'rgba(194, 24, 91, 0.03)');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawGrid(ox * 1.6, oy * 1.6);
        drawFlowLines(oy);
        updateAndDrawParticles();

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==================== SCROLL PROGRESS ==================== */
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

/* ==================== CUSTOM CURSOR ==================== */
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = (mouseX - 10) + 'px';
        cursor.style.top = (mouseY - 10) + 'px';

        cursorDot.style.left = (mouseX - 4) + 'px';
        cursorDot.style.top = (mouseY - 4) + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorDot.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorDot.classList.remove('active');
    });
}

/* ==================== NAVBAR SCROLL ==================== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ==================== THEME TOGGLE ==================== */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    const savedTheme = localStorage.getItem('theme') || (config.theme?.defaultMode || 'dark');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

/* ==================== HAMBURGER MENU ==================== */
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

/* ==================== INTERSECTION OBSERVER ==================== */
function initObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate-left');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.work-card, .volunteer-card, .project-card').forEach(el => {
        observer.observe(el);
    });
}

/* ==================== PROJECT FILTERING ==================== */
function initProjectFiltering() {
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-card');

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const filterValue = pill.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory.includes(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}

/* ==================== BACK TO TOP ==================== */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==================== SMOOTH SCROLLING ==================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/* ==================== FORM HANDLING ==================== */
function initFormHandling() {
    const contactForm = document.getElementById('contactFormElement');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = `New Message from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

            window.location.href = `mailto:${config.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            contactForm.reset();
        });
    }
}

/* ==================== ATTACH ALL EVENT LISTENERS ==================== */
function attachEventListeners() {
    initProjectFiltering();
    initObserver();
}

/* ==================== INIT ALL ==================== */
async function initAll() {
    await loadConfig();

    if (!config || Object.keys(config).length === 0) return;

    initHeroCanvas();
    initTypewriter();
    initScrollProgress();
    initCursor();
    initNavbar();
    initThemeToggle();
    initHamburger();
    initBackToTop();
    initSmoothScroll();
    initFormHandling();
    attachEventListeners();
}

// PDF Modal
function openPdfModal(src) {
    document.getElementById('pdfModalFrame').src = src;
    document.getElementById('pdfModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.remove('active');
    document.getElementById('pdfModalFrame').src = '';
    document.body.style.overflow = '';
}

// Start on page load
document.addEventListener('DOMContentLoaded', initAll);

