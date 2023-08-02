import { useBagProvider } from "@/providers/BagContext/Provider";

export default function Botao({
  priceModal,
  label,
  currency,
  bigger,
}) {
  const { addProduct, products } = useBagProvider();

  return (
    <div className="flex ">
      <button
        className={`${bigger ? "w-full" : "w-60"} h-12 flex items-center ${
          bigger ? "justify-center" : "justify-between"
        }  bg-vermelho px-5  text-branco font-medium rounded-md hover:bg-opacity-80`}
      >
        {label}
        <span>
          {currency}
          <span>{priceModal}</span>
        </span>
      </button>
    </div>
    
  );
}
