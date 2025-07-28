import { useState } from 'react';
import './App.css'

// 1. Function Reference (Preferred)
function handleClick() {
  alert("Clicked!");
}
// Arrow Functions with Parameters
function handleGreet(name) {
  alert(`Hello, ${name}`);
}
//Input Field (`onChange`)
function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Type here" />
      <p>You typed: {text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <p>Simple onClick Event Handling in React</p>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>
        <p>Event Handling using Arrow Functions with Parameters</p>
        <button onClick={() => handleGreet("Karthik")}>Greet</button>
      </div>      
      <div>
        <p>Event Handling using Input Field (`onChange`)</p>
        <TextInput />
      </div>       
    </div>
  )
}

export default App
