import { useState, useEffect } from "react"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"



export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 4 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 2 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

  return (
    <div className="overflow-hidden relative h-auto w-full rounded-md ">
        <div
            className="flex gap-4 w-1/2 rounded /w-5/12 h-auto transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
        >
            {slides}
        </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-branco text-gray-800 hover:bg-white"
        >
          <BsChevronLeft size={40}/>
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-branco text-gray-800 hover:bg-white"
        >
        <BsChevronRight size={40}/>
        </button>
      </div>

      
    </div>
  )
}