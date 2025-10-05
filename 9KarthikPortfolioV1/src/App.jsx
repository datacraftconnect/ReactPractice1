import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

// Import Bootstrap CSS and theme variables
import "bootstrap/dist/css/bootstrap.min.css";
import "./vars.css";

// Import components
import Home from './components/Home/Home';
import About from './components/About/About';
const Projects = () => <div className={styles.section}><h1>Projects Section</h1><p>Check out my work.</p></div>;
const Resume = () => <div className={styles.section}><h1>Resume Section</h1><p>View my experience.</p></div>;
const Blog = () => <div className={styles.section}><h1>Blog Section</h1><p>Read my thoughts.</p></div>;

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
