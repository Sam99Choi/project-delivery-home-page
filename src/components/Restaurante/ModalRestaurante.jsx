/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import Botao from "./Botao";
import Contador from "./Contador";
import X from "./X";
import { useBagProvider } from "@/providers/BagContext/Provider";

export default function ModalRestaurante({ isOpen, setOpen, currentRestaurant}) {

  const [quantity, setQuantity] = useState(1);

  const { addProduct, modalPrice, setModalPrice, currentDish, dados, setDados} = useBagProvider();

  const guardarDados = () => {
    setDados(props.restaurante)
  } 

  useEffect(
    () => {
      setModalPrice((currentDish.price*quantity).toFixed(2))
    }, 
    [currentDish.price, quantity, setModalPrice]
  );

  useEffect(
    () => setQuantity(1),
    [isOpen]
  );


  const handleAddToCart = (currentDish, quantity, currentRestaurant) => {
    addProduct(currentDish, quantity, currentRestaurant);
    setOpen(!isOpen)
  }
 
  
  if (isOpen) {
    return (
      <div className="fixed inset-0 flex justify-center items-center shadow z-50 bg-modal">
        <div className=" fixed flex-columm justify-center items-top m-10 w-auto sm:h-[420px]  lg:h-auto xl:m-0 xl:w-[1200px] xl:h-[580px] bg-branco  rounded">
          <div className="flex justify-top /bg-vermelho h-full ">
            <div className="flex justify-center items-center h-auto lg:h-auto w-1/2 sm:h-[420px]   m-4">
                <img src={currentDish.imageURL} className=" flex-1 justify-center items-center p-2 /bg-gray h-auto /md:h-[350px] lg:w-[516px] lg:h-[516px]"/>
            </div>

            <div className="flex flex-col md:justify-start lg:justify-center xl:justify-start items-center w-1/2 /bg-cinza h-grow space-y-4 md:space-y-1 ">
              <div className="flex justify-center items-end w-full  sm:h-24 lg:h-auto xl:h-48">
                <h2 className="flex justify-center items-center w-full h-4 px-10 text-justify font-medium text-xl text-cinza-h2">
                  {currentDish.title}
                </h2>
              </div>

              <div className="flex-col justify-center items-center  ">
                <div className="flex justify-center items-center w-full pt-2.5 px-10  ">
                  <p className="flex justify-center items-center w-full h-auto sm:text-sm lg:text-base font-light text-cinza-200 text-justify">
                    {currentDish.content}
                  </p>
                </div>
                <div className="flex justify-center items-center w-full px-10 my-3">
                  <p className="flex justify-start items-center w-full h-auto text-cinza-h2 text-xs font-medium">
                    <span>R$ {currentDish.price} </span> 
                  </p>
                </div>
              </div>

                <div className="flex justify-center items-center w-full /bg-vermelho px-[39px]">
                    <div className="flex-columm justify-center items-center w-full  ">
                        <div className="flex-columm justify-center items-center w-full mb-3 md:py-1 lg:py-3 px-5 border-solid border-2 border-gray">
                        <div className="flex justify-start items-center">
                            <h3 className="flex justify-start items-center h-4 w-full text-cinza-h2 text-xs font-medium">{currentRestaurant.title}</h3>
                        </div>
                        <div className="flex justify-center items-center w-full h-[1.6px] my-1 lg:my-2 text-gray ">

                        </div>
                        <div className="flex items-center h-4 w-full text-xs text-cinza-h2 font-normal">
                            <p>{currentRestaurant.time}</p>
                            <svg className="p-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#717171" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path></svg> 
                            <p>R$ {currentRestaurant.delivery}</p>
                        </div>
                        </div>
                    </div>
                </div>
              
                <footer className="  sm:absolute sm:bottom-2 md:right-2 sm:w   flex  items-center h-20 p-5 pr-0 gap-6 mr-8 border-solid border-t-2  border-gray">
                  <Contador 
                    quantity={quantity} 
                    increment={() => setQuantity(quantity + 1)}
                    decrement={() => setQuantity(quantity - 1)}
                  />
                  <button onClick={() => handleAddToCart(currentDish, quantity, currentRestaurant)}>
                    <Botao label='Adicionar' currency="R$" priceModal={modalPrice} />
                  </button>
                  
          
              </footer>
            </div>
          </div>
            
          <button
            onClick={() => setOpen(!isOpen)}
            className="absolute top-2 right-2 p-1 "
          >
            <X />
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
