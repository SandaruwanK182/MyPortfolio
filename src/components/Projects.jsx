import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Binary Options Trading Bot – Deriv',
      image: 'https://opensourcecollection.com/projects-storage/thumbnails/changeweb-unifiedtransform-6.png', // Place your image in public/images/
      description: 'Algorithmic trading bot built in XML format using technical indicators like MACD, RSI, Moving Average, and Awesome Oscillator. Automates rise/fall trades on 5-tick timeframe with sophisticated risk management.',
      techStack: ['XML', 'Algorithmic Trading', 'Technical Analysis', 'Deriv API'],
      github: '#',
      demo: '#',
      category: 'Automation',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'VidyaConnect – Online School Management System',
      image: 'https://opensourcecollection.com/projects-storage/thumbnails/changeweb-unifiedtransform-6.png',
      description: 'Comprehensive full-stack system for managing online education in rural Sri Lanka. Features include course management, student authentication, teacher dashboard, assignment tracking, and real-time communication.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'JWT'],
      github: '#',
      demo: '#',
      category: 'Web Application',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Solid Waste Management Research Website',
      image: 'https://opensourcecollection.com/projects-storage/thumbnails/changeweb-unifiedtransform-6.png',
      description: 'Informational system showcasing innovative waste management methods and research findings in Sri Lanka. Features interactive data visualization, research paper database, and educational resources.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      github: '#',
      demo: '#',
      category: 'Research Platform',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my backend development work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Modern Project Card with Image */}
              <div className="glassmorphism p-0 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 relative overflow-hidden rounded-2xl">
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                  {/* Category Badge */}
                  <div className="relative z-10 mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>
                  {/* Project Title */}
                  <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* Project Description */}
                  <p className="relative z-10 text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {/* Tech Stack */}
                  <div className="relative z-10 mb-6">
                    <p className="text-gray-400 text-xs mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="relative z-10 flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    
                  </div>
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Check out my GitHub profile for more projects and contributions to open source.
          </p>
          <a
            href="https://github.com/SandaruwanK182"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
