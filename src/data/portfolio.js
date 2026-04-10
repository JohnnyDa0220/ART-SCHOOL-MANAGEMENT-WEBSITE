/**
 * Portfolio Data Configuration
 * Central data source for all portfolio content
 * Edit this file to update portfolio information without touching component code
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Robin Mahanta',
    title: 'Full Stack Developer | Automation Engineer',
    email: 'robin2001pvt@gmail.com',
    phone: '+91 (Your Phone)',
    location: 'India',
    bio: 'Passionate full-stack developer with expertise in web development, automation, and AI solutions. Experienced in building scalable applications and leading technical initiatives.',
    social: {
      github: 'https://github.com/JohnnyDa0220',
      linkedin: 'https://linkedin.com/in/robin-mahanta',
      twitter: 'https://twitter.com',
    }
  },

  // Professional Summary
  summary: 'Full Stack Engineer with 2+ years of experience at LTIMindtree, specializing in automation, web development, and AI solutions. Proven track record of designing and implementing scalable applications, leading cross-functional teams, and delivering high-impact projects.',

  // Professional Experience
  experience: [
    {
      id: 1,
      company: 'LTIMindtree',
      position: 'Senior Software Engineer',
      duration: 'Jan 2022 - Present',
      description: 'Led development of automation and web solutions, mentored junior developers, and drove technical innovations.',
      responsibilities: [
        'Designed and developed full-stack web applications using React and Node.js',
        'Implemented automation solutions reducing manual effort by 40%',
        'Led a team of 3-5 developers on critical projects',
        'Mentored junior developers and conducted code reviews',
      ]
    },
    {
      id: 2,
      company: 'LTIMindtree',
      position: 'Software Engineer',
      duration: 'Jul 2021 - Dec 2021',
      description: 'Developed and maintained web applications and automation scripts.',
      responsibilities: [
        'Built responsive web applications using React.js',
        'Created automation scripts using Python and Selenium',
        'Collaborated with cross-functional teams',
      ]
    }
  ],

  // Skills - Organized by Category
  skills: {
    frontend: {
      title: 'Frontend Development',
      items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Next.js']
    },
    backend: {
      title: 'Backend Development',
      items: ['Node.js', 'Express.js', 'Python', 'PHP', 'MySQL', 'MongoDB', 'RESTful APIs', 'GraphQL']
    },
    automation: {
      title: 'Automation & Testing',
      items: ['Selenium', 'Python Automation', 'Test Automation', 'Cypress', 'Jest', 'Postman']
    },
    tools: {
      title: 'Tools & Technologies',
      items: ['Git', 'Docker', 'Vite', 'Webpack', 'GitHub Actions', 'VS Code', 'Linux', 'AWS Basics']
    },
    soft: {
      title: 'Soft Skills',
      items: ['Team Leadership', 'Problem Solving', 'Communication', 'Time Management', 'Mentoring', 'Project Management']
    }
  },

  // Projects Portfolio
  projects: [
    {
      id: 1,
      title: 'Art School Management Website',
      category: 'Web Development',
      description: 'Modern responsive website for art school with student registration, gallery showcase, and admin features.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Vite'],
      image: 'https://via.placeholder.com/300x200?text=Art+School+Website',
      github: 'https://github.com/JohnnyDa0220/ART-SCHOOL-MANAGEMENT-WEBSITE',
      liveDemo: 'https://art-school-demo.netlify.app',
      highlights: [
        'Built responsive UI with React and Tailwind CSS',
        'Implemented student registration system',
        'Gallery management with image upload',
        'Mobile-first design approach'
      ]
    },
    {
      id: 2,
      title: 'E-Commerce Platform Automation',
      category: 'Automation',
      description: 'Automated testing suite for e-commerce platform covering user workflows and critical paths.',
      technologies: ['Selenium', 'Python', 'Pytest', 'Docker'],
      image: 'https://via.placeholder.com/300x200?text=E-Commerce+Automation',
      github: 'https://github.com/JohnnyDa0220/ecommerce-automation',
      highlights: [
        'Created 150+ automated test cases',
        'Reduced manual testing effort by 60%',
        'Implemented CI/CD pipeline with GitHub Actions',
        'Achieved 85% test coverage'
      ]
    },
    {
      id: 3,
      title: 'AI-Powered Content Generator',
      category: 'AI/ML',
      description: 'Web application that generates optimized content using AI, integrated with multiple LLM APIs.',
      technologies: ['React', 'Python', 'OpenAI API', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200?text=AI+Content+Generator',
      github: 'https://github.com/JohnnyDa0220/ai-content-generator',
      liveDemo: 'https://ai-content-generator.vercel.app',
      highlights: [
        'Integrated OpenAI and Hugging Face APIs',
        'Built user-friendly dashboard',
        'Implemented content history and export features',
        'Deployed on Vercel with serverless functions'
      ]
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      category: 'Web Development',
      description: 'Full-stack task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/300x200?text=Task+Dashboard',
      github: 'https://github.com/JohnnyDa0220/task-dashboard',
      highlights: [
        'Real-time collaboration with WebSockets',
        'Drag-and-drop task management',
        'Team permissions and role-based access',
        'Performance optimized with React Query'
      ]
    },
    {
      id: 5,
      title: 'Web Scraping Toolkit',
      category: 'Automation',
      description: 'Automated web scraping solution for data extraction and analysis.',
      technologies: ['Python', 'BeautifulSoup', 'Scrapy', 'Pandas', 'Selenium'],
      image: 'https://via.placeholder.com/300x200?text=Web+Scraping',
      github: 'https://github.com/JohnnyDa0220/web-scraper',
      highlights: [
        'Built modular scraping framework',
        'Handled complex dynamic websites',
        'Data export to multiple formats',
        'Error handling and retry logic'
      ]
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      category: 'Web Development',
      description: 'Modern, responsive portfolio website showcasing projects and skills with dark mode support.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/300x200?text=Portfolio',
      github: 'https://github.com/JohnnyDa0220/portfolio',
      liveDemo: 'https://robin-mahanta.vercel.app',
      highlights: [
        'SEO optimized with meta tags',
        'Dark/Light mode toggle',
        'Smooth animations with Framer Motion',
        'Mobile-responsive design'
      ]
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      url: 'https://aws.amazon.com/certification/'
    },
    {
      id: 2,
      title: 'React Advanced Patterns',
      issuer: 'Udemy',
      date: 'Aug 2023',
      url: 'https://udemy.com'
    },
    {
      id: 3,
      title: 'JavaScript Mastery',
      issuer: 'Codecademy',
      date: 'Jun 2023',
      url: 'https://codecademy.com'
    }
  ],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: 'Employee of the Quarter',
      organization: 'LTIMindtree',
      date: 'Q4 2023',
      description: 'Recognized for exceptional performance and contributions to critical projects.'
    },
    {
      id: 2,
      title: 'Innovation Award',
      organization: 'LTIMindtree',
      date: 'Q2 2023',
      description: 'Led innovation initiative that reduced testing time by 40%.'
    },
    {
      id: 3,
      title: 'Mentor of the Year',
      organization: 'LTIMindtree',
      date: 'Q1 2023',
      description: 'Mentored 5 junior developers with 100% promotion rate.'
    }
  ],

  // Contact Information
  contact: {
    email: 'robin2001pvt@gmail.com',
    phone: '+91 (Your Phone)',
    location: 'India',
    availability: 'Open to opportunities',
    message: 'Feel free to reach out! I\'m always interested in discussing new projects and opportunities.'
  }
}

export default portfolioData

