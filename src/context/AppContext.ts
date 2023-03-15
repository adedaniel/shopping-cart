import { createContext } from "react";
import { CartItem, Product } from "../utils/types";

const AppContext = createContext<{
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  showCart: boolean;
  setShowCart: (value: boolean) => void;
}>({
  products: [],
  setProducts: () => {},
  cart: [],
  setCart: () => {},
  showCart: false,
  setShowCart: (value: boolean) => {},
});

export const AppProvider = AppContext.Provider;

export default AppContext;
