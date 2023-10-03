import Logo from "../header/Logo";

export default function Footer() {
  return(
    <div className=" flex items-center  h-28 sm:h-20 lg:h-20 gap-3 lg:mt-12 mt-10 pb-4 px-4 ">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-cinza-200 text-sm">© Copyright 2021 - DeliFast - Todos os direitos reservados DeliFast com Agência de Restaurantes</span>
        <span className="text-cinza-200 text-sm">Avenida dos Alimentos, 1000, Vila Nova da Fome, São Paulo/SP</span>
      </div>
    </div>
  )
}