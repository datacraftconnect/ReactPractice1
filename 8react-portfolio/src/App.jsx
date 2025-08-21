// App.module.css - Styles for the main App component
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Testbar } from './components/Testbar/testbar';

function App() {

return (
  <div className={styles.app}>
    <Navbar />


  </div>
  );
  
}

export default App
