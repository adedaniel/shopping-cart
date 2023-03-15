import { useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import { useState } from "react";
import { AppProvider } from "./context/AppContext";
import { CartItem, Product } from "./utils/types";
import Products from "./components/Products";
import { fetchProducts } from "./services/productService";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAllProducts = async () => {
    try {
      const { data } = await fetchProducts();
      setProducts(data);
    } catch (error) {
      alert("Unable to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <AppProvider
      value={{ products, setProducts, cart, setCart, showCart, setShowCart }}
    >
      {showCart && <Cart />}
      <div className="min-h-screen">
        <Products />
        {isLoading && <p className="text-center">Loading products...</p>}
      </div>
    </AppProvider>
  );
}

export default App;
