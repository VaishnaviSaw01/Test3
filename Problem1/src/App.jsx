import { useState } from "react";
import useSearch from "./useSearch";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 },
  { id: 4, name: "Keyboard", price: 1000 },
  { id: 5, name: "Mouse", price: 500 }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useSearch(productsData, searchTerm);

  return (
    <div style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p>Showing {filteredProducts.length} of {productsData.length} products</p>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
        </div>
      ))}
    </div>
  );
}

export default App;
