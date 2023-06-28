import Card from "./Card";
import Link from "next/link";

export default function DonaDeola() {
  return (
    <Link href={"/donadeola"}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
          <Card
            titleLocal="Dona Deôla • Higienópolis"
            typeDistance="Padaria • 0.9km"
            minFreight="15 - 20 min • Grátis"
            imageURL={"/../public/images/donadeola.png"}
          />
        </div>
      </div>
    </Link>
  );
}
