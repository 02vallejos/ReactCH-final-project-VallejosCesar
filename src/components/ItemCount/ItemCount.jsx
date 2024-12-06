import { useState } from "react"


function ItemCount({ initialValue = 1, stock, onAdd }) {
   const [count, setCount] = useState(initialValue)

   const decrement = () => {
      if (count > 1) setCount(count - 1)
   }

   const increment = () => {
      if (count < stock) setCount(count + 1)
   }

   return (
      <>
         <div className="flex flex-col items-center">
            <h1 className="center-text">{count}</h1>
            <div className="flex space-x-4">
               <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-orange-400 hover:text-white" aria-current="page" onClick={decrement}>Decrementar</button>
               <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-orange-400 hover:text-white" aria-current="page" onClick={() => onAdd(count)}>Agregar a carrito</button>
               <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-orange-400 hover:text-white" aria-current="page" onClick={increment}>Incrementar</button>
            </div>
         </div>
      </>
   )
}

export default ItemCount