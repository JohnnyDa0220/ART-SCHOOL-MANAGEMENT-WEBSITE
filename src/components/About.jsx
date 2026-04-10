/**
 * About Section Component
 * Displays professional summary and key highlights
 */
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const About = ({ isDark }) => {
  const { personal, summary } = portfolioData

  return (
    <section id="about" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={`text-lg mb-6 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {summary}
            </p>

            <p className={`text-lg mb-6 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I specialize in building scalable web applications and automation solutions. With a strong foundation in full-stack development, I'm passionate about clean code, best practices, and delivering exceptional user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                }`}></div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  <strong>2+ years</strong> of professional development experience
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                }`}></div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  Expertise in <strong>React, Node.js, Python</strong>, and modern web technologies
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                }`}></div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  Passionate about <strong>automation, AI</strong>, and solving complex problems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className={`p-6 rounded-lg text-center ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                10+
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                Projects Completed
              </p>
            </div>
            <div className={`p-6 rounded-lg text-center ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                2+
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                Years Experience
              </p>
            </div>
            <div className={`p-6 rounded-lg text-center ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                5+
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                Developers Mentored
              </p>
            </div>
            <div className={`p-6 rounded-lg text-center ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                100%
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

