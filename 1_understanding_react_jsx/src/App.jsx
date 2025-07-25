import './App.css'

// there are 3 components in this file
// functional component that returns a welcome message
function WelcomeMessage() {
  return <h2> Welcome to our 1st React App using Functions</h2>
}  
function DynamicMessageByConst() {
  const appName = "Movie App";
  return <h2>Welcome to the {appName}</h2>
}  
// main app component that returns the WelcomeMessage component
function App() {
  return (
    <div>
      <WelcomeMessage />
      <p>This is a simple React application to understand JSX.</p>
      <p>Passing dynamic variable Movie App</p>
      <DynamicMessageByConst />
    </div>
  )
}

export default App
