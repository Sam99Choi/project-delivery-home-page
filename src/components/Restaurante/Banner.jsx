/* eslint-disable @next/next/no-img-element */
import Image from "next/image"


export default function Banner(props) {
    const {imageURL} = props;
    return (
        <div className=" pt-20">
            <div className="flex justify-center w-full h-[285px] py-9 pb-0 bg-branco">
                <img src={imageURL} alt="" className="flex justify-center items-center w-[1310px] h-[250px] mb-0 rounded-md"/>
            </div>
        </div>
    )
}