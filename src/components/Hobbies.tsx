import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Palette, Book, Plane } from 'lucide-react';

const hobbies = [
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    name: "Gaming",
    description: "Competitive gaming enthusiast"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Sketching",
    description: "Digital art & illustration"
  },
  {
    icon: <Book className="w-8 h-8" />,
    name: "Reading",
    description: "Tech books & sci-fi novels"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    name: "Traveling",
    description: "Exploring new places"
  }
];

const Hobbies = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;