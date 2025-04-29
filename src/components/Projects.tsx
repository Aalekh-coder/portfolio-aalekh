import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import wanderlustImg from "../image/wanerlust3.jpg"
import news24 from "../image/new24.png"
import sketch from "../image/sketchkingston.png"
import apple from "../image/p4.svg"
import brain from "../image/brainwave.png"
import ecom from "../image/project/ecom.png"
import medium from "../image/project/mendum.png"

const projects = [
  {
    image: ecom,
    title: "Ecommerce - web app",
    description: "Ecommerce web app with Auth Admin payapl",
    liveLink: "https://ecom-mern-aalekh-client.onrender.com",
    githubLink: "https://github.com/Aalekh-coder/Ecom-mern-sangham/tree/main"
  },
  {
    image: medium,
    title: "Medium Clone",
    description: "Medium clone for you reading",
    liveLink: "https://blog-app-beta-silk.vercel.app/login",
    githubLink: "https://blog-app-beta-silk.vercel.app/login"
  },
  {
    image: wanderlustImg,
    title: "Wanderlust: The Ultimate Hotel Management System for Travelers",
    description: "Wanderlust could be the ideal solution. It not only caters to hotels but also enhances the travel experience by integrating essential features.",
    liveLink: "https://wanerlust.onrender.com",
    githubLink: "https://github.com/Aalekh-coder/FullStack-Project-1"
  },
  {
    image: news24,
    title: "News 24/7: daily news web app",
    description: "Your daily new web app that updated all time",
    liveLink: "https://asseignment3.vercel.app",
    githubLink: "https://github.com/Aalekh-coder/asseignment3"
  },
  {
    image: sketch,
    title: "sketchkingston",
    description: "A marketplace for artists to sell personal art and buyers to discover unique creations graphics related marketplace also for freelancers",
    liveLink: "https://sketchkingston-1.onrender.com/",
    githubLink: "hhttps://sketchkingston-1.onrender.com/"
  },
  {
    image: brain,
    title: "Brain wave",
    description: "Brain wave mordan looking landing page",
    liveLink: "https://brainwave-wine-ten.vercel.app",
    githubLink: "https://github.com/Aalekh-coder/BrainWave"
  },
  {
    image: apple,
    title: "Animated Apple Iphone 3D Website",
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    liveLink: "https://apple-nu-six.vercel.app",
    githubLink: "https://github.com/Aalekh-coder/Apple-Clone"
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-950 rounded-xl shadow-lg overflow-hidden text-white"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.description.slice(0,100)}...</p>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <Github className="w-5 h-5" color="purple"/>
                    <span className='text-purple-500'>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;