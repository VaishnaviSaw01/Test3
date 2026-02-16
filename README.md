# React Hook Practice Projects

This repository contains 4 React mini-projects built to practice:

- useState
- useEffect
- useRef
- Custom Hooks
- Controlled Inputs
- Derived State
- Basic UI structuring

Each problem is implemented in a separate folder.

---

## 📁 Project Structure

React-Hook-Practice/
│
├── Problem1-ProductSearch/
├── Problem2-CharacterCounter/
├── Problem3-TemperatureConverter/
├── Problem4-FocusTracker/


Each folder is an independent React app.

---

# Problem 1: Product Search with Custom Hook

## 🎯 Objective

Build a searchable product directory that:

- Displays a list of products
- Filters products by name
- Shows total filtered count
- Uses a custom hook for search logic

## 🛠 Concepts Used

- useState
- useEffect (inside custom hook)
- Filtering arrays
- Controlled input

## 📂 Files

Problem1/
├── App.jsx
├── useSearch.js
└── style.css


---

# Problem 2: Live Character Counter

## 🎯 Objective

Build a message input that:

- Shows total characters typed
- Shows remaining characters (limit = 50)
- Displays warning when remaining ≤ 10
- Prevents typing beyond 50 characters

## 🛠 Concepts Used

- useState
- useEffect inside custom hook
- Derived state
- Controlled textarea

## 📂 Files

Problem2/
├── App.jsx
├── useCharacterCounter.js
└── style.css


---

# Problem 3: Temperature Converter

## 🎯 Objective

Build a temperature converter that:

- Has Celsius and Fahrenheit inputs
- Automatically syncs values
- Avoids infinite loops
- Uses custom hook with useEffect

## 🛠 Concepts Used

- useState
- useEffect
- Synchronizing related state
- Handling derived calculations safely

## 📂 Files

Problem3/
├── App.jsx
├── useTemperature.js
└── style.css


---

# Problem 4: Focus Tracker & Message History

## 🎯 Objective

Build an input tracker that:

- Counts focus events
- Stores submitted messages
- Keeps history using useRef (without re-render)
- Focuses input programmatically

## 🛠 Concepts Used

- useState
- useRef
- useEffect
- DOM manipulation
- Difference between state vs ref

## 📂 Files

Problem4/
├── App.jsx
└── style.css


---

# 🚀 How to Run

For each folder:

1. Install dependencies

npm install


2. Start development server

npm run dev


---

# 🧠 Learning Outcomes

These projects demonstrate:

- Writing reusable custom hooks
- Managing derived state correctly
- Avoiding unnecessary re-renders
- Handling controlled inputs
- Understanding React rendering behavior

---

# 📌 Author

Built as React Hooks practice exercises.
