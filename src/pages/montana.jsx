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
      title:
        "Top Side, corte de cozão mole com arroz + 01 acompanhamento extra",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "35,90",
      imageURL: "/images-restaurant/montana/TopSide.png",
    },
    {
      id: 2,
      title: "Top side, corte de coxão mole com massa fettuccine + 01 molho",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "26,90",
      imageURL: "/images-restaurant/montana/TopSideM.png",
    },
    {
      id: 3,
      title:
        "Executivo de iscas de frango com arroz, feijão e + 01 extra de sua esolha",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/ExecutivoFrango.png",
    },
    {
      id: 4,
      title:
        "Executivo de tiras de Alcatra, com arroz, feijão e + 01 extra a sua escolha",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/ExecutivoAlcatra.png",
    },
    {
      id: 5,
      title: "Corte de Contra Filé + 03 acompanhamentos",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/ContraFile.png",
    },
    {
      id: 6,
      title: "Parmegiana de Frango + 03 acompanhamentos extras",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/Parmegiana.png",
    },
    {
      id: 7,
      title:
        "Montan Steak Angus (200g), corte angus + 03 acompanhamentos extras",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/Angus.png",
    },
    {
      id: 8,
      title: "Filé de Frango Grelhado + 03 acompanhamentos extras",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/FileFrango.png",
    },
    {
      id: 9,
      title: "Salada",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/Salada.png",
    },
    {
      id: 10,
      title: "Strogonoff de frando com arroz e fritas montana",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price: "49,99",
      imageURL: "/images-restaurant/montana/Strog.png",
    },
  ];

  const restaurante = {
    title: "Montana - Shopping D ",
    time: "20 - 30 min",
    delivery: "00.00",
  };

  return {
    props: {
      pratos,
      restaurante,
    },
  };
};

export default function Montana(props) {
  const [open, setOpen] = useState(false);
  const { currentDish, setCurrentDish } = useBagProvider();

  return (
    <div className=" w-full">
      <div>
        <Header />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <Banner imageURL="images-restaurant/montana/BannerMontana.png" />
        <InfoHeader
          imageURL="images/montanagrill.jpg"
          title={props.restaurante.title}
          time={props.restaurante.time}
          delivery={props.restaurante.delivery}
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap justify-center items-center w-full gap-2 lg:gap-6  mb-1">
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

      <Footer />
    </div>
  );
}

/*
  
  const [open, setOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState({});
    
  return(
        <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner
          imageURL="images-restaurant/montana/BannerMontana.png"
        />
        <InfoHeader  
          imageURL="images/montanagrill.jpg" title="Montana - Shopping D " time="20 - 30 min" delivery="Grátis" 
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap justify-center items-center w-full gap-2 lg:gap-6  mb-1">
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

    <ModalRestaurante isOpen={open} setOpen={setOpen} currentDish={currentDish} />
    </div>
    )
}
*/
