import Card from "./Card";
import Link from "next/link";

export default function ChinaInBox() {
  return (
    <Link href={"/chinainbox"}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
          <Card 
            titleLocal={"China in Box • Santana"}
            typeDistance={"Chinesa • 1.2km"}
            minFreight={"25 - 35 min • Grátis"} 
            imageURL={"/../public/images/chinainbox.avif"}            
          />
        </div>
      </div>
    </Link>
  )
}