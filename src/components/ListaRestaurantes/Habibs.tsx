import Card from "./Card";
import Link from "next/link";

export default function Habibs() {
  return (
    <Link href={"/habibs"}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
        <Card 
            titleLocal={"Habib's  • Bom Retiro"}
            typeDistance={"Esfiha • 0.4km"}
            minFreight={"15 - 25 min • Grátis"}
            imageURL={"/../public/images/habibs.avif"}
        />
      </div>
    </div>
  </Link>
  )
}
