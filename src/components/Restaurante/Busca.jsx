import Search from "../header/Header-icons/Search";

export default function SearchFood() {
  return (
    <div className="flex justify-center items-center w-full py-0  ">
        <div className="flex justify-center items-center w-[1306px] h-[62px] mx-[76.6px] border-solid border-2 border-gray bg-branco p-4">
            <Search />
            <input
                className=" flex w-full h-full pl-2 items-center bg-branco focus:outline-none text-preto"
                placeholder="Buscar no cardápio"
                type="text"
           ></input>
        </div>
    </div>
   
  );
}
