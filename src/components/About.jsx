import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Heart, User, Users, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'M.A.G. Sandaruwan Kumara Wickramasingha.' },
    { icon: Calendar, label: 'Date of Birth', value: '21 March 2002' },
    { icon: Mail, label: 'Email', value: 'sandaruwank182@gmail.com' },
    { icon: Globe, label: 'Country', value: 'Sri Lanka' },
    { icon: MapPin, label: 'Nationality', value: 'Sinhala' },
    { icon: Heart, label: 'Religion', value: 'Buddhist' },
    { icon: Users, label: 'Civil Status', value: 'Unmarried' },
    { icon: GraduationCap, label: 'University', value: 'Open University of Sri Lanka' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-slate-900 relative"
    >
      {/* Clean modern background with subtle pattern */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Get to know more about my background, passion, and personal details
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Modern card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src="/myimage.png"
                    alt="M.A.G. Sandaruwan"
                    className="w-80 h-96 rounded-2xl object-cover shadow-2xl ring-2 ring-blue-500/30 group-hover:ring-blue-400/50 transition-all duration-500"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=M.A.G.+Sandaruwan&size=320&background=0891b2&color=ffffff&bold=true&format=png`;
                    }}
                  />
                  
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                </div>
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
            {/* Bio Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Story</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg text-justify">
                I'm M.A.G. Sandaruwan, a Backend Developer passionate about building scalable, 
                efficient, and secure systems. Currently pursuing a Bachelor of Software Engineering 
                (Honours) at the Open University of Sri Lanka. I love working with Java, Spring Boot, 
                REST APIs, and databases. My goal is to become a senior backend engineer and contribute 
                to impactful tech projects that make a difference in people's lives.
              </p>
            </motion.div>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl p-5 hover:border-blue-500/40 hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm font-medium mb-1">{info.label}</p>
                      <p className="text-white font-semibold text-sm break-words">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What Drives Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">What Drives Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg text-justify">
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
