# Robin Mahanta - Professional Portfolio

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-blue)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive, and production-ready personal portfolio website built with React, showcasing professional experience, skills, projects, and expertise in full-stack development and automation engineering.

## 🚀 Features

### Core Features
- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- ⚡ **High Performance** - Built with Vite for instant HMR and optimized bundle sizes
- 🎨 **Smooth Animations** - Framer Motion animations for enhanced user experience
- 🔍 **SEO Optimized** - Comprehensive meta tags for search engine optimization

### Portfolio Sections
1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Professional summary and key statistics
3. **Skills** - Categorized technical skills (Frontend, Backend, Automation, Tools)
4. **Experience** - Professional work history with detailed descriptions
5. **Projects** - Featured portfolio projects with filtering by category
6. **Contact** - Contact form and direct contact information
7. **Footer** - Social links and quick navigation

### User Experience
- 🎯 Smooth scroll navigation with fixed navbar
- 💬 Contact form with email integration
- 🔗 Direct links to GitHub, LinkedIn, and other social profiles
- 📊 Project filtering by category
- 🎭 Project showcase with technology badges and links

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite 4.4** - Build tool and development server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10.16** - Animation library
- **React Icons 4.11** - Icon library

### Build & Deployment
- **Node.js** - JavaScript runtime
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixes

### Deployment Targets (Free)
- ✅ **GitHub Pages** - Recommended for GitHub users
- ✅ **Vercel** - Optimal for Next.js and React projects
- ✅ **Netlify** - Easy drag-and-drop deployment

## 📋 Prerequisites

- Node.js 14.0 or higher
- npm 6.0+ or yarn
- Git for version control

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/JohnnyDa0220/robin-mahanta-portfolio.git
cd robin-mahanta-portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Update Portfolio Data
Edit `src/data/portfolio.js` to customize:
- Personal information (name, email, social links)
- Professional summary
- Work experience
- Skills
- Projects
- Certifications
- Achievements
- Contact information

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:3000` with Hot Module Replacement (HMR) enabled.

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

The optimized build will be created in the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Folder Structure

```
robin-mahanta-portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Contact.jsx      # Contact form and info
│   │   └── Footer.jsx       # Footer with links
│   ├── data/
│   │   └── portfolio.js     # Centralized portfolio data (EDIT THIS FILE)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
│   ├── favicon.png          # Website icon
│   └── og-image.png         # Open Graph image
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## 📝 How to Update Portfolio Content

All portfolio content is centralized in **`src/data/portfolio.js`**. No need to modify component code - just update the data object:

### Update Personal Information
```javascript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    email: 'your@email.com',
    title: 'Your Title',
    social: {
      github: 'https://github.com/yourprofile',
      linkedin: 'https://linkedin.com/in/yourprofile'
    }
    // ... more fields
  }
}
```

### Add a New Project
```javascript
projects: [
  {
    id: 1,
    title: 'Project Name',
    category: 'Web Development',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    image: 'image-url',
    github: 'https://github.com/...',
    liveDemo: 'https://...'
  }
  // ... add more
]
```

### Add Skills
```javascript
skills: {
  frontend: {
    title: 'Frontend Development',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3']
  }
  // ... more categories
}
```

### Add Experience
```javascript
experience: [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Position',
    duration: 'Jan 2022 - Present',
    description: '...',
    responsibilities: ['...']
  }
]
```

## 🚀 Deployment Guide

### Option 1: Deploy to GitHub Pages

1. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // if deploying to subdirectory
     // ... rest of config
   })
   ```

2. **Deploy**:
   ```bash
   npm run build
   # Push the dist/ folder to gh-pages branch
   ```

3. **Enable GitHub Pages** in repository settings

### Option 2: Deploy to Vercel

1. **Connect GitHub Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure**:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**: Vercel will auto-deploy on git push

### Option 3: Deploy to Netlify

1. **Connect GitHub Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

2. **Configure**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**: Auto-deployed on git push

## 🎨 Customization

### Change Color Scheme
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#Your-Color',
      secondary: '#Your-Color',
      accent: '#Your-Color',
    }
  }
}
```

### Update Typography
Customize fonts in `tailwind.config.js` and `index.html`

### Add New Sections
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add data to `src/data/portfolio.js`

## 🔍 SEO Best Practices

The portfolio includes:
- ✅ Semantic HTML structure
- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Mobile-responsive design
- ✅ Fast load times (Vite optimization)
- ✅ Accessible component structure

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

**Robin Mahanta**
- Email: robin2001pvt@gmail.com
- GitHub: [JohnnyDa0220](https://github.com/JohnnyDa0220)
- LinkedIn: [robin-mahanta](https://linkedin.com/in/robin-mahanta)

## 📄 License

This project is open source and available under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- **Author**: Robin Mahanta
- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 🚀 Future Enhancements

Planned features:
- [ ] Blog section with MDX support
- [ ] Project case studies
- [ ] Interactive skills visualization
- [ ] Testimonials section
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Multi-language support

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Made with ❤️ by Robin Mahanta**
