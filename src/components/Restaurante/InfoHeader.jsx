/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export default function InfoHeader(props){
    const {title, time, delivery, imageURL} = props;

    return(
        <div className= "flex-columm justify-center items-center py-0 px-[30px] mt-[10px] mb-5 mx-[76.6px]">
            <div className=' flex items-center h-[125px] w-[1306px]'>
                <img src={imageURL} alt="logo" className="flex mr-5 rounded-full w-[75px] h-[75px]" />
                
               
                <div className="flex-columm w-[927px] ">
                    <h1 className="font-semibold text-4xl text-cinza-400">{title}</h1>
                    <h2 className=" flex items-center gap-2 font-medium text-cinza-400"></h2>
                    
                </div>
                <div className="flex-columm flex-auto justify-end items-end gap-2 text-sm font-medium text-cinza-200"> 
                     <div className="flex justify-end">
                        Tempo de entrega: {time}
                    </div>
                    <div>
                        <h2 className="flex justify-end font-medium text-cinza-200">
                            Frete: R$ {delivery} 
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}