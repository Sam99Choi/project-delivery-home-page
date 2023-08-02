import { useContext, useState } from "react";
import Contador from "../Restaurante/Contador";
import X from "../Restaurante/X";
import Item from "./Item";
import Local from "./Local";
import Botao from "../Restaurante/Botao";
import ModalFinal from "./ModalFinal";
import { useBagProvider } from "@/providers/BagContext/Provider";
import SubPrice from "./SubPrice";

export default function Bag({ bagOpen, setBagOpen,  }) {
  const [modalOpen, setModalOpen] = useState(false)
  
  const {
    products,
    addProduct,
    quantity,
    setQuantity,
    currentDish,
    modalPrice,
    subPrice,
    currentRestaurant,
  } = useBagProvider();

  if (bagOpen) {
    return (
      <div className="fixed right-0 flex w-[475px] h-full z-50 mt-20 shadow-lg /overflow-auto bg-branco border-solid border-t-2 border-l border-borda ">
        <div className="flex justify-center items-center w-full h-full bg-branco z-50 ">
          <div className="flex flex-col items-center justufy-center w-full h-5/6 z-50">
            {products.length === 0 && (
              <p className="flex w-full h-full justify-center items-center">
                {`Sua sacola está vazia :'(`}
              </p>
            )}
            {products.length > 0 && <Local/>}

            <div className="flex flex-col overflow-auto w-full pl-[38px] pr-10 max-h-[327px] ">
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
            </div>                  

            {products.length > 0 && (
              <div>
                <SubPrice />
              <div className="fixed bottom-0 flex-col  w-[400px] h-[100px] bg-branco space-y-3 z-10 text-cinza-h2">
                <div className="flex justify-between font-semibold ">
                  <p className="text-lg ">Total</p>
                  <span className="">R$ {subPrice}</span>
                </div>
                <button onClick={() => (setModalOpen(!modalOpen))} className="flex-1 justify-center items-center w-full mt-2">
                  <Botao 
                    bigger 
                    label="Finalizar Pedido" />
                </button>
              </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => setBagOpen(!bagOpen)}
          className="absolute top-1 letf p-1 z-50 "
        >
          <X />
        </button>

        <ModalFinal 
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
