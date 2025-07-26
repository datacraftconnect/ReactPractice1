# 🪝 Hooks in Functional Components

In React, **Hooks** are special functions that let you "hook into" React features like state, lifecycle methods, context, etc., inside **functional components**.

Hooks were introduced in **React 16.8** to allow functional components to manage state and side effects — features that were previously only available in class components.

---

## ✅ Why Use Hooks?

- Add **stateful logic** to functional components
- Replace the need for class components
- Simplify and modularize logic
- Make code cleaner and easier to test

---

## 🔑 Rules of Hooks

- ✅ Must be called at the **top level** of a React function (not inside loops, conditions, or nested functions)
- ✅ Must only be called from **React functional components** or **custom hooks**
- ❌ Cannot be called from regular JavaScript functions

---

## 🧵 Common Built-in Hooks

### 1. `useState` – For managing state

```jsx
const [count, setCount] = useState(0);
```

- `count`: current state value  
- `setCount`: function to update the value  
- `useState(0)`: initializes the state with 0  

#### Example:

```jsx
function Clicker() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}
```

---

### 2. `useEffect` – For side effects (API calls, timers, subscriptions)

The `useEffect` hook runs after the component renders. It’s used for:

- Fetching data from APIs
- Setting up subscriptions or timers
- Manually changing the DOM
- Cleaning up when a component unmounts

### ⏱ Timer Example with Explanation

```jsx
import React, { useState, useEffect } from 'react';

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
```

### 🧠 What’s Happening Here?

- `useEffect` runs **after the first render**
- Inside it, `setInterval` sets up a loop to increment `seconds` every second
- `setSeconds(prev => prev + 1)` uses the **previous value** to safely update state
- The cleanup function `clearInterval` stops the timer when the component is removed

---

### 3. `useContext` – Access values from React Context

- Use this hook to consume values provided by a React `Context`
- Good for global themes, user settings, auth, etc.

```jsx
const ThemeContext = React.createContext('light');

function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme === 'dark' ? 'white' : 'black' }}>Text</p>;
}
```

---

### 4. `useRef` – Access and persist values without causing re-renders

- `useRef` gives you a **mutable reference** that does not trigger re-renders
- Great for accessing DOM elements or keeping state across renders

#### Example: Focusing an input

```jsx
function FocusInput() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}
```

---

### 5. `useReducer` – Alternative to `useState` for complex state logic

Works like `useState`, but better for situations where:

- State has multiple sub-values
- Updates depend on previous state or action types

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

---

## 🧪 Summary of Common Hooks

| Hook         | Purpose                                      |
|--------------|----------------------------------------------|
| `useState`   | Manage local component state                 |
| `useEffect`  | Run side effects (API calls, subscriptions) |
| `useContext` | Access shared context values                |
| `useRef`     | Access DOM nodes or persistent values       |
| `useReducer` | Handle complex state logic with a reducer   |

---

## 💡 Custom Hooks

You can also create **custom hooks** to reuse logic across components.

```jsx
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

Then use it in any component:

```jsx
function Page() {
  useDocumentTitle("My Page");
  return <h1>Welcome</h1>;
}
```

---

Hooks make your React components **simpler, reusable, and cleaner** — no more need for class components in most cases.

## 💡 Pro Tip: Cleanup with `useEffect`

If your effect creates subscriptions, intervals, or event listeners — **always return a cleanup function**:

```jsx
useEffect(() => {
  const id = setInterval(...);
  return () => clearInterval(id);
}, []);
```

This prevents memory leaks and stale updates when the component unmounts.