import Footer from "@/components/Footer/Footer";
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
      title: "Bib'sfiha de Carne",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "35.90",
      imageURL: "/images-restaurant/habibs/carne.png",
    },
    {
      id: 2,
      title: "Bib'sfiha de Frango",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "26.90",
      imageURL: "/images-restaurant/habibs/frango.png",
    },
    {
      id: 3,
      title: "Bib'sfiha de Calabresa com Mussarela",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/calabresamussarela.png",
    },
    {
      id: 4,
      title: "Bib'sfiha de Queijo",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/queijo.png",
    },
    {
      id: 5,
      title: "Bib'sfiha Italianinha",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/italianinha.png",
    },
    {
      id: 6,
      title: "Bib'sfiha de Carne com Mussarela",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/carnemussarela.png",
    },
    {
      id: 7,
      title: "Bib'sfiha de Frango Cremely",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/frangocremely.png",
    },
    {
      id: 8,
      title: "Bib'sfiha de Espinafre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/espinafre.png",
    },
    {
      id: 9,
      title: "Bib'sfiha de Quatro Queijos",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/quatroqueijos.png",
    },
    {
      id: 10,
      title: "Esfiha Folhada de Chocolate",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/habibs/chocolate.png",
    },
  ];

  const restaurante = {
    title:"Habib's - Bom Retiro",
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

export default function Habibs(props) {
  const [open, setOpen] = useState(false);
  const {currentDish, setCurrentDish} = useBagProvider()

  return (
    <div className="">
      <div className="min-w-[500px] xl:w-full"> 
        <Header />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <Banner 
          imageURL="images-restaurant/habibs/Header.png"
        />
        <InfoHeader 
         imageURL="images-restaurant/habibs/logo.png"
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
      <Footer/>
    </div>
  );

}