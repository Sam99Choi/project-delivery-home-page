import Image from "next/image"

export default function Logo() {
  return (
    <div>
      <Image 
      src="/../public/images/logo.png" 
      alt="logo" 
      width="145"
      height="120"
      />
    </div>
  )
}