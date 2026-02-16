import useCharacterCounter from "./useCharacterCounter";


function App() {
  const { text, remaining, handleChange } = useCharacterCounter(50);

  return (
    <div style={{ padding: "20px",display: "flex", alignItems: "center", justifyContent: "center"}}>
      <h2>Live Character Counter</h2>

      <textarea
        value={text}
        onChange={handleChange}
        rows="4"
        cols="40"
      />

      <p>Characters: {text.length}</p>
      <p>Remaining: {remaining}</p>

      {remaining <= 10 && remaining > 0 && (
        <p style={{ color: "red" }}>
          ⚠ Only {remaining} characters left!
        </p>
      )}
    </div>
  );
}

export default App;