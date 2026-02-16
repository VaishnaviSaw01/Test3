import { useState, useEffect } from "react";

const useTemperature = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [lastEdited, setLastEdited] = useState(null);

  // Sync when Celsius changes
  useEffect(() => {
    if (lastEdited === "celsius" && celsius !== "") {
      const f = (celsius * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  }, [celsius, lastEdited]);

  // Sync when Fahrenheit changes
  useEffect(() => {
    if (lastEdited === "fahrenheit" && fahrenheit !== "") {
      const c = ((fahrenheit - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  }, [fahrenheit, lastEdited]);

  const handleCelsius = (value) => {
    setLastEdited("celsius");
    setCelsius(value);
  };

  const handleFahrenheit = (value) => {
    setLastEdited("fahrenheit");
    setFahrenheit(value);
  };

  return {
    celsius,
    fahrenheit,
    handleCelsius,
    handleFahrenheit
  };
};

export default useTemperature;
