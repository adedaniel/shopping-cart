import { AiOutlineStar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { Product } from "../utils/types";
import { useContext } from "react";
import AppContext from "../context/AppContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cart, setCart, setShowCart } = useContext(AppContext);

  const addToCart = () => {
    if (cart.find(({ id }) => id === product.id)) {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prev) => [...prev, { id: product.id, product, quantity: 1 }]);
    }

    setShowCart(true);
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="space-y-1">
        <img
          className="rounded-lg border w-full object-contain h-60"
          src={product.image}
          alt={product.title}
        />
        <p className="font-bold">{product.title}</p>
        <p className="text-sm truncateText">{product.description}</p>

        <div className="flex justify-between items-center space-x-1 text-xs md:text-sm text-gray-500">
          <p>{product.category}</p>
          <GoPrimitiveDot />
          <div className="flex items-center space-x-1">
            <AiOutlineStar />
            <span> {product.rating.rate}</span>
          </div>
          <GoPrimitiveDot />
          <p>{product.rating.count} reviews</p>
        </div>
      </div>

      <button
        onClick={addToCart}
        className="w-full shadow-sm h-10 border rounded-md mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
}
