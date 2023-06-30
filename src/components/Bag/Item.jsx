import { useState } from "react";
import Contador from "../Restaurante/Contador";
import { useBagProvider } from "@/providers/BagContext/Provider";

export default function Item(title, price) {
  const { products } = useBagProvider();  
  const [quantity, setQuantity] = useState(0);
    
    return (
        <div>
            <div className="flex-cow w-100% h-100  py-4 space-y-3 bg-branco border-t border-cinza z-50">
                  <div className="flex justify-between text-base font-semibold text-cinza-h2 mb-6">
                    <h2>Nome do Prato</h2>
                    <span>R$ 35.00</span>
                  </div>
                  <div className="flex gap-3">
                    <Contador 
                      small
                      quantity={quantity} 
                      addCount = {() => setQuantity(quantity + 1)}
                      decCount = {() => setQuantity(quantity - 1)}/>
                    <button className="text-cinza-100">| Remover Item |</button>
                  </div>
                </div>
        </div>
    )
}