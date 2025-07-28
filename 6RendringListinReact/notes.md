# 📋 Rendering Lists in React

Rendering lists is a common task in React when you want to display dynamic data such as arrays of users, products, tasks, etc.

---

## ✅ Use Cases

- Displaying items in a to-do list
- Rendering rows in a table
- Showing products in a shopping cart
- Listing user comments or reviews

---

## 📌 Key Concept: `.map()`

React relies on JavaScript's `.map()` method to iterate over arrays and return JSX elements for each item.

---

## ✅ Basic Syntax

```jsx
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

> 📌 **`key` is required**: It helps React identify which items changed, were added, or removed.

---

## 🧠 Why Keys Matter

Keys should be:

- **Unique** among siblings
- Preferably **stable** (like an ID, not an array index)

---

## ✨ Example 1: Simple List of Strings

```jsx
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
```

---

## ✨ Example 2: List of Objects

```jsx
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>Name: {user.name}</li>
      ))}
    </ul>
  );
}
```

---

## ✨ Example 3: Using a Separate Component for Each Item

```jsx
function User({ name }) {
  return <li>{name}</li>;
}

function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  return (
    <ul>
      {users.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
}
```

---

## 🔁 Different Approaches

| Approach                            | When to Use                        |
|-------------------------------------|-------------------------------------|
| Inline JSX with `.map()`            | Simple lists, quick rendering       |
| Separate component for each item    | Complex items or reusable UI        |
| Conditional rendering inside `.map()` | When only some items should render |

---

## ❗ Pitfalls to Avoid

- ❌ **Don’t forget the `key` prop** — React uses it to optimize rendering
- ❌ **Avoid using array index as key** unless items never change order
- ❌ **Do not mutate the original array** (e.g., avoid `.sort()` on the state directly)

---

## 🧪 Summary

- Use `.map()` to render lists in JSX
- Always include a unique `key` for each item
- Consider breaking out complex items into their own component
- List rendering is a core part of building dynamic UIs in React

---

Let me know if you want to include filtering, sorting, or pagination with list rendering!
