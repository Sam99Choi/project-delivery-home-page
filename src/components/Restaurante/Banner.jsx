/* eslint-disable @next/next/no-img-element */
import Image from "next/image"


export default function Banner(props) {
    const {imageURL} = props;
    return (
        <div className="pt-4 md:pt-11 2xl:pt-20 w-full ">
            <div className="flex justify-center items-start w-full md:h-48 lg:h-[285px] lg:py-9">
                <img src={imageURL} alt="" className="flex justify-center items-center w-full h-28  xl:w-[1310px] sm:h-[250px] mb-0 xl:rounded-md"/>
            </div>
        </div>
    )
}