import { useContext, useMemo } from "react";
import { MdClose } from "react-icons/md";
import AppContext from "../context/AppContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, setCart, setShowCart } = useContext(AppContext);

  const handleClearCart = () => {
    setCart([]);
  };

  const total = useMemo(() => {
    return cart
      .reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)
      .toFixed(2);
  }, [cart]);

  return (
    <div className="fixed w-full border-l overflow-y-auto shadow-xl md:max-w-sm h-screen py-4 px-5 right-0 z-10 bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cart</h1>

        <MdClose
          onClick={() => setShowCart(false)}
          color="black"
          className="text-3xl cursor-pointer"
        />
      </div>

      {!cart.length && <p className="text-center mt-10">No items in cart</p>}
      {!!cart.length && (
        <div>
          <div className="divide-y-2 mt-4 space-y-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex justify-between mt-10 mb-5 items-center">
            <p className="font-bold text-lg">Total:</p>
            <p className="font-bold text-2xl">${total}</p>
          </div>

          <button
            onClick={handleClearCart}
            className="w-full shadow-sm h-10 border rounded-md mt-3"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
