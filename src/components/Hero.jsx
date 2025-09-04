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
            backgroundImage: `url('/galle.jpg')`
          }}
        />
        
        {/* Light Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/50 to-black/40" />
        
        {/* Additional Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-gray-950/35 to-slate-900/30" />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 tech-grid opacity-10" />
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
                  Software Engineer | Backend Developer | Java | APIs | Databases
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
