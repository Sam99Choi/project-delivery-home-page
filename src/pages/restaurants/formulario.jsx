import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import SignUp from '../../components/SignUp';

export default function Formulario(props) {
  return (
    <div className='flex flex-col justify-between h-full w-full'>
      <header className=''>
        <Header/>
      </header>
      <main className='flex justify-center h-full w-full  6 sm:mt-24 md:mt-[110px]  '>
        <div className='flex w-3/4 h-[500px] shadow-md /bg-borda vermelho'>
          <div className='hidden md:flex w-1/2  '>
          <Image
              src="/../public/images/signup.png"
              width="750"
              height="850"
              alt='image sign up'
            />   
          </div>
          <div className='p-6 w-full md:w-1/2 space-y-7 justify-between bg-gray vermelho/5'> 
            <h1 className='text-2xl font-bold'>Cadastro</h1>
            <form action="  " className='mb-2 w-full grid grid-cols-2 gap-6'>
              <p className='flex flex-col'>
                <label htmlFor="title">Restaurante: </label> 
                <input className='rounded' type="text" id='title' />
              </p>
              <p className='flex flex-col'>
                <label htmlFor="addres">Endereço: </label> 
                <input className='rounded' type="text" id='addres'/>
              </p>
              <p className='flex flex-col'>
                <label htmlFor="addresNumber">Número: </label> 
                <input className='rounded' type="text" id='addresNumber'/>
              </p>
              <p className='flex flex-col'>
                <label htmlFor="zipCode">CEP: </label> 
                <input className='rounded' type="text" id='zipCode'/>
              </p>
              <p className='flex flex-col'>
                <label htmlFor="complement">Complemento: </label> 
                <input className='rounded' type="text" id='complement'/>
              </p>
                   
            </form> 
            <button className='flex justify-center items-center mt-10 px-3 py-2 rounded-md text-branco font-medium bg-vermelho hover:bg-vermelho/75 ' ><input type="submit"  /></button>   
          </div>
          
        </div>
        

      </main>
      <footer className='/flex'>
        <Footer/>
      </footer>
    </div>
  );
}


/*
title
addressNumber
addres
complement
zipCode

/absolute /top-1 /bottom-1

*/

//