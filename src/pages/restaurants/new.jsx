/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { useState, useRef } from "react";

export default function New(props) {
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [addressNumber, setAddressNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [complement, setComplement] = useState();
  // const [image, setImage] = useState();

  const fileInput = useRef(null);
  const [img, setImg] = useState();

  const submit = async (e) => {
    e.preventDefault();

    const body = {
      data: {
        title,
        address,
        addressNumber,
        zipCode,
        complement,
        slug: title.toLowerCase().replace(/ /g, "-"),
      },
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const restaurants = await response.json();

    //console.log("fileInput.current.files", fileInput.current.files);
    //console.log("fileInput.current.files[0]", fileInput.current.files[0]);

    const formData = new FormData();
    formData.append("files", fileInput.current.files[0]);
    formData.append("refId", restaurants.data.id);
    formData.append("ref", "api::restaurant.restaurant");
    formData.append("field", "logo");


    const responseUpload = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/upload`,
      {
        method: "post",
        body: formData,
      }
    );
  };

  return (
    <div className="flex flex-col justify-center  between h-screen full w-full">
      <header className="">
        <Header />
      </header>
      <main className="flex items-center sm:justify-center h-full w-full /bg-vermelho pt-20 sm:pt-0  sm:mt-20 md:mt-[100px] 2xl:mt-[110px] ">
        <div className="flex w-full h-full 5/6 md:w-3/4 md:h-[500px] sm:shadow-md bg-gray borda vermelho scroll-auto">
          <div className="hidden md:flex md:w-1/2  ">
            <Image
              src="/../public/images/signup.png"
              width="750"
              height="850"
              alt="image sign up"
            />
          </div>
          <div className="relative flex flex-col justify-around sm:justify-normal  p-6 w-full /h-5/6 auto full screen sm:h-auto full md:w-1/2 space-y-7  bg-gray vermelho/5">
            <h1 className="text-2xl font-bold">Cadastro</h1>
            <form
              onSubmit={submit}
              className="mb-2 w-full grid sm:grid-cols-2 gap-6"
            >
              <p className="flex flex-col">
                <label htmlFor="title">Restaurante: </label>
                <input
                  className="rounded focus:border focus:border-vermelho"
                  value={title}
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="address">Endereço: </label>
                <input
                  className="rounded"
                  value={address}
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="addressNumber">Número: </label>
                <input
                  className="rounded"
                  value={addressNumber}
                  type="text"
                  id="addressNumber"
                  onChange={(e) => setAddressNumber(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="zipCode">CEP: </label>
                <input
                  className="rounded"
                  value={zipCode}
                  type="text"
                  id="zipCode"
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="complement">Complemento: </label>
                <input
                  className="rounded"
                  value={complement}
                  type="text"
                  id="complement"
                  onChange={(e) => setComplement(e.target.value)}
                />
              </p>
              <div className=" flex flex-col ">
                <label htmlFor="image">Logo </label>
              
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    alt="imagem"
                    width={150}
                    height={150}
                    className="w-full max-w-[300px] max-h-[150px] rounded-md mt-2"
                  />
                ) : (
                  <div class="relative">
                  <input 
                  type="file"
                  ref={fileInput}
                  onChange={(e) => setImg(e.target.files[0])}
                  accept="image/*"
                  id="image" 
                  name="image"
                  className="/hidden w-full"/>

                  <label for="image" className=" flex justify-center items-center text-center text-preto w-full h-[150px] max-h-[150px] rounded-md mt-1 shadow-sm bg-gray-100 hover:bg-cinza-100 file:rounded-sm file:border-0 file:p-1 file:bg-cinza-100 branco placeholder:italic cursor-pointer ">
                    Selecione uma imagem
                  </label>
                </div>
                
                )}
              </div>
              <div className="md::absolute bottom-0 right-6 /relative flex items-center mb-2 mt-5 10 /w-full /bg-vermelho h-auto  ">
                <button
                  type="submit"
                  className="/absolute /top-7 flex justify-center items-center  w-full h-10 sm:w-auto sm:h-auto sm:px-4 3 sm:py-2 rounded-md text-branco font-medium bg-vermelho hover:bg-vermelho/75 "
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className=" ">
        <Footer />
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

/*
 <input
                  placeholder="Selecione uma imagem"
                  className=" flex justify-center items-center display-none text-preto w-full h-[150px] rounded-md mt-1 bg-gray-100 hover:bg-cinza-100 file:rounded-sm file:border-0 file:p-1 file:bg-cinza-100 branco placeholder:italic "
                  type="file"
                  ref={fileInput}
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  id="image"
                  />
*/

