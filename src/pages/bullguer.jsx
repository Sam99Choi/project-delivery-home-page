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
      title: "Bullguer",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"35.90",
      imageURL:"/images-restaurant/bullguer/bullguer.png",
    },
    {
      id: 2,
      title:"Lumberjack",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"26.90",
      imageURL:"/images-restaurant/bullguer/Lumberjack.png"
    }, 
    {
      id: 3,
      title:"Stencil",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/Stencil.png",
    },
    {
      id: 4,
      title:"Chicken Hot Honey",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/ChickenHotHoney.png",
    },
    {
      id: 5,
      title:"Standard",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/Standard.png",
    },
    {
      id: 6,
      title:"Bulldog",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/Bulldog.png",
    },
    {
      id: 7,
      title:"Crickles",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/Crinckles.png" ,
    },
    {
      id: 8,
      title:"Cheese Fries",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/CheeseFries.png",
    },
    {
      id: 9,
      title:"Maionese Bullguer",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/Maionese.png",   
    },
    {
      id: 10,
      title:"Molho de Queijo",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49.99",
      imageURL:"/images-restaurant/bullguer/Queijo.png", 
    }
  ];
  
  const restaurante = {
    title:"Bullguer - Santana",
    time: "20 - 30 min" ,
    delivery: '00.00'
  }
  
  return { 
    props: { 
      pratos,
      restaurante,
    } 
  };
};

export default function Bullguer(props) {
  const [open, setOpen] = useState(false);
  const {currentDish, setCurrentDish} = useBagProvider()

  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <Banner 
          imageURL="images-restaurant/bullguer/zyro-image.png"
        />
        <InfoHeader 
         imageURL="images/bullguer.png" 
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