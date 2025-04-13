
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';


import { BsWhatsapp } from "react-icons/bs";


const hobbies = [
  {
    icon: <BsWhatsapp className="w-8 h-8" />,
    name: "Whatsapp",
        to: "https://wa.me/qr/SPJ5VCAIVWP4D1",
    color:"text-green-500"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    name: "Gmail",
    to:`mailto:fiaalekh@gmail.com?subject=Let's%20Connect&body=Hey%20Aalekh!`, color:"text-yellow-500"
     
  },
  {
    icon: <Github className="w-8 h-8" />,
    name: "Github",
    to:"https://github.com/Aalekh-coder", color:"text-gray-500"
    
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    name: "Github",
    to:"https://www.linkedin.com/in/aalekh-coder/", color:"text-blue-500"
    
  },
 
];

const SocialMedia = () => {
  return (
    <div className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Connect Me here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
              <motion.a 
                  href={hobby?.to}
                  target="_blank"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
            >
              <div className={`flex justify-center mb-4 ${hobby?.color}`}>
                {hobby.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
        
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;