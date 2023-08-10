///* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { useState } from "react";
import Frango from "./Frango";
import { link } from "fs";

  const slides = [
    "./images/hamburguer.avif",
    "./images/frango.avif",
    "./images/sanduiche.avif",
    "./images/frango.avif",
  ]



export default function DestaquePedidos() {
  return (
    <div className="flex justify-center max-w-7xl  max-h-80 rounded">
      <Carousel autoSlide={true}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} />
        ))}
      </Carousel>
    </div>
  );
}

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
