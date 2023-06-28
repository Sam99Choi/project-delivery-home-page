import Card from "./Card";
import Link from "next/link";

export default function Bullguer() {
  return (
    <Link href={"/bullguer"}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
          <Card
            titleLocal={"Bullguer • Barra Funda"}
            typeDistance={"Lanche • 0.8km"}
            minFreight={"20 - 30 min • Grátis"}
            imageURL={"/../public/images/bullguer.png"}
          />
        </div>
      </div>
    </Link>
  );
}
