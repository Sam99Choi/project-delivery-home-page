/* eslint-disable @next/next/link-passhref */
///* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import Frango from "./Frango";

const slides = [
  {
    id: 1,
    img: "./images/hamburguer.avif",
    link: "/mac",
  },
  {
    id: 2,
    img: "./images/sanduiche.avif",
    link: "/mac",
  },
  {
    id: 3,
    img: "./images/frango.avif",
    link: "/mac",
  },
  {
    id: 4,
    img: "./images/hamburguer.avif",
    link: "/mac",
  },
  {
    id: 5,
    img: "./images/sanduiche.avif",
    link: "/mac",
  },
  {
    id: 6,
    img: "./images/frango.avif",
    link: "/mac",
  },
  //"./images/hamburguer.avif",
  //"./images/frango.avif",
  //"./images/sanduiche.avif",
  //"./images/frango.avif",
  //"./images/hamburguer.avif",
];

export default function DestaquePedidos() {
  return (
    <div className="flex justify-center  w-full h-auto max-w-7xl max-h-[350px] rounded">
      <Carousel autoSlide={true}>
        {slides.map((slide) => (
          <img key={slide.id} src={slide.img} />
        ))}
      </Carousel>
    </div>
  );
}

/*
 "./images/hamburguer.avif",
  "./images/frango.avif",
  "./images/sanduiche.avif",
  "./images/frango.avif",
  "./images/hamburguer.avif",

export default function DestaquePedidos(props) {
  return (
    <div className="flex justify-center max-w-7xl  max-h-80 rounded">
      
      
      <Link className="flex" href={props.slides.href}>
        {
        props.slides.map((slide) =>(
          <Carousel
            autoSlide={true}  
            key={slide.id}
            src={slide.img}
          />         
        ))}        
      </Link>
    </div>
  );
}
  

*/

/*
   {
  return(
    <div className="flex items-center justify-center gap-4 w-full px-10 py-5 bg-preto">
      <Link href={"/"}>
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md"
          src="/../public/images/frango.avif"
          alt="frango"
          width={445}
          height={100}
          />
      </Link>
      <Link href={"/"}>
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md"
          src="/../public/images/hamburguer.avif"
          alt="sanduiche"
          width={452}
          height={100}
          />
      </Link>
      <Link href={"/"}>
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
*/
