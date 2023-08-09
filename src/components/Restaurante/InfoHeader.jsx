/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function InfoHeader(props) {
  const { title, time, delivery, imageURL } = props;

  return (
    <div className="flex /flex-columm justify-center items-center px-2 w-full mt-4 md:mt-24 lg:mt-[10px] mb-5">
      <div className="flex flex-col sm:flex-row h-auto items-center justify-between w-full mx-4 sm:h-32 md:w-[716px] lg:w-[1310px]">
        <div className="flex /bg-cinza flex-1 flex-col sm:flex-row items-center justify-center">
          <img
            src={imageURL}
            alt="logo"
            className="flex items-center mr-5 rounded-full w-[75px] h-[75px]"
          />

          <div className="flex flex-grow /lg:w-[800px] /bg-cinza ">
            <h1 className="font-semibold text-center text-2xl sm:text-4xl text-cinza-400">{title}</h1>
            <h2 className=" flex items-center gap-2 font-medium text-cinza-400"></h2>
          </div>
        </div>

        <div className="/bg-vermelho flex h-auto w-auto justify-between mt-3 sm:mt-0 sm:flex-col sm:justify-end   /items-end gap-2 text-sm font-medium text-cinza-200">
          <div className="flex justify-end gap-1 min-w-max ">
            <span className=" /bg-vermelho hidden ">
              Tempo de entrega:
            </span>{" "}
            {time} 
          </div>
          <div>
            <h2 className="flex justify-end font-medium min-w-max text-cinza-200">
              <span></span> Frete: R$ {delivery}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
