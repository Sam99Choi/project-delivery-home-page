import Header from "@/components/header/Header";  
import ListaRestaurantes from "@/components/ListaRestaurantes/ListaRestaurantes";
import Footer from "@/components/Footer/Footer";

export default function Restaurants(props) {
  return (
    <div className="flex flex-col justify-between w-full h-screen">
      <header>
        <Header/>
      </header>
      <main className="flex sm:items-start lg:items-center items-center justify-center w-full h-full mt-48 sm:mt-24 /bg-vermelho ">
        <ListaRestaurantes />
      </main>
      <footer className=" mt-14 sm:mt-0 /bg-preto">
        <Footer/>
      </footer>
    </div>
  );
}