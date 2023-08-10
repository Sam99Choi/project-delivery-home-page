import Image from "next/image";
import Link from "next/link";

export default function Salada() {
  return (
    <Link href={"/montana"}>
      <div className="flex flex-col hover:-translate-y-0.5 transition">
        <Image
          className="rounded-xl w-[220px] h-[147px] shadow-cinza-200 shadow-md"
          src="/../public/images-restaurant/montana/Salada.png"
          alt="salada"
          width={219}
          height={100}
        />
        <p className="flex justify-center items-center pt-2 font-medium">
          Salada Montana
        </p>
      </div>
    </Link>
  );
}
