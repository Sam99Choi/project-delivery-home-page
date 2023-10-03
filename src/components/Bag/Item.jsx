import Contador from "../Restaurante/Contador";
import { useBagProvider } from "@/providers/BagContext/Provider";
import Image from "next/image";

export default function Item({title, price, product,}) {
  const {
    removeProduct,
    currentDish,
    increment,
    decrement,
  } = useBagProvider();

  return (
    <div>
      <div className=" w-full  py-4 space-y-3 bg-branco border-t border-cinza z-50  " >
        <div className="flex flex-1 justify-between items-center text-base font-semibold text-cinza-h2 mb-3">
          <h2 className="max-w-[300px]">{product.attributes.title}</h2>
          <span className="">R$ {product.totalPrice}</span>
        </div>
        <div className="flex gap-3">
          <Contador
            small
            quantity={product.quantity}
            increment={() => increment(product)}
            decrement={() => decrement(product)}
          />
          <button
            onClick={() => removeProduct(product)}
            className="text-cinza-100"
          >
            | Remover Item |
          </button>
        </div>
      </div>
    </div>
  );
}
