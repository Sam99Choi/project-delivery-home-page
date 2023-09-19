import Bag from "@/components/Bag/Bag";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import HomeImages from "@/components/HomeImages/HomeImages";
import ListaPratos from "@/components/ListaPratos/ListaPratos";
import ListaRestaurantes from "@/components/ListaRestaurantes/ListaRestaurantes";
import { useState } from "react";


export default function Home() { 

  return (
    <div className="h-screen">
      <header >
        <Header />
      </header>
      <main className="flex flex-col justify-center items-center mb-7 lg:mb-0">
        <HomeImages />
        <ListaPratos />
        <ListaRestaurantes />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
