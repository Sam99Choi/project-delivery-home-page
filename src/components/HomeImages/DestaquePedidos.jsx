/* eslint-disable @next/next/link-passhref */
///* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import Frango from "./Frango";
import { useRouter } from 'next/navigation';

const slides = [
  
  //"./images/hamburguer.avif",
  //"./images/frango.avif",
  //"./images/sanduiche.avif",
  //"./images/frango.avif",
  //"./images/hamburguer.avif",
  {
    id: 1,
    img: "/./images/hamburguer.avif",
    url: '/mac'
  },
  {
    id: 2,
    img: "/./images/sanduiche.avif",
    url: '/mac'
  },
  {
    id: 3,
    img: "/./images/frango.avif",
    url: '/mac'
  },
  {
    id: 4,
    img: "/./images/hamburguer.avif",
    url: '/mac'
  },
  {
    id: 5,
    img: "/./images/sanduiche.avif",
    url: '/mac'
  },
  {
    id: 6,
    img: "/./images/frango.avif",
    url: "/mac"
  },
  {
    id: 7,
    img: "/./images/hamburguer.avif",
    url: '/mac'
  },

];

export default function DestaquePedidos() {
  const router = useRouter();
  
  return (
    <div  className="flex justify-center w-full h-auto px-5 md:px-0 md:rounded max-h-[300px] md:max-w-7xl ">
      <Carousel autoSlide={true}>
        {slides.map((slide) => (
           <Image href={slide.url} key={slide.id} src={slide.img}  width={430} height={300} />  
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
