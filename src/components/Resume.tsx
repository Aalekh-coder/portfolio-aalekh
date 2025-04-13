
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

const Resume = () => {
  return (
    <div className="py-20 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-zinc-800 rounded-xl p-8 shadow-xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-6">Aalekh</h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <a href="mailto:fiaalekh@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
                <Mail className="w-4 h-4" />
                fiaalekh@gmail.com
              </a>
              <a href="tel:+918860243743" className="flex items-center gap-2 hover:text-blue-400">
                <Phone className="w-4 h-4" />
                8860243743
              </a>
              <a href="https://aalekh-portfolio.vercel.app" className="flex items-center gap-2 hover:text-blue-400">
                <Globe className="w-4 h-4" />
                Aalekh-portfolio.com
              </a>
              <a href="https://www.linkedin.com/in/aalekh-coder/" className="flex items-center gap-2 hover:text-blue-400">
                <Linkedin className="w-4 h-4" />
                Aalekh-Coder
              </a>
              <a href="https://github.com/Aalekh-coder" className="flex items-center gap-2 hover:text-blue-400">
                <Github className="w-4 h-4" />
                Aalekh-Coder
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-700">Summary</h2>
              <p className="text-gray-300">
                A problem-solving developer and freelancer with expertise in the <span className="font-semibold">MERN stack</span>. 
                Previously educated hundreds of students daily as a <span className="font-semibold">Teacher Assistant</span>. 
                Passionate about building web applications, attending <span className="font-semibold">hackathons</span>, 
                and engaging with <span className="font-semibold">Google Developer Group</span> events to stay ahead in tech.
              </p>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-700">Technologies</h2>
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Languages:</span>
                  <span className="text-gray-300"> JavaScript (ES6+), TypeScript, MongoDb</span>
                </p>
                <p>
                  <span className="font-semibold">Technologies:</span>
                  <span className="text-gray-300"> Node.js, Express.js, Mongoose, React.js, Next.js, Tailwind, CSS3, HTML5, Bootstrap, RESTful APIs, Git (version Control, Collaborative Workflows), Front-end Build Tools (Webpack, Babel), Package Managers (NPM)</span>
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-700">Experience</h2>
              <div className="bg-zinc-700/50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Teacher Assistant</h3>
                    <p className="text-gray-400">ApTech Computers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">Feb 2024 – Jan 2025</p>
                    <p className="text-gray-400">Delhi, Paschim Vihar</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>At Aptech Computers, I teach, resolve doubts, assign tasks, and review assignments daily.</li>
                  <li>I organize and manage hackathons and workshops, oversee the selection of winners, and conduct mock interviews to foster learning and innovation.</li>
                  <li>I teach HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, Tailwind CSS, React.js, MongoDb, MySql, VsCode, PostMan, Responsive UI.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-700">Projects</h2>
              
              {/* SketchKingston */}
              <div className="bg-zinc-700/50 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">SketchKingston</h3>
                    <p className="text-gray-400">Combining graphic design creativity with technical expertise</p>
                  </div>
                  <a href="https://sketchkingston-1.onrender.com" 
                     className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                     target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>A marketplace for artists to sell personal art and buyers to discover unique creations.</li>
                  <li>A dynamic art marketplace featuring authentication, authorization, seller dashboards, and the ability to upload and manage artwork.</li>
                  <li>The marketplace leverages Express for routing, Node.js as the runtime, bcrypt.js for password hashing and salting, JWT for token generation, and Mongoose for database connection, schema validation, and CRUD operations. Multer handles file uploads, dotenv manages environment variables, and Socket.IO facilitates real-time communication between freelancers and clients.</li>
                  <li>The frontend utilizes React.js for building the user interface, React Icons for icons, React Toastify for notifications, React Router DOM for routing, Tailwind CSS for styling, React Redux Toolkit for state management, React Redux Query for data fetching, Slick Carousel for creating responsive carousels, and Socket.IO Client for enabling real-time communication.</li>
                  <li className="font-semibold">Tools Used: MongoDB, Express.js, React.js, Node.js, Redux.js, React Query, Socket.io</li>
                </ul>
              </div>

              {/* Wanderlust */}
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Hotel Booking Platform - Wanderlust</h3>
                  </div>
                  <a href="https://github.com/Aalekh-coder/full-stack-project" 
                     className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                     target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Wanderlust is a hotel booking system designed to help users find the perfect travel destinations. Built with Bootstrap for a responsive UI and Node.js for a robust back-end, it uses RESTful APIs for seamless data management.</li>
                  <li>The application features secure user authentication and authorization, implemented with Passport.js ensuring a personalized experience for every traveler.</li>
                  <li>The platform allows users to search and book hotels, view available rooms.</li>
                  <li className="font-semibold">Tools Used: MongoDB, Express.js, EJS, Node.js, Axios, Passport.js</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-zinc-700">Education</h2>
              <div className="space-y-4">
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">University of Delhi</h3>
                      <p className="text-gray-400">Bachelor of Commerce</p>
                    </div>
                    <span className="text-gray-400">Sept 2022 – May 2025</span>
                  </div>
                </div>
                
                <div className="bg-zinc-700/50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">Govt. Sarvodaya co-ed school</h3>
                      <p className="text-gray-400">CBSE 12th - Passed with 75 Percentage</p>
                    </div>
                    <span className="text-gray-400">Jun 2022</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;