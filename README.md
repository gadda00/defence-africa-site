# Defence Africa - Strategic Intelligence Website

A premium, professionally designed website for Defence Africa, a strategic intelligence consultancy specializing in China-Africa security dynamics.

## 🌐 Live Website

**Visit:** https://gadda00.github.io/defence-africa-site/

## 📋 Overview

Defence Africa provides strategic intelligence and geopolitical analysis on China-Africa security dynamics to investment managers, corporate security directors, and policy makers. This website serves as the digital presence and lead generation platform for the organization.

## ✨ Key Features

- **Premium Design:** Modern geopolitical authority aesthetic with dark navy and gold accents
- **Responsive Layout:** Fully mobile-responsive design
- **Interactive Elements:** Smooth animations and hover effects
- **Service Showcase:** Clear presentation of core service offerings
- **Analysis Hub:** Briefing Room section for featured articles and insights
- **Contact Integration:** Multiple contact methods and inquiry form
- **Performance Optimized:** Fast loading and efficient asset delivery

## 🎨 Design Highlights

### Visual Identity
- **Color Scheme:** Deep Navy Blue (#0F1F3C), Warm Gold (#D4A574), Soft Cyan (#4A9FBF)
- **Typography:** Playfair Display (headlines) + Inter (body text)
- **Layout:** Asymmetric design with strategic breathing room
- **Animations:** Subtle, purposeful transitions and hover effects

### Sections
1. **Navigation Bar** - Sticky header with smooth scroll navigation
2. **Hero Section** - Full-height hero with value proposition
3. **Services** - Three core service offerings with interactive cards
4. **Briefing Room** - Featured analysis and article grid
5. **About** - Company story and capabilities
6. **Contact** - Multiple contact methods and inquiry form
7. **Footer** - Navigation, contact info, and social links

## 🛠️ Technology Stack

- **React 19** - UI framework
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Component library
- **Vite** - Build tool
- **Wouter** - Client-side routing
- **GitHub Pages** - Hosting & deployment

## 📦 Project Structure

```
defence-africa-site/
├── client/                    # React frontend
│   ├── public/
│   │   └── images/           # Visual assets
│   └── src/
│       ├── pages/            # Page components
│       ├── components/       # Reusable components
│       ├── App.tsx           # Main app
│       └── index.css         # Global styles
├── docs/                      # GitHub Pages deployment
├── dist/                      # Build output
├── package.json              # Dependencies
├── ideas.md                  # Design philosophy
└── DEPLOYMENT_GUIDE.md       # Deployment instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/gadda00/defence-africa-site.git
cd defence-africa-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the website locally.

## 🏗️ Building & Deployment

### Build for Production

```bash
pnpm build
```

This creates optimized files in the `dist/` folder.

### Deploy to GitHub Pages

```bash
# Copy build output to docs folder
rm -rf docs && cp -r dist/public docs

# Commit and push
git add -A
git commit -m "Deploy website updates"
git push origin main
```

The website will be live at https://gadda00.github.io/defence-africa-site/ within 1-2 minutes.

## 📝 Customization

### Update Content
Edit `/client/src/pages/Home.tsx` to modify:
- Service descriptions
- Article titles and dates
- Contact information
- Statistics and metrics

### Update Images
Replace images in `/client/public/images/`:
- `hero-map-background.png` - Hero section
- `briefing-room-hero.png` - Featured article
- `services-accent.png` - Services section

### Update Theme
Edit `/client/src/index.css` to modify:
- Color palette (OKLCH values)
- Typography settings
- Spacing and sizing

## 📊 Performance

- **HTML:** ~368 KB (gzipped: ~106 KB)
- **CSS:** ~126 KB (gzipped: ~19 KB)
- **JavaScript:** ~584 KB (gzipped: ~166 KB)
- **Load Time:** < 2 seconds on 4G

## 🔍 SEO Optimization

Current implementation includes:
- Semantic HTML structure
- Mobile-responsive design
- Fast loading performance
- Clear navigation hierarchy

Recommended additions:
- Meta descriptions
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt
- Open Graph tags

## 🐛 Troubleshooting

### Website Not Updating
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check GitHub Pages build status in repository settings

### Build Errors
```bash
# Clear and reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

## 📚 Documentation

- **Design Philosophy:** See `ideas.md`
- **Deployment Guide:** See `DEPLOYMENT_GUIDE.md`
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **GitHub Pages:** https://docs.github.com/en/pages

## 🔗 Links

- **Repository:** https://github.com/gadda00/defence-africa-site
- **Website:** https://gadda00.github.io/defence-africa-site/
- **Contact:** briefings@defence.africa

## 📄 License

All rights reserved. This website is proprietary to Defence Africa.

## 🤝 Contributing

For updates or modifications, follow the development workflow:

1. Make changes locally
2. Test thoroughly
3. Build for production
4. Deploy to GitHub Pages

## 📞 Support

For questions or issues, please contact Defence Africa at briefings@defence.africa

---

**Status:** ✅ Live and Production Ready

Last Updated: December 29, 2024
