// App.module.css - Styles for the main App component
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/Experience/Experience";

function App() {

return (
  <div className={styles.app}>
    <Navbar />
    <Hero />
    <About />
    <Experience />




  </div>
  );
  
}

export default App
