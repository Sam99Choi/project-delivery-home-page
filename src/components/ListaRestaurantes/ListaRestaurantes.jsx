import Restaurantes from "./TextRestaurantes";
import Bullguer from "./Bullguer";
import ChinaInBox from "./ChinaInBox";
import DonaDeola from "./DonaDeola";
import Habibs from "./Habibs";
import McDonalds from "./McDonalds";
import Montana from "./Montana";


export default function ListaRestaurantes() {
  return (
    
    <div id="restaurante" className=" flex flex-col w-screen items-start justify-between my-5 mx-5 md:mx-[100px] md:w-screen md:justify-center md:items-center /bg-vermelho lg:w-auto lg:mx-[180px] 2xl:w-[1496px] ">
      <div className="flex w-screen mx-5 md:px-[100px] lg:px-[180px] lg:w-full /bg-vermelho lg:justify-start 2xl:w-[1496px] 2xl:px-[173px] 2xl:mx-0 ">
      <Restaurantes />
      </div>
     
      <div className="flex w-auto /bg-vermelho flex-col items-center justify-between my-5 gap-2 md:w-screen md:px-[100px] md:gap-4 md:grid md:grid-cols-2  lg:px-[180px] lg:gap-10   xl:grid xl:grid-cols-3  2xl:w-[1496px] 2xl:px-[170px]  ">
        <Bullguer />  
        <McDonalds />      
        
        <DonaDeola />
        <Habibs />
        <ChinaInBox />
        <Montana />
      </div>
    </div>
  )
};
