import { useBagProvider } from "@/providers/BagContext/Provider";

export default function Local() {
  const { atualizarDados } = useBagProvider()
  return (
    <div className="flex items-start w-full h-10 mb-3 sm:w-[400px] /px-5 /sm:px-0 ">
      <h1 className="text-cinza-h2 text-lg font-semibold">
       Produtos: {atualizarDados}
      </h1>
    </div>
  );
}
