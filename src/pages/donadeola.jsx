import Header from "@/components/header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Modal from "@/components/Restaurante/ModalRestaurante";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";
import { useState } from "react";

const pratos = [
  {
    key: 1,
    title: "Pão Delícia",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "35,90",
    imageURL: "/images-restaurant/donadeola/PaoDelicia.png",
  },
  {
    key: 2,
    title: "Mini pão de queijo (10 unidades)",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "26,90",
    imageURL: "/images-restaurant/donadeola/PaoDeQueijo.png",
  },
  {
    key: 3,
    title: "Pão Francês na chapa",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/PaoFrances.png",
  },
  {
    key: 4,
    title: "Empada de frango",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/EmpadaDeFrango.png",
  },
  {
    key: 5,
    title: "Pão Francês (5 unidades)",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/PaoFrances5.png",
  },
  {
    key: 6,
    title: "Mini Pão Delícia (5 unidades)",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/MiniPao.png",
  },
  {
    key: 7,
    title: "Copan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/Copan.png",
  },
  {
    key: 8,
    title: "Pinacoteca",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/Pinacoteca.png",
  },
  {
    key: 9,
    title: "Mini Pudim de Doce de Leite",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/MiniPudim.png",
  },
  {
    key: 10,
    title: "Café Expresso",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price: "49,99",
    imageURL: "/images-restaurant/donadeola/CafeExpresso.png",
  },
];

export default function Deola() {
  const [open, setOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState({});

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner imageURL="images-restaurant/donadeola/BannerDeola.png" />
        <InfoHeader
          imageURL="images-restaurant/donadeola/DonaDeola.png"
          title="Dona Deôla - Higienopolis"
          time="15 - 20 min"
          delivery="Grátis"
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap  justify-center gap-6 mb-10">
        {
            pratos.length > 0 
            ? pratos.map((prato) => (
              <Pratos
                key={prato.key}
                prato={prato}
                title={prato.title}
                content={prato.content}
                price={prato.price}
                imageURL={prato.imageURL}
                setCurrentDish={setCurrentDish}
                setOpen={() => setOpen(true)}
              />
            ))
           : <p>Não há pratos!</p>
          }
        </div>
      </div>

      <Modal isOpen={open} setOpen={setOpen} currentDish={currentDish} />
    </div>
  );
}
