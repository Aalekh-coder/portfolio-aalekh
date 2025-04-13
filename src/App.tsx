import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';
import ArtGrid from "./components/ArtGrid.tsx"
import SocialMedia from './components/SocialMedia.tsx';

function App() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ArtGrid />
      <Projects />
      <Resume />
      <Hobbies />
      <SocialMedia />
    </div>
  );
}

export default App;