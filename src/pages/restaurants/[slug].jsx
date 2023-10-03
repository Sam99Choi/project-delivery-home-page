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
  console.log("context.params.slug: ", context.params.slug)
  console.log("URL: ", `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurants?filters[slug][$eq]=${context.params.slug}&populate[0]=dishes`)
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurants?filters[slug][$eq]=${context.params.slug}&populate[0]=dishes`);
  const restaurants = await response.json();
  console.log("restaurants: ", restaurants)
  const restaurant = restaurants.data[0];
  console.log("restaurant: ", restaurant)
  restaurant.attributes.time = "20-30 min";
  restaurant.attributes.delivery = "10.99";
  
  return {
    props: {
      pratos: restaurant.attributes.dishes,
      restaurante: restaurant,
    },
  };
}

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
         title={props.restaurante.attributes.title} 
         time={props.restaurante.attributes.time} 
         delivery={props.restaurante.attributes.delivery} 
        />
        <SearchFood />
      </div>

      <div className="flex flex-col justify-center items-center">
        <Cardapio />

        <div className="flex flex-wrap justify-center items-center w-full gap-2 lg:gap-6  mb-1">
        {
          props.pratos.data.length > 0 
          ? props.pratos.data.map((prato) => (
            <Pratos
              key={prato.id}
              prato={prato}
              title={prato.attributes.title}
              content={prato.attributes.content}
              price={prato.attributes.price}
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
        currentRestaurant={props.restaurante.attributes} 
      />
      
      <Footer/>
    </div>
  );
}