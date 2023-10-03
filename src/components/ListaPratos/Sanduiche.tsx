import Image from "next/image";
import Link from "next/link";

export default function Sanduiche() {
  return (
    <Link href={"/restaurants/4"}>
      <div className="flex flex-col justify-center items-center text-center  rounded-xl hover:-translate-y-0.5 transition">
        <Image
          className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
          src="/../public/images-restaurant/donadeola/Pinacoteca.png"
          alt="Sanduiche Pinacoteca Dona Deola"
          width={220}
          height={100}
        />
        <p className="flex justify-center items-center p-2 font-medium">
          Pinacoteca Deola
        </p>
      </div>
    </Link>
  );
}
