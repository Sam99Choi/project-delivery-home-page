import { useBagProvider } from "@/providers/BagContext/Provider";

export default function SubPrice() {
    const {subPrice, dados} = useBagProvider();    

  return (
    <div className=" flex flex-col w-full sm:w-[400px] /px-5 py-3 /sm:px-0 text-cinza-200 border-t border-cinza ">
      <div className="flex justify-between ">
        <p className="text-sm ">Subtotal</p>
        <span className="text-base text-cinza-h2">R$ {subPrice}</span>
      </div>
      <div className="flex justify-between">
        <p className="text-sm">Taxa de Entrega</p>
        <span className="text-base text-cinza-h2">R$ 00.00{dados}</span>
      </div>
    </div>
  );
}
