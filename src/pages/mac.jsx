import Header from "@/components/header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";
import { useState } from "react";
import Modal from "../components/Restaurante/ModalRestaurante";

export const getServerSideProps = async () => {
  const pratos = [

    {
      key: 1,
      title: "McOferta Big Tasty",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"35.90",
      imageURL:"/images-restaurant/mac/BigTasty.png",
    },
    {
      key: 2,
      title:"McOferta Big Mac",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"26.90",
      imageURL:"/images-restaurant/mac/BigMac.png"
    }, 
    {
      key: 3,
      title:"McOferta Quarteirão",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/Quarterao.png",
    },
    {
      key: 4,
      title:"McOferta McChicken",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/McChicken.png",
    },
    {
      key: 5,
      title:"McOferta Cheddar McMelt",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/McMelt.png",
    },
    {
      key: 6,
      title:"McOferta McNífico",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/McNifico.png",
    },
    {
      key: 7,
      title:"McOferta Crispy Chicken",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/CrispyChicken.png" ,
    },
    {
      key: 8,
      title:"McOferta Chicken McNuggets",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/Nuggets.png",
    },
    {
      key: 9,
      title:"Mc Lanche Feliz",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/LancheFelizW.png",   
    },
    {
      key: 10,
      title:"Mcflurry",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/mac/Mcflurryi.png", 
    }
  ];

  const restaurante = {
    title:"McDonalds - Paulista",
    time: "20 - 30 min" ,
    delivery: "Grátis"
  }

  return { 
    props: { 
      pratos,
      restaurante,
    } 
  };
};


export default function Mac(props) {
  const [open, setOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState({});

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className=" flex flex-col items-center">
        <Banner
          imageURL="images-restaurant/mac/bannerMc.png"
        />
        <InfoHeader  
          imageURL="images/mc.png" title="Mcdonald's - Av. Paulista" time="30 - 40 min" delivery="R$ 10,99" 
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap  justify-center gap-6 mb-10">
          {
            props.pratos.length > 0 
            ? props.pratos.map((prato) => (
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

      <Modal 
        isOpen={open} 
        setOpen={setOpen} 
        currentDish={currentDish} 
        currentRestaurant={props.restaurante}
        />
    </div>
  );
}
