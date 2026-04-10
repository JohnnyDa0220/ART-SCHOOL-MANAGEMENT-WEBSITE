/**
 * Hero Section Component
 * Landing section with name, title, and call-to-action buttons
 */
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { portfolioData } from '../data/portfolio'

const Hero = ({ isDark }) => {
  const { personal, summary } = portfolioData

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={`text-lg font-semibold mb-4 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Welcome to my portfolio
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {personal.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          className={`text-2xl md:text-4xl font-semibold mb-6 ${
            isDark ? 'text-blue-300' : 'text-blue-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personal.title}
        </motion.h2>

        {/* Bio */}
        <motion.p
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {summary}
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-transform hover:scale-110 ${
              isDark
                ? 'bg-gray-800 text-white hover:bg-blue-600'
                : 'bg-white text-gray-900 hover:bg-blue-600 hover:text-white'
            }`}
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-transform hover:scale-110 ${
              isDark
                ? 'bg-gray-800 text-white hover:bg-blue-600'
                : 'bg-white text-gray-900 hover:bg-blue-600 hover:text-white'
            }`}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#projects"
            className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
              isDark
                ? 'border-2 border-blue-400 text-blue-400 hover:bg-blue-600 hover:border-blue-600'
                : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className={`${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`} size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

