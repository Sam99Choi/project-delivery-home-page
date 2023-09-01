import Restaurantes from "./TextRestaurantes";
import Bullguer from "./Bullguer";
import ChinaInBox from "./ChinaInBox";
import DonaDeola from "./DonaDeola";
import Habibs from "./Habibs";
import McDonalds from "./McDonalds";
import Montana from "./Montana";


export default function ListaRestaurantes() {
  return (
    <div className="flex flex-col items-start justify-start  ">
      <div className="flex w-full  md:mx-[100px] lg:mx-[180px] ">
      <Restaurantes />
      </div>
     
      <div className="flex flex-col items-center justify-center my-5 md:mx-[100px] lg:mx-[180px]  md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-4">
        <Bullguer />        
        <ChinaInBox />
        <DonaDeola />
        <Habibs />
        <McDonalds />
        <Montana />
      </div>
    </div>
  )
};
