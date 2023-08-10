import MaisPedidos from "./TextPedidos";
import DestaquePedidos from "./DestaquePedidos";

export default function HomeImages() {
  return (
    <div className="flex flex-col justify-between items-center pt-20 px-44 mx-[180px] w-full">
      <MaisPedidos />
      <DestaquePedidos/>
    </div>
  );
}
