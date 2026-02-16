import { useState, useRef, useEffect } from "react";

function App() {
  // State for controlled input
  const [message, setMessage] = useState("");

  // State for storing submitted messages (causes re-render)
  const [messages, setMessages] = useState([]);

  // State for focus count
  const [focusCount, setFocusCount] = useState(0);

  // Ref for input focus
  const inputRef = useRef(null);

  // Ref for storing history without re-render
  const historyRef = useRef([]);

  // Count focus
  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
  };

  // Submit message
  const handleSubmit = () => {
    if (!message.trim()) return;

    // Update state (re-renders)
    setMessages((prev) => [...prev, message]);

    // Update ref (NO re-render)
    historyRef.current.push(message);

    setMessage("");
  };

  // Programmatically focus input
  const handleFocusButton = () => {
    inputRef.current.focus();
  };

  // Side effect example
  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  return (
      <div style={{ padding: "20px", paddingLeft: "500px"}}>
      <h2>Focus Tracker & Message History</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={handleFocus}
      />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleFocusButton}>Focus Input</button>

      <p>Focus count: {focusCount}</p>

      <h4>Messages:</h4>
      {messages.map((msg, index) => (
        <div key={index}>- {msg}</div>
      ))}

      <h4>History in Ref (no re-render):</h4>
      <p>{historyRef.current.join(", ")}</p>
    </div>
  );
}

export default App;
