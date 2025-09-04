import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Code, Download, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:sandaruwank182@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Sri Lanka',
      subtext: 'Available for remote work'
    },
    {
      icon: Phone,
      text: '+94 XX XXX XXXX',
      subtext: 'Available Mon-Fri'
    },
    {
      icon: Mail,
      text: 'sandaruwank182@gmail.com',
      subtext: 'Response within 24h'
    }
  ];

  return (
    <footer className="relative py-12 overflow-hidden" style={{ minHeight: '280px' }}>
      {/* Compact Modern Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/IMG-20250212-WA0063.jpg" alt="footer background" className="w-full h-full object-cover object-center opacity-25" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/60 backdrop-blur-sm" />
        
        {/* Subtle Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-padding relative z-10">
        {/* Fully Transparent Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 backdrop-blur-md text-cyan-400 rounded-2xl hover:scale-110 transition-all duration-300 group hover:backdrop-blur-lg bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-cyan-400/20"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
        </motion.button>

        {/* Main Fully Transparent Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          
          {/* Brand & Quick Action - Fully Transparent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-sm rounded-2xl p-5 hover:backdrop-blur-md transition-all duration-300">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                M.A.G. Sandaruwan Kumara
              </h3>
              <p className="text-white/90 text-xs mb-3 leading-relaxed drop-shadow">
                Backend Developer & Software Engineering Student
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/50 hover:to-blue-500/50 text-white px-4 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 text-sm w-full justify-center shadow-lg hover:shadow-cyan-500/20"
              >
                <Download size={14} />
                <span className="font-medium">Resume</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links - Fully Transparent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-sm rounded-2xl p-5 hover:backdrop-blur-md transition-all duration-300 h-full">
              <h4 className="text-sm font-semibold text-white/95 mb-3 flex items-center drop-shadow">
                <Code size={16} className="mr-2 text-cyan-400" />
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {navigationLinks.slice(0, 6).map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 3, scale: 1.05, y: -1 }}
                    className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-xs py-2 px-3 rounded-lg hover:bg-white/10 text-left hover:shadow-lg backdrop-blur-sm"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact & Stats - Fully Transparent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-sm rounded-2xl p-5 hover:backdrop-blur-md transition-all duration-300 h-full">
              <h4 className="text-sm font-semibold text-white/95 mb-3 flex items-center drop-shadow">
                <Mail size={16} className="mr-2 text-cyan-400" />
                Contact & Stats
              </h4>
              
              {/* Transparent Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-xs">
                  <MapPin size={12} className="text-cyan-400" />
                  <span className="text-white/80">Sri Lanka • Remote Available</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Mail size={12} className="text-cyan-400" />
                  <span className="text-white/80">sandaruwank182@gmail.com</span>
                </div>
              </div>

              {/* Transparent Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between bg-white/5 rounded p-2 backdrop-blur-sm">
                  <span className="text-white/70">Projects:</span>
                  <span className="text-cyan-400 font-semibold">5</span>
                </div>
                <div className="flex justify-between bg-white/5 rounded p-2 backdrop-blur-sm">
                  <span className="text-white/70">Experience:</span>
                  <span className="text-cyan-400 font-semibold">0 years</span>
                </div>
                <div className="flex justify-between bg-white/5 rounded p-2 backdrop-blur-sm">
                  <span className="text-white/70">Tech Stack:</span>
                  <span className="text-cyan-400 font-semibold">20+</span>
                </div>
                <div className="flex justify-between bg-white/5 rounded p-2 backdrop-blur-sm">
                  <span className="text-white/70">Clients:</span>
                  <span className="text-cyan-400 font-semibold">5+</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Status - Fully Transparent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-sm rounded-2xl p-5 hover:backdrop-blur-md transition-all duration-300 h-full">
              <h4 className="text-sm font-semibold text-white/95 mb-3 drop-shadow">Connect & Status</h4>
              
              {/* Transparent Social Links */}
              <div className="flex justify-center space-x-3 mb-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3, rotateY: 10 }}
                    className="p-3 text-cyan-300 hover:text-white transition-all duration-300 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/20"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Transparent Status & Availability */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center space-x-2 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-green-400 text-xs font-medium drop-shadow">Available for hire</span>
                </div>
                <p className="text-white/70 text-xs bg-white/5 rounded p-2 backdrop-blur-sm">Response within 2-4 hours</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Separator Line */}
        <div className="mt-8 mb-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        {/* Fully Transparent Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            
            {/* Transparent Copyright */}
            <div className="backdrop-blur-sm rounded-xl px-5 py-3 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <p className="text-white/80 text-xs flex items-center space-x-2 drop-shadow">
                <span>© {currentYear} SandaruwanK</span>
                <Heart size={12} className="text-red-400 animate-pulse" />
                <span>Sri Lanka </span>
              </p>
            </div>

            {/* Transparent Tech Stack */}
            <div className="backdrop-blur-sm rounded-xl px-5 py-3 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <p className="text-white/80 text-xs drop-shadow">
                • <span className="text-cyan-400 font-medium">React</span> • 
                <span className="text-cyan-400 font-medium"> Tailwind</span> • 
                <span className="text-cyan-400 font-medium"> Framer Motion</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
