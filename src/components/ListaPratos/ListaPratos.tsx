import FreteGratis from "./TextFrete";
import Salada from "./Salada";
import Sanduiche from "./Sanduiche";
import BullguerLanche from "./BullguerLanche";
import Esfiha from "./Esfiha";
import Pudim from "./Pudim";
import Link from "next/link";

export default function ListaPratos() {
  return (
    <div className=" flex flex-col mt-5 w-full justify-center items-center /bg-vermelho md:mx-[100px] lg:mx-[180px]">
      <div className="flex w-full px-5 md:px-[100px] lg:px-[180px] ">
        <FreteGratis />
      </div>      
      <div className=" py-5 px-5 w-full gap-4 grid grid-cols-2  md sm:grid md sm:grid-cols-3 md:justify-between md:px-[100px] lg:flex lg:justify-between lg:px-[180px]">
        <Salada />
        <BullguerLanche />
        <Pudim />
        <Sanduiche />
        <Esfiha/>
      </div>
    </div>
  );
}
//   