import './App.css';
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
      <Home/>
      <Skills />
      <Education />
      <Patent />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
