import { useContext, useState } from "react";
import Contador from "../Restaurante/Contador";
import X from "../Restaurante/X";
import Item from "./Item";
import Local from "./Local";
import Botao from "../Restaurante/Botao";
import { useBagProvider } from "@/providers/BagContext/Provider";
import SubPrice from "./SubPrice";

export default function Bag({ bagOpen, setBagOpen }) {
  const {
    products,
    addProduct,
    quantity,
    setQuantity,
    currentDish,
    modalPrice,
  } = useBagProvider();

  if (bagOpen) {
    return (
      <div className="fixed right-0 flex w-[475px] h-screen z-50 mt-20 shadow-lg overflow-auto bg-branco border-solid border-t-2 border-l border-borda">
        <div className="flex justify-center items-center w-full h-full bg-branco z-50 ">
          <div className="flex-col w-5/6 h-5/6 z-50">
            {products.length === 0 && (
              <p className="flex w-full h-full justify-center items-center">
                {`Sua sacola está vazia :'(`}
              </p>
            )}

            <Local local="Nome do Restaurante" />

            {products.map((product, index) => {
              return (
                <div key={index}>
                  {/* <h2>
                    <span>quantity</span>: {product.quantity}
                  </h2> */}
                  <Item product={product} />
                </div>
              );
            })}

            <SubPrice />

            <div className="fixed bottom-0 flex-col w-[400px] h-[100px] bg-branco space-y-3 z-10 text-cinza-h2">
              <div className="flex justify-between font-semibold ">
                <p className="text-lg ">Total</p>
                <span className="">R$ {modalPrice}</span>
              </div>
              <div className="flex-1 justify-center items-center mt-2">
                <Botao bigger label="Finalizar Pedido" />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setBagOpen(!bagOpen)}
          className="absolute top-1 letf p-1 z-50 "
        >
          <X />
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}
