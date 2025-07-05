import './index.css';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">
      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-2">Kratika - Developer Portfolio</h1>
        <p className="text-gray-400 max-w-md">Passionate about clean code, scalable systems, and creating meaningful digital experiences.</p>
        <div className="flex gap-4 justify-center mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope className="w-6 h-6 hover:text-blue-400" />
          </a>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-900 shadow-lg rounded-2xl">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button>View Project</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

const projects = [
  {
    title: 'Comfort Corner',
    description: 'E-commerce app for cozy living. React + Tailwind + Firebase.',
    link: 'https://yourcomfortcornerlink.com',
  },
  {
    title: 'Docify',
    description: 'Collaborative document editor with live updates. React + Socket.io.',
    link: 'https://yourdocifylink.com',
  },
  {
    title: 'UX Analyzer',
    description: 'Tool for analyzing and visualizing webpage effectiveness. Python + Flask.',
    link: 'https://youruxanalyzerlink.com',
  },
];

export default Portfolio;
