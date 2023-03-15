import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../context/AppContext";
import ProductCard from "./ProductCard";

export default function Products() {
  const { products, setShowCart } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center px-[5%]">
      <div className="w-full flex flex-col max-w-6xl items-center">
        <div className="flex w-full justify-end py-8">
          <button
            onClick={() => setShowCart(true)}
            className="bg-gray-100 flex justify-center items-center space-x-2 font-bold shadow-lg w-32 h-10 rounded-md text-black"
          >
            <AiOutlineShoppingCart /> <span>View Cart</span>
          </button>
        </div>

        <h1 className="text-3xl md:text-5xl text-center mt-12 mb-20 font-bold">
          Shopping App
        </h1>

        <div className="w-full grid grid-cols-2 pb-20 sm:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
