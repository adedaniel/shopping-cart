import { useContext } from "react";
import { CartItem } from "../utils/types";
import AppContext from "../context/AppContext";

interface CartItemProps {
  item: CartItem;
}

export default function EachItem({ item }: CartItemProps) {
  const { setCart } = useContext(AppContext);

  const incrementItemQuantity = () => {
    setCart((prev) =>
      prev.map((eachItem) =>
        eachItem.id === item.id
          ? { ...eachItem, quantity: eachItem.quantity++ }
          : eachItem
      )
    );
  };

  const decrementItemQuantity = () => {
    if (item.quantity > 1) {
      setCart((prev) =>
        prev.map((eachItem) =>
          eachItem.id === item.id
            ? { ...eachItem, quantity: eachItem.quantity-- }
            : eachItem
        )
      );
    } else {
      removeFromCart();
    }
  };

  const removeFromCart = () => {
    setCart((prev) => prev.filter(({ id }) => id !== item.id));
  };

  return (
    <div className="flex pt-4 space-x-4">
      <img
        className="w-20 h-full min-h-20 object-contain"
        src={item.product.image}
        alt="product"
      />
      <div className="">
        <p className="font-bold">{item.product.title}</p>
        <p>${item.product.price}</p>
        <div className="flex mt-2 items-center space-x-8">
          <button
            onClick={decrementItemQuantity}
            className="border w-8 h-8 font-bold"
          >
            —
          </button>
          <p className="text-lg">{item.quantity}</p>
          <button
            onClick={incrementItemQuantity}
            className="border w-8 h-8 font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
