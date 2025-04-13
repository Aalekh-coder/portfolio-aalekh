import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2 } from 'lucide-react';
import img1 from "../image/img1.jpg" 
import img2 from "../image/img2.jpg" 
import img3 from "../image/img3.jpg" 
import img4 from "../image/img4.jpg" 
import img5 from "../image/img5.jpg" 
import img6 from "../image/img6.jpg" 

const images = [
img1,
img2,
img3,
img4,
img5,
img6
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    cursorX.set(clientX - 16);
    cursorY.set(clientY - 16);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Images */}
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={src}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        </motion.div>
      ))}

      {/* Cursor Follower */}
      <motion.div
        className="w-8 h-8 bg-red-500 rounded-full fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ opacity: 0.3 }}
          />
        ))}
      </div>
      
      <div className="relative z-30 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Code2 className="w-10 h-10 text-blue-500" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hello, I am Aalekh
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-400"
          >
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Full Stack Engineer',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;