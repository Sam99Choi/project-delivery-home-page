import { useBagProvider } from "@/providers/BagContext/Provider";
import Link from "next/link";

export default function ModalFinal({ modalOpen, setModalOpen }) {
  const { setProducts, open, setOpen } = useBagProvider();

  const pedidoAceito = () => {
    setModalOpen(!modalOpen), setProducts([]), setOpen(!open);
  };

  const pedidoNaoFinalizado = () => {
    setModalOpen(!modalOpen);
  };

  if (modalOpen) {
    return (
      <div className="fixed inset-0 flex justify-center items-center shadow z-50 bg-modal ">
        <div className=" fixed flex flex-col justify-center items-center space-y-4 w-[300px] h-[170px] bg-branco rounded">
          <h1 className="flex justify-center items-center w-full mb-4 text-lg font-medium">
            Deseja finalizar o pedido?
          </h1>
          <div className="flex justify-center w-full gap-5 text-branco ">
            <Link href="/">
              <button
                onClick={() => pedidoAceito()}
                className="bg-vermelho px-5 py-3 rounded-md hover:bg-opacity-80"
              >
                Sim
              </button>
            </Link>
            <button
              onClick={() => pedidoNaoFinalizado()}
              className="bg-vermelho px-5 py-3 rounded-md hover:bg-opacity-80"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
