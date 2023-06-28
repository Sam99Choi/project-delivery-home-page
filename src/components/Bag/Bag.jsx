import { useContext, useState } from "react";
import Contador from "../Restaurante/Contador";
import X from "../Restaurante/X";
import Botao from "../Restaurante/Botao";
import Item from "./Item";
import Local from "./Local";
import { BagContext, useBagProvider } from "@/providers/BagContext/Provider";

export default function Bag({ bagOpen, setBagOpen }) {
  const { products } = useContext(BagContext);

  const [product, setProduct] = useState(true);
  const [quantity, setQuantity] = useState(1);
  //será que preciso fazer um estado para acrescentar mais de um item?

  if (bagOpen) {
    return (
      <div className="fixed right-0 flex w-[475px] h-screen z-50 mt-20 shadow-lg overflow-auto">
        <div className="flex justify-center items-center w-full h-full bg-branco z-50 ">
          <div className="flex-col w-5/6 h-5/6 z-50">
            {!product && (
              <p className="flex w-full h-full justify-center items-center">
                {`Sua sacola está vazia :'(`}
              </p>
            )}
            {product && (
              <>
                <Local local="Nome do restaurante" />

                {products.map((product, index) => {
                  return <Item key={index} products={product} />;
                })}

                <div className="flex-col py-3 text-cinza-200 border-t border-cinza ">
                  <div className="flex justify-between ">
                    <p className="text-sm ">Subtotal</p>
                    <span className="text-base text-cinza-h2">R$ 35.00</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm">Taxa de Entrega</p>
                    <span className="text-base text-cinza-h2">R$ 00.00</span>
                  </div>
                </div>

                <div className=" fixed bottom-0 flex-col w-[400px] h-[100px] bg-branco space-y-3 z-10 text-cinza-h2">
                  <div className="flex justify-between font-semibold ">
                    <p className="text-lg ">Total</p>
                    <span className="">R$35.00</span>
                  </div>
                  <div className="flex-1 justify-center items-center mt-2">
                    <Botao bigger label="Finalizar Pedido" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => setBagOpen(!bagOpen)}
          className="absolute top-1 letf p-1 "
        >
          <X />
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}
