import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  GitBranch, 
  Shield, 
  Cloud,
  Terminal,
  Braces,
  Layers,
  Zap,
  Sparkles,
  Star,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code2,
      gradient: 'from-violet-500 via-purple-500 to-blue-500',
      skills: [
        { name: 'Java', icon: '☕', level: 90, color: 'from-orange-400 to-red-500' },
        { name: 'Spring Boot', icon: '🍃', level: 85, color: 'from-green-400 to-emerald-500' },
        { name: 'Spring Security', icon: '🔒', level: 80, color: 'from-yellow-400 to-orange-500' },
        { name: 'REST APIs', icon: '🌐', level: 88, color: 'from-blue-400 to-cyan-500' },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      gradient: 'from-cyan-500 via-teal-500 to-green-500',
      skills: [
        { name: 'MySQL', icon: '🐬', level: 85, color: 'from-blue-400 to-indigo-500' },
        { name: 'MongoDB', icon: '🍃', level: 75, color: 'from-green-400 to-emerald-500' },
        { name: 'PostgreSQL', icon: '🐘', level: 80, color: 'from-blue-500 to-purple-500' },
        { name: 'Redis', icon: '📱', level: 70, color: 'from-red-400 to-pink-500' },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Server,
      gradient: 'from-pink-500 via-red-500 to-orange-500',
      skills: [
        { name: 'Git', icon: '📚', level: 85, color: 'from-orange-400 to-red-500' },
        { name: 'Docker', icon: '🐳', level: 75, color: 'from-blue-400 to-cyan-500' },
        { name: 'GitHub Actions', icon: '⚡', level: 70, color: 'from-yellow-400 to-orange-500' },
        { name: 'AWS/Azure', icon: '☁️', level: 65, color: 'from-blue-500 to-purple-500' },
      ]
    },
    {
      title: 'Computer Science',
      icon: Braces,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      skills: [
        { name: 'Data Structures', icon: '🏗️', level: 88, color: 'from-purple-400 to-pink-500' },
        { name: 'Algorithms', icon: '🧮', level: 85, color: 'from-indigo-400 to-purple-500' },
        { name: 'Problem Solving', icon: '🧩', level: 90, color: 'from-green-400 to-teal-500' },
        { name: 'System Design', icon: '🏛️', level: 75, color: 'from-cyan-400 to-blue-500' },
      ]
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      id="skills" 
      className="py-32 relative overflow-hidden min-h-screen"
      style={{ opacity }}
    >
      {/* Ultra Modern Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 220, 255, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)
            `,
            transform: `translateY(${backgroundY})`
          }}
        />

        {/* Advanced Floating Particles with Physics */}
        <AnimatePresence>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full opacity-40"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                background: `linear-gradient(45deg, 
                  ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#10b981'}, 
                  ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#ec4899' : '#06d6a0'})`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)'
              }}
              animate={{
                y: [1000, -100],
                x: [0, Math.random() * 200 - 100],
                opacity: [0, 0.6, 0.8, 0.6, 0],
                scale: [0, 1, 1.2, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut"
              }}
            />
          ))}
        </AnimatePresence>

        {/* Interactive Mouse Trail Effect */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Modern Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Stars - Reduced for performance */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`star-large-${i}`}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}

        {/* Medium Stars - Reduced for performance */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-medium-${i}`}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute bg-blue-100 rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(191, 219, 254, 0.6)`
            }}
          />
        ))}

        {/* Small Stars - Reduced for performance */}
        {[...Array(75)].map((_, i) => (
          <motion.div
            key={`star-small-${i}`}
            animate={{
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            className="absolute bg-gray-300 rounded-full"
            style={{
              width: '1px',
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Shooting Stars - Fixed window reference */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`shooting-star-${i}`}
            animate={{
              x: [-100, 1200],
              y: [Math.random() * 200, Math.random() * 200 + 200],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 10 + Math.random() * 15,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8), -20px 0 20px rgba(255, 255, 255, 0.4)',
              filter: 'blur(0.5px)'
            }}
          />
        ))}

        {/* Nebula Clouds */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [1.2, 1, 1.2],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            opacity: [0.08, 0.25, 0.08],
            scale: [1, 1.3, 1],
            rotate: [0, 20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
        />

        {/* Constellation Lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <line x1="20%" y1="30%" x2="35%" y2="45%" stroke="url(#starGradient)" strokeWidth="1" />
          <line x1="65%" y1="20%" x2="80%" y2="35%" stroke="url(#starGradient)" strokeWidth="1" />
          <line x1="15%" y1="70%" x2="40%" y2="80%" stroke="url(#starGradient)" strokeWidth="1" />
          <line x1="70%" y1="60%" x2="85%" y2="75%" stroke="url(#starGradient)" strokeWidth="1" />
        </motion.svg>

        {/* Floating Space Dust - Reduced for performance */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            className="absolute bg-gray-400 rounded-full blur-sm"
            style={{
              width: `${0.5 + Math.random() * 1}px`,
              height: `${0.5 + Math.random() * 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Backend-focused tech stack and expertise in building robust systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)"
              }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 glow-card relative overflow-hidden"
            >
              {/* Card background animation */}
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 opacity-50"
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </motion.div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.02,
                      backgroundColor: "rgba(6, 182, 212, 0.1)"
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2 p-3 rounded-lg transition-all duration-300"
                  >
                    <motion.div 
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <motion.span 
                        className="text-cyan-400 font-semibold"
                        animate={{ 
                          textShadow: [
                            "0 0 0px rgba(6, 182, 212, 0.5)",
                            "0 0 20px rgba(6, 182, 212, 0.8)",
                            "0 0 0px rgba(6, 182, 212, 0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {skill.level}%
                      </motion.span>
                    </motion.div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0, x: '-100%' }}
                        whileInView={{ width: `${skill.level}%`, x: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full overflow-hidden"
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Microservices', 'JUnit Testing', 'Maven', 'Gradle', 'IntelliJ IDEA',
              'Postman', 'Swagger', 'Jenkins', 'Linux', 'JSON', 'XML', 'YAML'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-300 hover:text-white transition-all duration-300 cursor-pointer border border-gray-700/50 text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
