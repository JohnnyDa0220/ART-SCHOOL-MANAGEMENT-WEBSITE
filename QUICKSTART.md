# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:3000`
   - Hot reload enabled

3. **Customize Your Portfolio**
   - Edit `src/data/portfolio.js`
   - Update personal info, projects, skills, etc.

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Content Updates

All portfolio content is in `src/data/portfolio.js`:

### Add a Project
```javascript
{
  id: 7,
  title: 'Your Project',
  category: 'Web Development',
  description: 'Project description...',
  technologies: ['React', 'Node.js'],
  image: 'https://via.placeholder.com/300x200',
  github: 'https://github.com/...',
  liveDemo: 'https://...'
}
```

### Add Skills
```javascript
skills: {
  yourCategory: {
    title: 'Your Category',
    items: ['Skill 1', 'Skill 2']
  }
}
```

## 🚀 Deployment

### GitHub Pages
1. Build: `npm run build`
2. Push `dist/` to `gh-pages` branch
3. Enable Pages in repo settings

### Vercel/Netlify
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 🎨 Customization

- Colors: Edit `tailwind.config.js`
- Fonts: Update `index.html` and `tailwind.config.js`
- Layout: Modify components in `src/components/`

## 📞 Support

- Email: robin2001pvt@gmail.com
- GitHub: https://github.com/JohnnyDa0220

---

**Happy coding! 🎉**
