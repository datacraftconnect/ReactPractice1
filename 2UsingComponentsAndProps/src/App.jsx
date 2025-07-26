
import './App.css'

//passing data via props to functional components

function UserCard({email, name}) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
} 

function App() {
  //props are used to pass data from parent to child components
  return (
    <>
      <h1>Welcome to the User Card App</h1>
      <div className='App'>
        <UserCard name="Karthik" email="karthik@gmail.com" />
        <UserCard name="John" email="J@gmail" />
        <UserCard name="Jane" email="" />
      </div>
    </>
  )
}

export default App
