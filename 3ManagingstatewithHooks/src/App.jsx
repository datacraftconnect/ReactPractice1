import { useState,useEffect,useContext } from 'react'
import './App.css'

function Clicker() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up an interval that updates the counter every second
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); // Update state every 1000ms
    }, 1000);

    // Cleanup: Clear the interval when component unmounts or updates
    return () => clearInterval(interval);
  }, []); // Empty dependency array means run only once (on mount)

  return <p>Timer: {seconds}s</p>;
}

// Context for theme
import React from 'react';
const ThemeContext = React.createContext('white');

function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme === 'dark' ? 'white' : 'blue' }}>Text</p>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">    
      <div>
      <h1>Testing Hooks on React - useState</h1>
      <Clicker />
      </div>
      <div>
      <h1>Testing Hooks on React - userEffect</h1>
      <Timer />
      </div>
      <div>
      <h1>Testing Hooks on React - useContext</h1>
      <ThemedText />
      </div>      
    </div>

  )
}

export default App
