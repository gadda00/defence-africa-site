# Defence Africa Website - Deployment Guide

## Overview

The Defence Africa website has been successfully created and deployed to GitHub Pages. This document provides comprehensive information about the website, its deployment, and how to manage it.

---

## Live Website

**Website URL:** https://gadda00.github.io/defence-africa-site/

The website is now live and accessible to the public. GitHub Pages automatically deploys the website from the `/docs` folder in the main branch.

---

## Repository Information

**Repository:** https://github.com/gadda00/defence-africa-site

**Repository Owner:** gadda00

**Visibility:** Public

**Default Branch:** main

---

## Project Structure

```
defence-africa-site/
├── client/                          # Frontend React application
│   ├── public/
│   │   └── images/                 # Visual assets
│   │       ├── hero-map-background.png
│   │       ├── briefing-room-hero.png
│   │       └── services-accent.png
│   └── src/
│       ├── pages/
│       │   └── Home.tsx            # Main homepage
│       ├── components/             # Reusable UI components
│       ├── App.tsx                 # Main app component
│       └── index.css               # Global styles & theme
├── docs/                            # GitHub Pages deployment folder
├── dist/                            # Build output
├── package.json                     # Dependencies
└── ideas.md                         # Design philosophy documentation
```

---

## Design Philosophy

The website implements a **Modern Geopolitical Authority** design approach featuring:

### Visual Identity
- **Primary Color:** Deep Navy Blue (`#0F1F3C`) - Conveys authority and trust
- **Accent Color:** Warm Gold (`#D4A574`) - Premium positioning and strategic highlights
- **Secondary Color:** Soft Cyan (`#4A9FBF`) - Data visualization and interactive elements
- **Background:** Near-Black (`#0A0E1A`) - Sophisticated, reduces eye strain

### Typography
- **Headlines:** Playfair Display (serif, bold) - Elegant and authoritative
- **Body Text:** Inter (sans-serif) - Clean and professional
- **Accent Font:** IBM Plex Mono (monospace) - Technical details and data labels

### Key Features
- Asymmetric layout with strategic breathing room
- Diagonal accent stripes and geometric elements
- Premium animations and hover interactions
- Data visualization motifs reflecting intelligence work
- Mobile-responsive design

---

## Website Sections

### 1. Navigation Bar
- Sticky header with Defence Africa branding
- Desktop and mobile-responsive navigation
- Smooth scroll navigation to sections

### 2. Hero Section
- Full-height hero with animated background
- Value proposition: "Deciphering the China-Africa Security Landscape"
- Call-to-action buttons for briefings and analysis
- Trust indicators (Founded in Kenya, AI-Powered)

### 3. Services Section
- Three core service offerings:
  - Geopolitical Risk Analysis
  - Corporate Due Diligence
  - Strategic Advisory
- Interactive hover effects and gradient backgrounds
- Icons and detailed descriptions

### 4. Briefing Room (Analysis Section)
- Featured article showcase
- Quick statistics cards
- Article grid with categories and dates
- Call-to-action for viewing all articles

### 5. About Section (Mission)
- Company story and expertise
- Key capabilities and differentiators
- Visual accent element
- Trust-building content

### 6. Contact Section
- Email contact information
- Social media links (LinkedIn, Twitter)
- Contact form for inquiries
- Multiple contact methods

### 7. Footer
- Navigation links
- Contact information
- Social media presence
- Copyright information

---

## Technology Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS 4 with custom theme
- **UI Components:** shadcn/ui
- **Routing:** Wouter (client-side)
- **Build Tool:** Vite
- **Deployment:** GitHub Pages
- **Hosting:** GitHub (free tier)

---

## Development & Deployment Workflow

### Local Development

1. **Install Dependencies:**
   ```bash
   cd /home/ubuntu/defence-africa-site
   pnpm install
   ```

2. **Start Development Server:**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for Production:**
   ```bash
   pnpm build
   ```
   This creates optimized files in the `dist/` folder.

### Deployment to GitHub Pages

1. **Build the Project:**
   ```bash
   pnpm build
   ```

2. **Copy Build Output to Docs Folder:**
   ```bash
   rm -rf docs && cp -r dist/public docs
   ```

3. **Commit and Push Changes:**
   ```bash
   git add -A
   git commit -m "Update website with new changes"
   git push origin main
   ```

4. **GitHub Pages Deployment:**
   - GitHub automatically deploys from the `/docs` folder
   - Changes are typically live within 1-2 minutes
   - Visit https://gadda00.github.io/defence-africa-site/ to verify

---

## Customization Guide

