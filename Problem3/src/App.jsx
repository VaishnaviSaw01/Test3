import useTemperature from "./useTemperature";

function App() {
  const {
    celsius,
    fahrenheit,
    handleCelsius,
    handleFahrenheit
  } = useTemperature();

  return (
    <div style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h2>Temperature Converter</h2>

      <div>
        <label>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => handleCelsius(e.target.value)}
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => handleFahrenheit(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
