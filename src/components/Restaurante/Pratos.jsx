import Image from "next/image";
import { useState } from "react";

export default function Pratos(props) {
  const {title, content, price, imageURL, prato, setCurrentDish, setOpen } = props;
  
  return (
    <div className="flex justify-between w-100%"> 
      <button 
        className="flex p-4 h-52 w-[640px] gap-4 bg-branco border-solid border border-borda hover:border-cinza transition-0.2s shadow rounded "
        onClick={() => {
          setCurrentDish(prato);
          setOpen(!open);
        }}
      >
        <div className="flex-columm w-[411px] h-[154px]">
          <div className="flex-1 h-full">
            <h3 className="flex flex-grow h-auto justify-start items-center mb-4 text-left text-lg text-cinza-400 font-medium bg-branco">
                {title}
            </h3>
            <p className="flex w-full h-10 mb-3 text-left text-sm text-cinza-200 font-light">
                {content} 
            </p>
          </div>
          
          <span className="flex justify- w-full text-base  text-cinza-400">
            A partir de R$ {price}
          </span>
        </div>
        
        
        <div className="flex justify-center items-center h-[174px] w-[180px] ">
        <Image
          className="flex justify-center items-center"
          src={imageURL}
          alt={""}
          width={180}
          height={174}
        />
        </div>
      </button>
    </div>
  );
}

