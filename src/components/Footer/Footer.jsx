import Logo from "../header/Logo";

export default function Footer() {
  return(
    <div className=" flex gap-3 mt-12 px-4">
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