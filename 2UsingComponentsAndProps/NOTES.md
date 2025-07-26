# ⚛️ React Components: Types, Uses, and Examples

In React, **components** are the building blocks of the user interface. A component is a reusable piece of code that returns React elements (typically JSX) describing a part of the UI.

---

## 📦 Why Use Components?

- Break UI into reusable pieces  
- Simplify structure and maintenance  
- Improve readability and modularity  
- Enable reusability across multiple parts of an app  

---

## 🧱 Types of Components in React

React provides two main types of components:

### 1. **Functional Components**

- The most common type  
- Use JavaScript functions (or arrow functions)  
- Can use **hooks** like `useState`, `useEffect`, etc.

#### ✅ Example:

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```
Or using an arrow function:
```jsx
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
```
2. Class Components (Older Style)
Use ES6 classes
Have access to lifecycle methods (e.g., componentDidMount)
Less common in modern React (use functional components + hooks instead)

✅ Example:
```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```
### 🧠 When to Use Each

| Component Type | When to Use                                                    |
|----------------|----------------------------------------------------------------|
| **Functional** | Preferred for most cases — simple, modern, supports hooks      |
| **Class**      | Rarely needed — only when working with older codebases         |
