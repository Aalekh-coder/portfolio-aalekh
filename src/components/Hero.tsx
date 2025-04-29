import  { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2 } from 'lucide-react';
import img1 from "../image/img1.jpg" 
import img2 from "../image/img2.jpg" 
import img3 from "../image/img3.jpg" 
import img4 from "../image/img4.jpg" 
import img5 from "../image/img5.jpg" 
import img6 from "../image/img6.jpg" 

import Angular from "../image/particle/Angular.png"
import Appwrite from "../image/particle/Appwrite.png"
import AWS from "../image/particle/AWS.png"
import Django from "../image/particle/Django.png"
import Firebase from "../image/particle/Angular.png"
import Flask from "../image/particle/Flask.png"
import Git from "../image/particle/Git.png"
import Homebrew from "../image/particle/Homebrew.png"
import Jasmine from "../image/particle/Jasmine.png"
import Java from "../image/particle/Java.png"
import LinkedIn from "../image/particle/LinkedIn.png"
import Linux from "../image/particle/Linux.png"
import MongoDB from "../image/particle/MongoDB.png"
import NET from "../image/particle/NET.png"
import Nodejs from "../image/particle/Node.js.png"
import NumPy from "../image/particle/NumPy.png"
import Postman from "../image/particle/Postman.png"
import React from "../image/particle/React.png"
import Redux from "../image/particle/Redux.png"
import Sass from "../image/particle/Sass.png"
import Slack from "../image/particle/Slack.png"
import Vercel from "../image/particle/Vercel.png"
import Vite from "../image/particle/Vite.js.png"
import C from "../image/particle/C.png"
import GoLand from "../image/particle/GoLand.png"
import GoogleCloud from "../image/particle/GoogleCloud.png"
import RaspberryPi from "../image/particle/RaspberryPi.png"
import RubyMine from "../image/particle/RubyMine.png"
import SQLDeveloper from "../image/particle/SQLDeveloper.png"
import Svelte from "../image/particle/Svelte.png"
import Ubuntu from "../image/particle/Ubuntu.png"

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];


const particals = [
  Angular,
Appwrite,
AWS,
Django,
Firebase,
Flask,
Git,
Homebrew,
Jasmine,
Java,
LinkedIn,
Linux,
MongoDB,
NET,
Nodejs,
NumPy,
Postman,
React,
Redux,
Sass,
Slack,
Vercel,
  Vite,
  C,
  GoLand,
  GoogleCloud,
  RaspberryPi,
  RubyMine,
  SQLDeveloper,
  Svelte,
  Ubuntu
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 35, stiffness: 1000 };
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
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-40" />
        </motion.div>
      ))}

      {/* Cursor Follower */}
      <motion.div
        className="w-8 h-8 bg-[#5ad0ff] rounded-full fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-20  pointer-events-none">
        {particals?.map((p, i) => (
          <motion.img
            src={p}
            key={i}
            className="absolute w-10 h-10"
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
            style={{ opacity: 5 }}
          ></motion.img>
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
            <h1 className="text-4xl md:text-6xl font-bold text-white  px-2 py-4 rounded-xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              Hello, I am Aalekh
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-pink-100"
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