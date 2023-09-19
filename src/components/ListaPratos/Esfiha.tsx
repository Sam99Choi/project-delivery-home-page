import Image from "next/image";
import Link from "next/link";

export default function Esfiha() {
  return (
    <Link href={"/habibs"}>
      <div className="flex flex-col text-center justifyy-center items-center rounded-xl hover:-translate-y-0.5 transition">
        <Image
          className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
          src="/../public/images-restaurant/habibs/carnemussarela.png"
          alt="Esfiha"
          width={220}
          height={100}
        />
        <p className="flex justify-center items-center p-2 font-medium">
          Esfiha
        </p>
      </div>
    </Link>
  );
}
//"/../public/images/esfiha.jpg"