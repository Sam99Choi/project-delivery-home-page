import Header from "@/components/header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import ModalRestaurante from "@/components/Restaurante/ModalRestaurante";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";
import { useBagProvider } from "@/providers/BagContext/Provider";
import { useState } from "react";

export const getServerSideProps = async () => {
  const pratos = [
    {
      id: 1,
      title: "Pão Delícia",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "35.90",
      imageURL: "/images-restaurant/donadeola/PaoDelicia.png",
    },
    {
      id: 2,
      title: "Mini pão de queijo (10 unidades)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "26.90",
      imageURL: "/images-restaurant/donadeola/PaoDeQueijo.png",
    },
    {
      id: 3,
      title: "Pão Francês na chapa",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/PaoFrances.png",
    },
    {
      id: 4,
      title: "Empada de frango",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/EmpadaDeFrango.png",
    },
    {
      id: 5,
      title: "Pão Francês (5 unidades)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/PaoFrances5.png",
    },
    {
      id: 6,
      title: "Mini Pão Delícia (5 unidades)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/MiniPao.png",
    },
    {
      id: 7,
      title: "Copan",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/Copan.png",
    },
    {
      id: 8,
      title: "Pinacoteca",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/Pinacoteca.png",
    },
    {
      id: 9,
      title: "Mini Pudim de Doce de Leite",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/MiniPudim.png",
    },
    {
      id: 10,
      title: "Café Expresso",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/donadeola/CafeExpresso.png",
    },
  ];

  const restaurante = {
    title:"Dona Deôla - Higienopolis",
    time:"15 - 20 min",
    delivery:"00.00",
  };

  return {
    props: {
      pratos,
      restaurante,
    },
  };
};

export default function ChinaInBox(props) {
  const [open, setOpen] = useState(false);
  const {currentDish, setCurrentDish} = useBagProvider()

  return (
    <div className="">
      <div className="min-w-[500px] xl:w-full"> 
        <Header />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <Banner 
          imageURL="images-restaurant/donadeola/BannerDeola.png"
        />
        <InfoHeader 
         imageURL="images-restaurant/donadeola/DonaDeola.png"
         title={props.restaurante.title} 
         time={props.restaurante.time} 
         delivery={props.restaurante.delivery} 
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap justify-center items-center w-full gap-2 lg:gap-6 mb-1">
        {
          props.pratos.length > 0 
          ? props.pratos.map((prato) => (
            <Pratos
              key={prato.id}
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

      <ModalRestaurante 
        isOpen={open} 
        setOpen={setOpen} 
        currentDish={currentDish} 
        currentRestaurant={props.restaurante} 
      />
    </div>
  );

}