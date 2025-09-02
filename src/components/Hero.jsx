import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a link to download CV from public folder
    const link = document.createElement('a');
    link.href = '/My CV.pdf';
    link.download = 'My CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Modern Dark Background */}
      <div className="absolute inset-0">
        {/* Primary Background Image - Your Personal Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/IMG-20250212-WA0063.jpg')`
          }}
        />
        
        {/* Light Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/50 to-black/40" />
        
        {/* Additional Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-gray-950/35 to-slate-900/30" />
        
        {/* Subtle Animated Dark Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900/15 via-slate-800/10 to-gray-900/15"
          animate={{ 
            background: [
              'linear-gradient(45deg, rgba(15, 23, 42, 0.2), rgba(30, 41, 59, 0.15), rgba(51, 65, 85, 0.1))',
              'linear-gradient(135deg, rgba(51, 65, 85, 0.1), rgba(15, 23, 42, 0.2), rgba(30, 41, 59, 0.15))',
              'linear-gradient(225deg, rgba(30, 41, 59, 0.15), rgba(51, 65, 85, 0.1), rgba(15, 23, 42, 0.2))',
              'linear-gradient(315deg, rgba(15, 23, 42, 0.2), rgba(30, 41, 59, 0.15), rgba(51, 65, 85, 0.1))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 tech-grid opacity-10" />
        
        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {['{ }', '< />', 'API', 'SQL', 'JSON', 'REST', 'Java', 'Spring'].map((text, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/40 font-mono text-lg font-bold select-none pointer-events-none"
              style={{
                textShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
              }}
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: typeof window !== 'undefined' ? window.innerHeight : 800
              }}
              animate={{
                y: -100,
                x: Math.random() * 100 - 50,
                opacity: [0, 0.7, 0],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 10 + 12,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
            >
              {text}
            </motion.div>
          ))}
        </div>
        
        {/* Glowing Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
            }}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
            animate={{
              x: [0, Math.random() * 400 - 200, 0],
              y: [0, Math.random() * 400 - 200, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Matrix-like Binary Rain */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-cyan-400 font-mono text-sm select-none pointer-events-none"
              style={{ 
                left: `${(i / 25) * 100}%`,
                textShadow: '0 0 5px rgba(6, 182, 212, 0.8)',
                filter: 'blur(0.5px)'
              }}
              initial={{ y: -50 }}
              animate={{ y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900 }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              <div className="flex flex-col space-y-1">
                {Array.from({ length: 15 }, (_, j) => (
                  <motion.span
                    key={j}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 0.5,
                      delay: j * 0.1,
                      repeat: Infinity,
                    }}
                  >
                    {Math.round(Math.random())}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-padding relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="max-w-4xl text-left">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                  {/* "Hi, I'm" animation */}
                  <motion.span
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    style={{ display: "inline-block", transformOrigin: "center bottom" }}
                  >
                    Hi, I'm{' '}
                  </motion.span>
                  <br></br>
                  
                  {/* "Sandaruwan Kumara" - no animation */}
                  <span className="gradient-text">
                    Sandaruwan Kumara
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 font-medium">
                  Backend Developer | Java | APIs | Databases
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-400 max-w-3xl leading-relaxed"
              >
                Passionate about building scalable, efficient, and secure backend systems. 
                Currently pursuing Software Engineering at Open University of Sri Lanka.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={downloadCV}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Download size={20} />
                  Download CV
                </button>
                <button
                  onClick={scrollToProjects}
                  className="flex items-center justify-center gap-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Eye size={20} />
                  View Projects
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
