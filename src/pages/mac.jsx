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

export async function getServerSideProps(context) {
  const pratos = [
    {
      id: 41,
      title: "Big Tasty",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "35.90",
      imageURL: "/images-restaurant/mac/BigTasty.png",
    },
    {
      id: 42,
      title: "Big Mac",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "26.90",
      imageURL: "/images-restaurant/mac/BigMac.png",
    },
    {
      id: 43,
      title: "Quarteirão",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/Quarterao.png",
    },
    {
      id: 44,
      title: "McChicken",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/McChicken.png",
    },
    {
      id: 45,
      title: "Cheddar McMelt",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/McMelt.png",
    },
    {
      id: 46,
      title: "McNífico",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/McNifico.png",
    },
    {
      id: 47,
      title: "Crispy Chicken",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/CrispyChicken.png",
    },
    {
      id: 48,
      title: "Chicken McNuggets",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/Nuggets.png",
    },
    {
      id: 49,
      title: "Mc Lanche Feliz",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/LancheFelizW.png",
    },
    {
      id: 50,
      title: "Mcflurry",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49.99",
      imageURL: "/images-restaurant/mac/Mcflurryi.png",
    },
  ];

  // Samu, como proximo passo, cria um arquivo chamado ".env.local" na raiz do seu projeto, declare o dominio usando uma variavel como por exemplo:
  // API_URL=http://127.0.0.1:1337/api e depois disso usa essa variavel assim:
  // const response = await fetch(`${process.env.API_URL}/restaurants/1`)
  // Desse jeito trará mais flexibilidade e melhor gerenciamento do dominio na aplicacao
  const response = await fetch('http://127.0.0.1:1337/api/restaurants/1')
  const restaurant = await response.json() 
  restaurant.data.attributes.time = "20-30 min";
  restaurant.data.attributes.delivery = "10.99";
  
  return {
    props: {
      pratos,
      restaurante: restaurant,
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
         title={props.restaurante.data.attributes.title} 
         time={props.restaurante.data.attributes.time} 
         delivery={props.restaurante.data.attributes.delivery} 
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
          title={props.restaurante.data.attributes.title}
          time={props.restaurante.data.attributes.time}
          delivery={props.restaurante.data.attributes.delivery}
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
