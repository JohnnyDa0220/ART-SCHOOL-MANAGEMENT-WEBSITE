/**
 * Experience Section Component
 * Displays work experience and professional history
 */
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Experience = ({ isDark }) => {
  const { experience } = portfolioData

  return (
    <section id="experience" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Professional Experience
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg relative`}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full ${
                isDark ? 'bg-blue-600 border-4 border-gray-900' : 'bg-blue-600 border-4 border-gray-50'
              }`}></div>

              {/* Company & Position */}
              <h3 className={`text-2xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {job.position}
              </h3>
              <p className={`text-lg mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {job.company}
              </p>
              <p className={`text-sm mb-4 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {job.duration}
              </p>

              {/* Description */}
              <p className={`mb-4 ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {job.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-2 ml-4">
                {job.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className={`text-sm flex items-start gap-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-700'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

