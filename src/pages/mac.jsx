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
      title: "McOferta Big Tasty",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "35.90",
      imageURL: "/images-restaurant/mac/BigTasty.png",
    },
    {
      id: 2,
      title: "McOferta Big Mac",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "26.90",
      imageURL: "/images-restaurant/mac/BigMac.png",
    },
    {
      id: 3,
      title: "McOferta Quarteirão",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/Quarterao.png",
    },
    {
      id: 4,
      title: "McOferta McChicken",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/McChicken.png",
    },
    {
      id: 5,
      title: "McOferta Cheddar McMelt",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/McMelt.png",
    },
    {
      id: 6,
      title: "McOferta McNífico",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/McNifico.png",
    },
    {
      id: 7,
      title: "McOferta Crispy Chicken",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/CrispyChicken.png",
    },
    {
      id: 8,
      title: "McOferta Chicken McNuggets",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/Nuggets.png",
    },
    {
      id: 9,
      title: "Mc Lanche Feliz",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/LancheFelizW.png",
    },
    {
      id: 10,
      title: "Mcflurry",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/Mcflurryi.png",
    },
  ];

  const restaurante = {
    title: "McDonalds - Paulista",
    time: "20-30 min",
    delivery: "00.00",
  };

  return {
    props: {
      pratos,
      restaurante,
    },
  };
};

export default function Mac(props) {

  const [open, setOpen] = useState(false);
  const {currentDish, setCurrentDish} = useBagProvider()

  return (
    <div className=" w-full">
      <div >
        <Header />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <Banner 
          imageURL="images-restaurant/mac/bannerMc.png"
        />
        <InfoHeader 
         imageURL="images/mc.png"
         title={props.restaurante.title} 
         time={props.restaurante.time} 
         delivery={props.restaurante.delivery} 
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap justify-center items-center w-full gap-2 lg:gap-6  mb-1">
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


/*
  const [open, setOpen] = useState(false);
  const { currentDish, setCurrentDish } = useBagProvider();

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className=" flex flex-col items-center">
        <Banner imageURL="images-restaurant/mac/bannerMc.png" />
        <InfoHeader
          imageURL="images/mc.png"
          title={props.restaurante.title}
          time={props.restaurante.time}
          delivery={props.restaurante.delivery}
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap  justify-center gap-6 mb-10">
          {props.pratos.length > 0 ? (
            props.pratos.map((prato) => (
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
          ) : (
            <p>Não há pratos!</p>
          )}
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
  */
}
