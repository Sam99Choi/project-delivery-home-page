import FreteGratis from "./TextFrete";
import Salada from "./Salada";
import RisotoOriental from "./RisotoOriental";
import Sanduiche from "./Sanduiche";
import BullguerLanche from "./BullguerLanche";
import Esfiha from "./Esfiha";

export default function ListaPratos() {
  return (
    <div className="mt-5 mx-[180px]">
      <FreteGratis />
      <div className="py-5 flex w-ful gap-4">
        <Salada />
        <BullguerLanche />
        <RisotoOriental />
        <Sanduiche />
        <Esfiha />
    </div>
    </div>
  );
}
