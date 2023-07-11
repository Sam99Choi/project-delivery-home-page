import { BagProvider, useBagProvider } from '@/providers/BagContext/Provider';


export default function Count({small}) {

    const { increment, decrement, quantidade } = useBagProvider()
    
    return (
        <div className={`flex justify-center items-center ${small ? 'h-10' : 'h-12' } ${small ? 'w-18' : 'w-28' } ${small ? 'p-2' : 'p-0'} gap-2 border-solid border-2 border-gray rounded-md`}>
      <button disabled={quantidade < 2} onClick={decrement}>
        <svg
          className="my-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#ea1d2c"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
        </svg>
      </button>
      <div className="flex justify-center items-center w-9 h-8 font-medium">
        {quantidade}
      </div>
      <button onClick={increment}>
        <svg
          className="my-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#ea1d2c"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
        </svg>
      </button>
    </div>
    )
}