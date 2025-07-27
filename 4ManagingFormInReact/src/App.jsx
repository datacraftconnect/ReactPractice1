import { useState } from 'react'
import './App.css'
/*
function SimpleForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value); // Update state when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
*/
/*
function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: Name - ${formData.name}, Email - ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
*/

function ContactForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submittedMessages, setSubmittedMessages] = useState([]);

    const handleSubmit = () => {
        {/* Implement the submit functionality here */}
        if (name && message) {
            setSubmittedMessages([...submittedMessages, { name, message }]);
            setName(""); // Clear the name input
            setMessage(""); // Clear the message textarea
        }
    };

    return (
        <div>
            <h3>Contact Customer Support*</h3>
            {/* Create the input for name and the textarea for message here */}
            <input
                type="text"
                placeholder="Enter your name"
                value={name}  
                onChange={(e) => setName(e.target.value)}
                />
            <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            <button onClick={handleSubmit}>Submit</button>
            <p>*Make sure you've tried turning it off and on again first.</p>

            {submittedMessages.length > 0 && (
                <div>
                    <h4>Received Messages</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedMessages.map((msg, index) => (
                                <tr key={index}>
                                    <td>{msg.name}</td>
                                    <td>{msg.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function App() {
    return (
      <div className="App">
        <h1>Managing Forms in React</h1>
        <h2>Contact Form Example</h2>
        <ContactForm />
      </div>) 
}

export default App
