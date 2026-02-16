import { useState, useEffect } from "react";

const useSearch = (data, searchTerm) => {
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(result);
  }, [searchTerm, data]);

  return filtered;
};

export default useSearch;
