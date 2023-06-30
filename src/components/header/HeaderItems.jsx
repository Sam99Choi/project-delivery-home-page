/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Avatar from "./Header-icons/Avatar";
import Search from "./Header-icons/Search";
import Logo from "./Logo";
import CartLogo from "./Header-icons/CartLogo";
import { useState } from "react";
import Bag from "../Bag/Bag";

export default function HeaderItems() {

  const [open, setOpen] = useState(false)

  return (
    <div>
    <header>
      <div className="flex items-center w-full h-20 p-8 gap-6 shadow-sm fixed">
        <Link href={"/"}>
          <Logo />
        </Link>
        
        <nav className="flex justify-around items-center p-1 gap-8">
          <ul>
            <li className="text-cinza-200 hover:text-vermelho">
              <Link href={"/"}>Início</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="text-cinza-200 hover:text-vermelho" href="">
                Restaurantes
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center w-full h-[48px] shadow rounded-lg bg-gray-100 p-4">
            <Search />
          <input 
            className=" flex w-full pl-2 items-center bg-gray-100 focus:outline-none text-preto"
            placeholder="Busque por item ou loja"
            type="text">
            </input>
        </div>

        <div className="flex items-center justify-center m-8 gap-8 w-[100px] h-[44px]">
          <button className="flex justify-center items-center">
            <Avatar />
          </button>
          <button onClick={() => setOpen(!open)} className="flex justify-center items-center">
            <CartLogo />
          </button>

        </div>
      </div>
    </header>
      <Bag bagOpen={open} setBagOpen={setOpen}/>
    </div>

  );
}
