import Image from "next/image";
interface CardProps {
  imageURL: string;
  titleLocal: string;
  typeDistance: string;
  minFreight: string;
}

export default function Card(props: CardProps) {
  const { titleLocal, typeDistance, minFreight, imageURL } = props;

  return (
    <div className="flex gap-3 hover:shadow-lg w-96 p-5 rounded-lg">
      <div className="flex">
        <Image
          src={imageURL}
          alt={""}
          width={120}
          height={120}
          className="rounded-xl max-w-md max-h-28"
        />
      </div>
      <div className="flex flex-col justify-center gap-0.5">
        <h4 className="font-semibold text-preto">{titleLocal}</h4>
        <p className="text-sm text-cinza-200">{typeDistance}</p>
        <p className="text-cinza-200 text-sm">{minFreight}</p>
      </div>
    </div>
  );
}
