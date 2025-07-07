import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Patent from './pages/Patent';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div id="about"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <div id="patent"><Patent /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />
    </div>
  );
}

export default App;
