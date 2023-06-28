import Header from "@/components/Header";
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
      title: "Top Side, corte de cozão mole com arroz + 01 acompanhamento extra",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"35,90",
      imageURL:"/images-restaurant/montana/TopSide.png",
    },
    {
      key: 2,
      title:"Top side, corte de coxão mole com massa fettuccine + 01 molho",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"26,90",
      imageURL:"/images-restaurant/montana/TopSideM.png"
    }, 
    {
      key: 3,
      title:"Executivo de iscas de frango com arroz, feijão e + 01 extra de sua esolha",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/ExecutivoFrango.png",
    },
    {
      key: 4,
      title:"Executivo de tiras de Alcatra, com arroz, feijão e + 01 extra a sua escolha",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/ExecutivoAlcatra.png",
    },
    {
        key: 5,
        title:"Corte de Contra Filé + 03 acompanhamentos",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
        price:"49,99",
        imageURL:"/images-restaurant/montana/ContraFile.png",
      },
    {
      key: 6,
      title:"Parmegiana de Frango + 03 acompanhamentos extras",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Parmegiana.png",
    },
    {
      key: 7,
      title:"Montan Steak Angus (200g), corte angus + 03 acompanhamentos extras",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Angus.png" ,
    },
    {
      key: 8,
      title:"Filé de Frango Grelhado + 03 acompanhamentos extras",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/FileFrango.png",
    },
    {
      key: 9,
      title:"Salada",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Salada.png",   
    },
    {
      key: 10,
      title:"Strogonoff de frando com arroz e fritas montana",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Strog.png", 
    }
  ];

export default function Montana() {
  
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
    )
}