### Updating Content

**Homepage Content:** Edit `/client/src/pages/Home.tsx`
- Update service descriptions
- Modify article titles and dates
- Change contact information
- Update statistics and metrics

**Images:** Replace images in `/client/public/images/`
- `hero-map-background.png` - Hero section background
- `briefing-room-hero.png` - Featured article image
- `services-accent.png` - Services section accent

**Colors & Theme:** Edit `/client/src/index.css`
- Modify OKLCH color values in `:root` and `.dark` sections
- Update Tailwind theme variables
- Adjust spacing and typography

### Adding New Pages

1. Create a new file in `/client/src/pages/`
2. Import the component in `/client/src/App.tsx`
3. Add a route using Wouter
4. Update navigation links

### Updating Contact Information

Edit the contact section in `/client/src/pages/Home.tsx`:
- Email: `briefings@defence.africa`
- Social media links (LinkedIn, Twitter)
- Contact form endpoint (currently placeholder)

---

## Performance Optimization

The website includes several optimizations:

- **Image Optimization:** Generated images are optimized for web
- **Code Splitting:** Tailwind CSS purges unused styles
- **Lazy Loading:** Images load efficiently
- **Responsive Design:** Mobile-first approach
- **Caching:** GitHub Pages provides aggressive caching

### Build Size
- HTML: ~368 KB (gzipped: ~106 KB)
- CSS: ~126 KB (gzipped: ~19 KB)
- JavaScript: ~584 KB (gzipped: ~166 KB)

---

## SEO & Meta Information

**Current Meta Tags:**
- Title: "Defence Africa - Strategic Intelligence on China-Africa Security"
- Description: (Can be added in index.html)
- Viewport: Mobile-responsive

**To Improve SEO:**
1. Add meta descriptions in `client/index.html`
2. Add structured data (JSON-LD)
3. Create sitemap.xml
4. Add robots.txt
5. Implement Open Graph tags for social sharing

---

## Maintenance & Updates

### Regular Maintenance Tasks

1. **Update Content:** Keep analysis and articles current
2. **Monitor Performance:** Check GitHub Pages build status
3. **Update Dependencies:** Run `pnpm update` periodically
4. **Test Responsiveness:** Test on various devices and browsers
5. **Check Links:** Verify all internal and external links work

### Backup & Version Control

- All changes are tracked in Git
- Repository is backed up on GitHub
- Use meaningful commit messages for tracking changes
- Create tags for major releases

---

## Troubleshooting

### Website Not Updating After Push

1. **Clear Browser Cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or clear browser cache manually

2. **Check GitHub Pages Build:**
   - Go to repository Settings → Pages
   - Check the build status and logs

3. **Verify Docs Folder:**
   - Ensure `/docs` folder contains the latest build
   - Check that `index.html` is present

### Build Errors

1. **Clear Dependencies:**
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

2. **Check Node Version:**
   - Ensure Node.js 18+ is installed
   - Check: `node --version`

3. **Review Error Messages:**
   - Check console output for specific errors
   - Look for TypeScript or CSS compilation issues

---

## Future Enhancements

### Recommended Improvements

1. **Blog System:** Create a dynamic blog for the Briefing Room
2. **Newsletter Signup:** Implement email capture
3. **Search Functionality:** Add search for articles and content
4. **Analytics:** Integrate Google Analytics for tracking
5. **Contact Form Backend:** Connect form to email service
6. **Dark/Light Theme Toggle:** Add theme switcher
7. **Multi-language Support:** Add language options
8. **Video Integration:** Embed YouTube analysis videos

### Social Media Integration

- Twitter/X feed integration
- LinkedIn article sharing
- Social sharing buttons
- YouTube channel integration

---

## Support & Resources

### Documentation
- **Design Philosophy:** See `ideas.md`
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com

### GitHub Pages Documentation
- https://docs.github.com/en/pages

### Contact
- **Email:** briefings@defence.africa
- **Repository Issues:** Report bugs on GitHub

---

## License

This website is proprietary to Defence Africa. All rights reserved.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 29, 2024 | Initial launch with premium design |

---

## Next Steps

1. **Verify Website:** Visit https://gadda00.github.io/defence-africa-site/
2. **Test Functionality:** Check all links and navigation
3. **Customize Content:** Update with your specific information
4. **Add Social Media:** Link to your social profiles
5. **Monitor Analytics:** Set up tracking (optional)
6. **Plan Content:** Prepare articles for the Briefing Room

---

**Website Status:** ✅ Live and Ready

For questions or updates, refer to the GitHub repository or contact Defence Africa directly.
