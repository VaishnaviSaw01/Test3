import { useState, useEffect } from "react";

const useCharacterCounter = (limit = 50) => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(limit);

  useEffect(() => {
    setRemaining(limit - text.length);
  }, [text, limit]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Prevent typing beyond 50 characters
    if (value.length <= limit) {
      setText(value);
    }
  };

  return { text, remaining, handleChange };
};

export default useCharacterCounter;
