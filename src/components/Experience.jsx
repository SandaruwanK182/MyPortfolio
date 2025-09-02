import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Award } from 'lucide-react';

const Experience = () => {
  const timelineItems = [
    {
      year: '2022 - Present',
      title: 'Bachelor of Software Engineering (Honours)',
      organization: 'Open University of Sri Lanka',
      type: 'education',
      description: 'Currently pursuing an Honours degree in Software Engineering with focus on backend development, algorithms, and software architecture.',
      highlights: [
        'Data Structures & Algorithms',
        'Software Testing & Quality Assurance',
        'Backend Development with Java',
        'Database Systems & Design',
        'Software Architecture & Design Patterns'
      ],
      icon: GraduationCap
    },
    {
      year: '2023',
      title: 'Backend Development Specialization',
      organization: 'Self-Directed Learning',
      type: 'certification',
      description: 'Intensive self-study program focusing on modern backend technologies and best practices.',
      highlights: [
        'Spring Boot Framework Mastery',
        'RESTful API Development',
        'Microservices Architecture',
        'Database Optimization',
        'Security Implementation'
      ],
      icon: Code
    },
    {
      year: '2024',
      title: 'Open Source Contributions',
      organization: 'GitHub Community',
      type: 'experience',
      description: 'Active contributor to open source projects and maintainer of personal repositories.',
      highlights: [
        'Java Library Development',
        'Documentation Writing',
        'Code Review & Collaboration',
        'Community Engagement',
        'Technical Mentoring'
      ],
      icon: Award
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-cyan-500';
      case 'certification':
        return 'from-green-500 to-emerald-500';
      case 'experience':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'certification':
        return '📜';
      case 'experience':
        return '💼';
      default:
        return '📚';
    }
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and professional development in software engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 h-full hidden md:block"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glassmorphism p-8 glow-card">
                  {/* Type Badge */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>

                  {/* Year */}
                  <p className="text-cyan-400 font-bold text-lg mb-2">{item.year}</p>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-medium mb-4">{item.organization}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center my-4 md:my-0 relative z-10">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Empty Space for Alternating Layout */}
              <div className="w-full md:w-5/12 hidden md:block"></div>
            </motion.div>
          ))}
        </div>

        {/* Current Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Current Goals</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm actively seeking opportunities to apply my backend development skills in a 
              professional environment. My goal is to join a dynamic team where I can contribute 
              to building scalable systems while continuing to learn and grow as a software engineer.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Senior Backend Engineer',
                'System Architecture',
                'Open Source Contributions',
                'Technical Leadership',
                'Mentoring'
              ].map((goal, index) => (
                <span
                  key={goal}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
