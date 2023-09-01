import FreteGratis from "./TextFrete";
import Salada from "./Salada";
import Sanduiche from "./Sanduiche";
import BullguerLanche from "./BullguerLanche";
import Esfiha from "./Esfiha";
import Pudim from "./Pudim";
import Link from "next/link";

export default function ListaPratos() {
  return (
    <div className="flex flex-col mt-5 md:mx-[100px]  lg:mx-[180px]">
      <div className="pl-5 md:mx-0">
        <FreteGratis />
      </div>      
      <div className="flex py-5 w-ful gap-4">
        <Salada />
        <BullguerLanche />
        <Pudim />
        <Sanduiche />
        <Esfiha />
      </div>
    </div>
  );
}
