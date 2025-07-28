# 🖱️ Basic Event Handling in React

React handles events using a clean, declarative syntax that’s very similar to plain JavaScript, with a few differences.

---

## ✅ Why Use Event Handling in React?

Event handling is used to make components interactive by responding to:

- Button clicks
- Form submissions
- Input field changes
- Mouse movements
- Keyboard actions

---

## ⚙️ Syntax Overview

React uses **camelCase** for event names and passes a **function reference** (not a string):

```jsx
<button onClick={handleClick}>Click Me</button>
```

---

## 🧠 Common Event Types and Use Cases

| Event Type     | Description                                | Common Use Case                          |
|----------------|--------------------------------------------|-------------------------------------------|
| `onClick`      | Fired when an element is clicked           | Buttons, icons, toggles                  |
| `onChange`     | Fired when the value of an input changes   | Text fields, dropdowns, checkboxes       |
| `onSubmit`     | Fired when a form is submitted             | Forms                                     |
| `onMouseEnter` | Fired when mouse enters an element         | Tooltips, hover effects                   |
| `onKeyDown`    | Fired when a key is pressed down           | Keyboard shortcuts, search input triggers|

---

## 🔁 Different Approaches to Event Handling

### ✅ 1. Function Reference (Preferred)

```jsx
function handleClick() {
  alert("Clicked!");
}

<button onClick={handleClick}>Click</button>
```

---

### ✅ 2. Inline Function (Less Recommended)

```jsx
<button onClick={() => alert("Clicked inline!")}>
  Click
</button>
```

> ⚠️ Good for simple actions, but avoid using for complex logic or in frequently re-rendering components.

---

### ✅ 3. Arrow Functions with Parameters

```jsx
function handleGreet(name) {
  alert(`Hello, ${name}`);
}

<button onClick={() => handleGreet("React")}>Greet</button>
```

> Useful when you need to pass arguments to the handler.

---

## ✨ Real Examples

### 📌 Example 1: Button Click

```jsx
function ClickButton() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

### 📌 Example 2: Input Field (`onChange`)

```jsx
import { useState } from 'react';

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
```

---

### 📌 Example 3: Form Submission

```jsx
function SubmitForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## ✅ Best Practices

- Use named functions for better readability and reusability
- Avoid logic-heavy inline functions inside JSX
- Use `e.preventDefault()` for forms to avoid page reloads
- Prefer arrow functions when you need to pass arguments

---

## 🧪 Summary

- React events are similar to native DOM events, but follow JSX rules
- Use camelCase event names like `onClick`, `onChange`, etc.
- Pass a function reference, not a string or immediate function call
- Use events to add interactivity to your UI (buttons, forms, inputs)

---

Let me know if you'd like advanced examples like debounced input handling, keyboard navigation, or event delegation!
