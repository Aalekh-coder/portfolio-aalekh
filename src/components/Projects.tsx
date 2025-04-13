import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with MERN stack, featuring real-time updates and payment integration.",
    liveLink: "https://project1.com",
    githubLink: "https://github.com/project1"
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    liveLink: "https://project2.com",
    githubLink: "https://github.com/project2"
  },
  {
    image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization.",
    liveLink: "https://project3.com",
    githubLink: "https://github.com/project3"
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
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