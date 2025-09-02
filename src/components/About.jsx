import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Heart, User, Users } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'M.A.G. Sandaruwan Kumara Wickramasingha.' },
    { icon: Calendar, label: 'Date of Birth', value: '21 March 2002' },
    { icon: Mail, label: 'Email', value: 'sandaruwank182@gmail.com      ' },
    { icon: MapPin, label: 'Nationality', value: 'Sinhala' },
    { icon: Heart, label: 'Religion', value: 'Buddhist' },
    { icon: Users, label: 'Civil Status', value: 'Unmarried' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%),
          radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
        `,
        backgroundSize: '400% 400%, 100% 100%, 100% 100%, 100% 100%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.3, 1.5, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 right-1/6 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-3/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"
        />

        {/* Additional floating orbs */}
        <motion.div
          animate={{ 
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [0.8, 1.4, 0.8],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/6 right-1/4 w-28 h-28 bg-green-500/15 rounded-full blur-2xl"
        />

        <motion.div
          animate={{ 
            x: [0, 90, 0],
            y: [0, -70, 0],
            scale: [1.2, 0.6, 1.2],
            opacity: [0.15, 0.45, 0.15]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/6 left-1/8 w-36 h-36 bg-pink-500/15 rounded-full blur-3xl"
        />

        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/5 left-1/3 w-20 h-20 border border-cyan-400/30 rounded-full"
        />

        <motion.div
          animate={{ 
            rotate: [360, 0],
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/3 w-16 h-16 border-2 border-purple-400/40 transform rotate-45"
        />

        <motion.div
          animate={{ 
            scale: [1, 2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute top-2/3 left-2/3 w-12 h-12 border-2 border-blue-400/35 rounded-lg"
        />

        {/* Animated lines and shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
        />
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />

        {/* Diagonal lines */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [45, 45, 45]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/4 right-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform rotate-45"
        />

        <motion.div
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [-45, -45, -45]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
          className="absolute bottom-1/3 left-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent transform -rotate-45"
        />

        {/* Pulsing dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
          />
        ))}

        {/* Floating triangles */}
        <motion.div
          animate={{
            rotate: [0, 120, 240, 360],
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/5 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-cyan-400/30"
        />

        <motion.div
          animate={{
            rotate: [360, 240, 120, 0],
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/3 left-1/5 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-purple-400/30"
        />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, passion, and personal details
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=384&q=80"
                  alt="M.A.G. Sandaruwan"
                  className="w-80 h-96 rounded-2xl object-cover shadow-2xl ring-2 ring-cyan-500/50"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=M.A.G.+Sandaruwan&size=320&background=0891b2&color=ffffff&bold=true&format=png`;
                  }}
                />
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full shadow-lg"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Bio & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="glassmorphism p-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-justify">
                I'm M.A.G. Sandaruwan, a Backend Developer passionate about building scalable, 
                efficient, and secure systems. Currently pursuing a Bachelor of Software Engineering 
                (Honours) at the Open University of Sri Lanka. I love working with Java, Spring Boot, 
                REST APIs, and databases. My goal is to become a senior backend engineer and contribute 
                to impactful tech projects that make a difference in people's lives.
              </p>
            </div>

            {/* Personal Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism p-6 glow-card cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="p-2 bg-cyan-500/20 rounded-lg"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(6, 182, 212, 0.3)",
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                I'm driven by the challenge of solving complex problems and creating 
                systems that can handle millions of users. I believe in writing clean, 
                maintainable code and staying updated with the latest technologies and 
                best practices in backend development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
