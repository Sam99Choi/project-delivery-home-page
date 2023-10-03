import Image from "next/image";
import Link from "next/link";

export default function BullguerLanche() {
  return (
    <Link href={"/restaurants/2"}>
      <div className="flex flex-col justify-center items-center text-center /bg-vermelho rounded-xl hover:-translate-y-0.5 transition">
        <Image
          className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
          src="/../public/images-restaurant/bullguer/ChickenHotHoney.png"
          alt="Chicken hot honey"
          width={219}
          height={100}
        />
        <p className="flex justify-center items-center p-2 font-medium">
          Chicken Hot Honey
        </p>
      </div>
    </Link>
  );
}
