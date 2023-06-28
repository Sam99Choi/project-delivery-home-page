import Image from "next/image"
import Link from "next/link"

export default function DestaquePedidos() {
  return(
    <div className="flex items-center justify-center gap-4 w-full px-10 py-5">
      <Link href={""}>
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md"
          src="/../public/images/frango.avif"
          alt="frango"
          width={445}
          height={100}
          />
      </Link>
      <Link href={""}>
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md"
          src="/../public/images/hamburguer.avif"
          alt="sanduiche"
          width={452}
          height={100}
          />
      </Link>
      <Link href={""}>
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md"
          src="/../public/images/macarrao.jpg"
          alt="macarrao"
          width={226}
          height={100}
        />
      </Link>
    </div>
  )
}