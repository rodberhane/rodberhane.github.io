# 🎬 Elite Portfolio - Configurable & Generic

A professional, cinematic portfolio website fully configurable via JSON. Perfect for any data analyst, engineer, or professional.

## ⚡ Quick Start (5 Minutes)

### 1. Edit Your Configuration
The portfolio reads from `static_private_info.json`. Everything is controlled through this single file.

```bash
# You already have it! Just edit with your info
nano static_private_info.json
```

### 2. Add Your Files
```bash
# Place your professional photo
images/profile.jpg

# Place your resume/CV
documents/your-resume.pdf
```

### 3. Open & Preview
```bash
# Using local server (required for JSON loading)
python3 -m http.server 8000
# Then open: http://localhost:8000
```

Or if you have Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### 4. Deploy to GitHub Pages

```bash
# Commit changes
git add .
git commit -m "Deploy elite portfolio"

# Push to GitHub
git push origin main

# Your portfolio is live at:
# https://yourusername.github.io/portfolio/
```

---

## 📝 Configuration Guide

All portfolio content and styling is controlled by `static_private_info.json`.

### Structure Overview

```json
{
  "personal": { ... },        // Name, email, location
  "social": { ... },          // LinkedIn, GitHub, Twitter
  "files": { ... },           // Resume, profile image paths
  "theme": { ... },           // Colors and styling
  "about": { ... },           // Education, bio, stats
  "experience": [ ... ],      // Work history (array)
  "projects": [ ... ],        // Projects (array)
  "volunteer": [ ... ],       // Volunteer work (array)
  "contact": { ... },         // Contact section text
  "footer": { ... }           // Footer credits
}
```

### Customize Everything

#### Personal Information
```json
"personal": {
  "firstName": "Your",
  "lastName": "Name",
  "title": "Your Job Title",
  "bio": "Your tagline",
  "email": "you@example.com",
  "location": "City, Country"
}
```

#### Social Media
```json
"social": {
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourprofile",
  "twitter": "https://twitter.com/yourprofile"
}
```

#### Theme Colors (Fully Customizable!)
```json
"theme": {
  "primaryPink": "#FF1493",        // Main accent color
  "deepRose": "#C2185B",           // Secondary accent
  "darkBackground": "#111111",     // Dark mode background
  "lightBackground": "#f8f8f8",    // Light mode background
  "darkText": "#ffffff",           // Dark mode text
  "lightText": "#1a1a1a",          // Light mode text
  "darkSecondaryText": "#b8b8b8",  // Dark mode secondary text
  "lightSecondaryText": "#666666", // Light mode secondary text
  "defaultMode": "dark"            // "dark" or "light"
}
```

#### Education & About
```json
"about": {
  "education": {
    "institution": "Your University",
    "degree": "Your Degree",
    "gpa": "3.8 / 4.0",
    "graduationDate": "May 2024",
    "modules": [
      "Course 1",
      "Course 2",
      "Course 3"
    ]
  },
  "paragraphs": [
    "Your first paragraph",
    "Your second paragraph"
  ],
  "stats": {
    "projectsCompleted": 12,
    "organizationsWorked": 3,
    "yearsInTech": 5
  }
}
```

#### Work Experience (Array)
Add/remove objects as needed:
```json
"experience": [
  {
    "title": "Job Title",
    "company": "Company Name",
    "location": "City, Country",
    "startDate": "Jan 2024",
    "endDate": "Present",
    "highlights": [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
]
```

#### Projects (Array)
Add/remove projects:
```json
"projects": [
  {
    "title": "Project Name",
    "description": "One-line description",
    "tags": ["Python", "SQL", "Tableau"],
    "category": "python sql",
    "links": {
      "github": "https://github.com/you/project",
      "demo": "https://demo.example.com"
    }
  }
]
```

#### Volunteer Work (Array)
```json
"volunteer": [
  {
    "organization": "Organization Name",
    "role": "Your Role",
    "startDate": "Jan 2024",
    "endDate": "Present",
    "description": "What you did and impact"
  }
]
```

---

## 🎨 Theme Color Examples

### Blue Professional Theme
```json
{
  "primaryPink": "#0099ff",
  "deepRose": "#0066cc",
  "darkBackground": "#0a0e27",
  "lightBackground": "#f0f4ff"
}
```

