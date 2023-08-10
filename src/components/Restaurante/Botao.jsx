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
        className={`${bigger ? "w-full" : "w-60 sm:w-40 lg:w-60"} h-12 flex items-center ${
          bigger ? "justify-center" : "justify-between"
        }  bg-vermelho px-5 sm:px-2 lg:px-5 /gap-1 text-branco font-medium rounded-md hover:bg-opacity-80`}
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
//