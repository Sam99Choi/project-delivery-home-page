import Card from "./Card";
import Link from "next/link";

export default function Montana() {
  return (
    <Link href={"/montana"}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
        <Card 
            titleLocal={"Montana  • Shopping D"}
            typeDistance={"Brasileira • 1.1km"}
            minFreight={"20 - 30 min • Grátis"}
            imageURL={"/../public/images/montanagrill.jpg"}
        />
      </div>
    </div>
  </Link>
  )
}