### Green Data Theme
```json
{
  "primaryPink": "#00d084",
  "deepRose": "#00a86b",
  "darkBackground": "#0f2f1a",
  "lightBackground": "#e8f5f0"
}
```

### Purple Premium Theme
```json
{
  "primaryPink": "#9d4edd",
  "deepRose": "#7209b7",
  "darkBackground": "#1a0a2e",
  "lightBackground": "#f0e8ff"
}
```

---

## 📁 File Structure

```
portfolio/
├── index.html                      (main app - GitHub Pages uses this)
├── elite-portfolio.html            (same as index.html)
├── static_private_info.json        (YOUR DATA - gitignored)
├── static_private_info.example.json (template)
├── README.md                       (this file)
├── .gitignore                      (protects your data)
├── .git/                           (version control)
├── images/
│   └── profile.jpg                 (your photo)
└── documents/
    └── resume.pdf                  (your resume)
```

---

## 🔒 Privacy & Security

✅ `static_private_info.json` is **automatically gitignored**
✅ Your personal data **never gets committed** to GitHub
✅ `static_private_info.example.json` is a template for sharing
✅ Perfect for making a reusable portfolio template

---

## 🚀 Deployment

### GitHub Pages (Recommended)
```bash
# Ensure you have main branch set up
git branch -M main

# Commit
git add .
git commit -m "Deploy portfolio"

# Push
git push origin main

# Your site: https://yourusername.github.io/portfolio/
```

### Local Server (For Testing)
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then open: http://localhost:8000
```

### Other Hosts
Works on any static host: Vercel, Netlify, etc.

---

## ✨ Features

- ✅ **JSON-Driven** - Control everything via config file
- ✅ **Fully Customizable Colors** - Change theme in one place
- ✅ **Dark/Light Mode** - Toggle with preference saving
- ✅ **Smooth Animations** - 60fps, professional feel
- ✅ **Mobile Responsive** - Perfect on all devices
- ✅ **Project Filtering** - Filter by category/tags
- ✅ **Custom Cursor** - Pink glowing cursor effect
- ✅ **Email Integration** - Contact form ready
- ✅ **GitHub Pages Ready** - Deploy instantly
- ✅ **Generic & Reusable** - Perfect template for others

---

## 🆘 Troubleshooting

### "JSON not loading"
- Make sure you're using a **local server** (not just opening file)
- Check `static_private_info.json` is in the same folder
- Verify JSON is valid (use https://jsonlint.com/)

### "Images not showing"
- Check file is at `images/profile.jpg`
- Update path in config if different
- Try PNG or WebP format

### "Links not working"
- Verify URLs start with `https://`
- Check for typos in email address
- Test links in browser directly

### "GitHub Pages not working"
- Wait 1-2 minutes after pushing
- Go to repo Settings → Pages
- Verify branch is set to `main`
- Check GitHub Pages is enabled

---

## 📚 For Others Using Your Template

Share instructions:

1. **Fork or clone** this repository
2. **Copy** `static_private_info.example.json` → `static_private_info.json`
3. **Edit** your config with your information
4. **Add** your photo and resume
5. **Deploy** to GitHub Pages!

Your personal data is protected and never shared.

---

## 🎯 Tips for Success

1. **Profile Photo** - Professional headshot, good lighting
2. **Metrics** - Include numbers: "40% improvement", "500K users"
3. **GitHub Links** - Make repos public
4. **Live Demos** - Include working demo links
5. **Keywords** - Use industry terms in project descriptions
6. **Mobile Test** - Test on your phone before sharing
7. **Update Regularly** - Add new projects every quarter

---

## 💡 Advanced Usage

### Making a Template for Others
This is perfect for sharing as a portfolio template!

1. Keep `static_private_info.example.json` filled with good example data
2. Remove `static_private_info.json` (it's gitignored anyway)
3. Others will copy the example to create their own
4. Document the JSON structure (see above)

### Hosting Multiple Portfolios
Create different branches or repos for different people/profiles:
```bash
# Branch for different person
git checkout -b person-name-portfolio
# They edit their config and deploy from their branch
```

---

## 📞 Questions?

See `README.md` for quick start and `static_private_info.example.json` for all config options.

---

**Ready to deploy your elite portfolio? Edit your config and share with the world!** 🚀

*Elite Portfolio - Configurable | Professional | Ready-to-Deploy*

