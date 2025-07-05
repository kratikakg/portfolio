import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'motion/react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <motion.header animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className="text-center mt-10">
        <motion.h1 animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl font-extrabold mb-2 text-blue-400">Kratika</motion.h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Engineering student. Passionate about clean code, scalable systems, and building impactful tech solutions.</p>
        <div className="flex gap-6 justify-center mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub className="w-7 h-7 hover:text-blue-500 transition-transform hover:scale-125" /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-7 h-7 hover:text-blue-500 transition-transform hover:scale-125" /></a>
          <a href="mailto:youremail@example.com"><FaEnvelope className="w-7 h-7 hover:text-blue-500 transition-transform hover:scale-125" /></a>
          <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer"><SiLeetcode className="w-7 h-7 hover:text-yellow-400 transition-transform hover:scale-125" /></a>
        </div>
      </motion.header>

      {/* About */}
      <section className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">Hi! I’m Kratika, a creative and curious engineering student who loves turning ideas into code. Whether it’s a full-stack app or a nifty automation script, I enjoy solving real-world problems with technology.</p>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'Tailwind CSS', 'Node.js', 'Python', 'C++', 'Flask', 'Firebase', 'Socket.io'].map(skill => (
            <motion.span key={skill} whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-gray-800 rounded-full shadow hover:bg-gray-700 transition">
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="bg-gray-900 rounded-2xl p-4 shadow">
          <h3 className="text-xl font-semibold">OpenAI API Intern</h3>
          <p className="text-gray-400">Worked on API cost reporting, usage analytics, and automation tools to help teams manage OpenAI API consumption efficiently.</p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
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