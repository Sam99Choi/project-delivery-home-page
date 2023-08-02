import { useBagProvider } from "@/providers/BagContext/Provider";

export default function Local() {
  const { atualizarDados } = useBagProvider()
  return (
    <div className="flex items-start w-[400px]  h-10 mb-3 ">
      <h1 className="text-cinza-h2 text-lg font-semibold">
       Restaurante: {atualizarDados}
      </h1>
    </div>
  );
}
