import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Clean Code"
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Modern Development"
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Problem Solving"
  },
  {
    url: "https://images.unsplash.com/photo-1552308995-2baac1ad5490",
    title: "Team Collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    title: "Code Quality"
  },
  {
    url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    title: "Innovation"
  }
];

const ImageGrid = () => {
  return (
    <div className="py-20  bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <h3 className="text-white text-xl font-semibold p-4">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;