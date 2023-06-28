import Card from "./Card";
import Link from "next/link";

export default function McDonalds() {
  return (
    <Link href={"/mac"}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
        <Card 
            titleLocal={"McDonalds's  • Av. Paulista"}
            typeDistance={"Lanche • 3.5km"}
            minFreight={"30 - 40 min • R$10,99"}
            imageURL={"/../public/images/mc.png"}
        />
      </div>
    </div>
  </Link>
  )
}