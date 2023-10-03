import MaisPedidos from "./TextPedidos";
import DestaquePedidos from "./DestaquePedidos";

export default function HomeImages() {
  return (
    <div className=" flex flex-col justify-between items-center pt-20 md:px-[100px] lg:px-[179px] /mx-[180px] w-full">
      <MaisPedidos />
      <DestaquePedidos/>
    </div>
  );
}
