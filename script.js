/* ==================== CONFIG LOADER ==================== */
// Embedded configuration object (for GitHub Pages compatibility with private repos)
let config = {
  "personal": {
    "firstName": "Rodas",
    "lastName": "Berhane",
    "title": "Data Analyst & Business Intelligence Specialist",
    "bio": "MSc Business Analytics Candidate at UCD Dublin",
    "tagline": "I turn messy data into clear insights and actionable strategies.",
    "email": "rodas.okubagabir@ucdconnect.ie",
    "location": "Dublin, Ireland"
  },
  "social": {
    "linkedin": "https://www.linkedin.com/in/rodasokubagabir",
    "github": "https://github.com/rodberhane",
    "twitter": ""
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
      "institution": "University College Dublin (UCD Smurfit)",
      "degree": "MSc Business Analytics",
      "gpa": "First Class Honours",
      "graduationDate": "May 2026",
      "modules": [
        "Advanced Data Analytics",
        "Machine Learning",
        "Business Intelligence",
        "Data Visualization",
        "Statistical Methods"
      ]
    },
    "paragraphs": [
      "I'm a passionate data analyst with expertise in transforming complex datasets into actionable business insights. My background combines strong analytical foundations with practical experience in building data solutions that drive strategic decisions.",
      "I specialize in SQL database design, Python for data processing, and creating compelling visualizations in Tableau and Power BI. I'm particularly interested in business intelligence, data governance, and helping organizations unlock the value in their data."
    ],
    "stats": {
      "projectsCompleted": 6,
      "organizationsWorked": 3,
      "yearsInTech": 2
    }
  },
  "experience": [
    {
      "title": "Data Analyst Intern",
      "company": "TechCorp Analytics",
      "location": "Dublin, Ireland",
      "startDate": "Jun 2024",
      "endDate": "Aug 2024",
      "highlights": [
        "Built automated ETL pipelines reducing manual reporting time by 40%",
        "Created real-time dashboards monitoring KPIs for executive leadership",
        "Identified data quality issues affecting 2+ business metrics"
      ]
    },
    {
      "title": "Business Analyst",
      "company": "FinanceFirst",
      "location": "Dublin, Ireland",
      "startDate": "Sep 2023",
      "endDate": "May 2024",
      "highlights": [
        "Analyzed customer behavior data to identify retention opportunities",
        "Designed and validated A/B testing framework improving conversion by 15%",
        "Collaborated with product team to define data requirements for new features"
      ]
    },
    {
      "title": "Data Science Intern",
      "company": "DataDriven Solutions",
      "location": "Remote",
      "startDate": "Jan 2023",
      "endDate": "Mar 2023",
      "highlights": [
        "Developed predictive models for customer churn with 85% accuracy",
        "Automated monthly reporting process saving 8 hours per week",
        "Documented data pipelines and best practices for team reuse"
      ]
    }
  ],
  "projects": [
    {
      "title": "AI-Powered Meeting Minutes Generator",
      "description": "Automated system using Whisper AI for transcription and LLM-powered summarization",
      "tags": ["Python", "LLM", "Streamlit"],
      "category": "python",
      "links": {
        "github": "https://github.com/rodberhane/meeting-minutes-generator",
        "demo": ""
      }
    },
    {
      "title": "AIB Risk Capital Dashboard",
      "description": "Comprehensive dashboard analyzing credit risk and capital allocation strategies",
      "tags": ["Python", "Tableau", "Risk Analysis"],
      "category": "tableau python",
      "links": {
        "github": "https://github.com/rodberhane/aib-risk-capital-dashboard",
        "demo": "https://public.tableau.com/app/profile/rodas.okubagabir"
      }
    },
    {
      "title": "SQL Data Warehouse + BI Dashboard",
      "description": "Star schema data warehouse with automated ETL and interactive Tableau dashboard",
      "tags": ["SQL", "PostgreSQL", "Tableau"],
      "category": "sql tableau",
      "links": {
        "github": "https://github.com/rodberhane/data-warehouse-project",
        "demo": ""
      }
    },
    {
      "title": "Data Quality + KPI Monitoring",
      "description": "Automated data quality checks with real-time KPI monitoring and alerts",
      "tags": ["Python", "Pandas", "Data Quality"],
      "category": "python",
      "links": {
        "github": "https://github.com/rodberhane/kpi-monitoring-system",
        "demo": ""
      }
    },
    {
      "title": "Data Governance Mini-System",
      "description": "Data catalog with ownership tracking and quality scoring system",
      "tags": ["Python", "Data Governance", "SQL"],
      "category": "python sql",
      "links": {
        "github": "https://github.com/rodberhane/data-governance-system",
        "demo": ""
      }
    },
    {
      "title": "Customer Churn Prediction Model",
      "description": "ML model predicting customer churn with 87% accuracy and interactive visualizations",
      "tags": ["Python", "ML", "Scikit-learn"],
      "category": "python",
      "links": {
        "github": "https://github.com/rodberhane/churn-prediction",
        "demo": ""
      }
    }
  ],
  "volunteer": [
    {
      "organization": "UCD Analytics Club",
      "role": "Workshop Facilitator",
      "startDate": "Jun 2024",
      "endDate": "Present",
      "description": "Lead monthly workshops teaching SQL and data visualization to aspiring analysts. Mentored 15+ students in their first data projects."
    },
    {
      "organization": "Women in Data Ireland",
      "role": "Volunteer Mentor",
      "startDate": "Jan 2024",
      "endDate": "Present",
      "description": "Mentor women transitioning into data roles, providing career guidance and technical support. Helped 5 mentees secure analyst positions."
    },
    {
      "organization": "Open Data Community",
      "role": "Data Analyst Volunteer",
      "startDate": "Sep 2023",
      "endDate": "Dec 2023",
      "description": "Built donation tracking dashboard for non-profit organization, enabling data-driven fundraising strategy. Saved organization 10+ hours monthly."
    }
  ],
  "contact": {
    "heading": "Let's create something amazing together",
    "message": "I'm always interested in discussing data-driven solutions and new opportunities. Whether you have a project in mind or just want to chat about analytics, feel free to reach out.",
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
    }

    // Profile image
    if (config.files && config.files.profileImage) {
        document.getElementById('profileImage').src = config.files.profileImage;
    }

    // About section
    if (config.about) {
        const edu = config.about.education;
        document.getElementById('institution').innerHTML = `<span style="font-size: 1.3rem;">${edu.degree}</span><br><span style="font-size: 0.95rem; color: var(--text-secondary-light);">${edu.institution}</span>`;

        let eduHtml = `
            <li><strong>GPA:</strong> ${edu.gpa}</li>
            <li><strong>Graduation:</strong> ${edu.graduationDate}</li>
        `;
        document.getElementById('educationList').innerHTML = eduHtml;

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
                        ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" class="project-link">GitHub</a>` : ''}
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
    const words = ['decisions.', 'clarity.', 'impact.', 'stories.'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter');

    function typewriter() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => { isDeleting = true; }, 1500);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typewriter, isDeleting ? 50 : 100);
    }

    typewriter();
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

// Start on page load
document.addEventListener('DOMContentLoaded', initAll);

