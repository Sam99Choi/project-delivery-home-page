import { useState } from "react";
import Contador from "../Restaurante/Contador";
import { useBagProvider } from "@/providers/BagContext/Provider";
import Image from "next/image";

export default function Item({title, price, product}) {
  const {
    removeProduct,
    products,
    increment,
    decrement,
    currentDish,
    modalPrice,
  } = useBagProvider();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="flex-cow w-100% h-100  py-4 space-y-3 bg-branco border-t border-cinza z-50">
        <div className="flex flex-1 justify-between items-center text-base font-semibold text-cinza-h2 mb-3">
          <h2>{currentDish.title}</h2>
          <span className="">R$ {modalPrice}</span>
        </div>
        <div className="flex gap-3">
          <Contador
            small
            quantity={product.quantity}
            increment={() => setQuantity(quantity + 1)}
            decrement={() => setQuantity(quantity - 1)}
          />
          <button
            onClick={() => removeProduct(currentDish)}
            className="text-cinza-100"
          >
            | Remover Item |
          </button>
        </div>
      </div>
    </div>
  );
}
