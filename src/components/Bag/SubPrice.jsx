import { useBagProvider } from "@/providers/BagContext/Provider";

export default function SubPrice() {
    const {subPrice, dados} = useBagProvider();    

  return (
    <div className="flex-col w-[400px] py-3 text-cinza-200 border-t border-cinza ">
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
