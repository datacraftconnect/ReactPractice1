import './App.css';

function FruitList() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>Name: {user.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  return (
    <div className="App">
      <div>
        <p>Simple List of Strings - ["Apple", "Banana", "Mango"]</p>
        <FruitList />
      </div>
      <div>
        <p>List of Objects - {JSON.stringify(users)}</p>
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
