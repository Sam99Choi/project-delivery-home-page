/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Avatar from "./Header-icons/Avatar";
import Search from "./Header-icons/Search";
import Logo from "./Logo";
import CartLogo from "./Header-icons/CartLogo";
import { useState, useEffect } from "react";
import Bag from "../Bag/Bag";
import { useBagProvider } from "@/providers/BagContext/Provider";
import X from "../Restaurante/X";
import { useRouter } from 'next/navigation';

export default function HeaderItems() {
  const { open, setOpen } = useBagProvider();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <header>
        <Bag bagOpen={open} setBagOpen={setOpen} />
        <div className="flex items-center justify-between  w-full max-h-20 /min-h-20 p-8 gap-6 bg-branco shadow-sm fixed">
          <Link href={"/"}>
            <Logo />
          </Link>

          <nav className="flex justify-around items-center p-1 ">
            <ul className="hidden gap-8 md:flex">
              <li className="text-cinza-200 hover:text-vermelho">
                <Link href={"/"}>Início</Link>
              </li>
              <li>
                <Link href="" className="text-cinza-200 hover:text-vermelho">
                  Restaurantes
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center w-full h-[48px] shadow rounded-lg bg-gray-100 p-4">
            <Search />
            <input
              className=" flex w-full pl-2 items-center bg-gray-100 focus:outline-none text-preto"
              placeholder="Busque por item ou loja"
              type="text"
            ></input>
          </div>

          <div className="hidden md:flex items-center justify-center m-8 gap-8 w-[100px] h-[44px]">
            <button className="flex justify-center items-center">
              <Avatar />
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-center items-center"
            >
              <CartLogo />
            </button>
          </div>

          {
            isMounted 
            ? (
              <button className="block md:hidden py-3 px-4 rounded focus:outline-none  hover:bg-cinza group">
                <div className="w-5 h-1 bg-cinza-400 mb-1"></div>
                <div className="w-5 h-1 bg-cinza-400 mb-1"></div>
                <div className="w-5 h-1 bg-cinza-400 mb-1"></div>
                
            
                <div
                  className={`absolute top-0 -right-full w-full h-screen sm:w-[475px] 8/12 bg-branco border-solid border-t-2 shadow-lg border-l border-borda opacity-0 
                  group-focus:right-0 group-focus:opacity-100 transition-all duration-300 `}
                >
                  <div className="absolute top-2 right-2 p-1 "><X/></div>
                
                  <ul className="flex flex-col items-center w-full cursor-pointer pt-10 text-vermelho">
                    <li onClick={() => router.push('/')} className="hover:bg-cinza py-4 px-6 w-full">
                      Início
                    </li>
                    <li  className="hover:bg-cinza py-4 px-6 w-full">
                      Restaurantes
                    </li>
                    <li onClick={() => setOpen(!open)} className="flex gap-2 justify-center hover:bg-cinza py-4 px-6 w-full">
                      
                      <CartLogo /> Sacola
                    </li>
                    <li className="hover:bg-cinza py-4 px-6 w-full flex gap-2 justify-center">
                      <Avatar /> Perfil
                    </li>
                  </ul>

                </div>
              </button>
            ) 
            : null
          }
        </div>
      </header>
    </div>
  );
}
