import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'motion/react';

const Divider = () => (
  <div className="my-12 border-t border-blue-800/50 w-2/3 mx-auto"></div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-6 scroll-smooth">
      {/* Header */}
      <motion.header animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className="text-center mt-10">
        <motion.h1 animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(66,10,24,0.4)]">Kratika Gupta</motion.h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">Engineering student. Passionate about clean code, scalable systems, and building impactful tech solutions.</p>
        <div className="flex gap-6 justify-center mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub className="w-7 h-7 text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125" /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-7 h-7 text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125" /></a>
          <a href="mailto:youremail@example.com"><FaEnvelope className="w-7 h-7 text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125" /></a>
          <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer"><SiLeetcode className="w-7 h-7 text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125" /></a>
        </div>
      </motion.header>

      <Divider />

      {/* About */}
      <motion.section whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-gray-900/50 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Me</h2>
        <p className="text-gray-300">Hi! I’m Kratika, a creative and curious engineering student who loves turning ideas into code. Whether it’s a full-stack app or a nifty automation script, I enjoy solving real-world problems with technology.</p>
      </motion.section>

      <Divider />

      {/* Skills */}
      <motion.section whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'Tailwind CSS', 'Node.js', 'Python', 'C++', 'Flask', 'Firebase', 'Socket.io'].map(skill => (
            <motion.span key={skill} whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-gray-800/60 rounded-full shadow hover:bg-gray-700/80 transition backdrop-blur-sm border border-cyan-500/30">
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <Divider />

      {/* Experience */}
      <motion.section whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400">Experience</h2>
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-cyan-500/30 hover:shadow-cyan-500/30 transition-shadow">
          <h3 className="text-xl font-semibold text-cyan-300">OpenAI API Intern</h3>
          <p className="text-gray-300">Worked on API cost reporting, usage analytics, and automation tools to help teams manage OpenAI API consumption efficiently.</p>
        </div>
      </motion.section>

      <Divider />

      {/* Projects */}
      <motion.section whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} className="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const projects = [
  {
    title: 'Comfort Corner',
    description: 'E-commerce app for cozy living. React + Tailwind + Firebase.',
    image: 'https://via.placeholder.com/600x300?text=Comfort+Corner',
    demo: 'https://yourcomfortcornerlink.com',
    github: 'https://github.com/yourusername/comfort-corner',
  },
  {
    title: 'Docify',
    description: 'Collaborative document editor with live updates. React + Socket.io.',
    image: 'https://via.placeholder.com/600x300?text=Docify',
    demo: 'https://yourdocifylink.com',
    github: 'https://github.com/yourusername/docify',
  },
  {
    title: 'UX Analyzer',
    description: 'Tool for analyzing and visualizing webpage effectiveness. Python + Flask.',
    image: 'https://via.placeholder.com/600x300?text=UX+Analyzer',
    demo: 'https://youruxanalyzerlink.com',
    github: 'https://github.com/yourusername/ux-analyzer',
  },
];

export default Portfolio;
