import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  // console.log(showProduct);
  return (
    <div className="App">
      <Header
        onSetCategory={setSelectedCategory}
        setSelectedProduct={setSelectedProduct}
        showProduct={showProduct}
        setShowProduct={setShowProduct}
      />
      <ProductCard
        category={selectedCategory}
        selectedProduct={selectedProduct}
        showProduct={showProduct}
      />
    </div>
  );
}

export default App;
