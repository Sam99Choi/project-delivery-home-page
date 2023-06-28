import Image from "next/image";
import Link from "next/link";

export default function RisotoOriental() {
  return (
    <Link href={""}>
      <div className="flex flex-col rounded-xl hover:-translate-y-0.5 transition">
        <Image
          className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
          src="/../public/images/bibimbap.avif"
          alt="risoto oriental"
          width={220}
          height={100}
        />
        <p className="flex justify-center items-center p-2 font-medium">
          Risoto Oriental
        </p>
      </div>
    </Link>
  );
}
