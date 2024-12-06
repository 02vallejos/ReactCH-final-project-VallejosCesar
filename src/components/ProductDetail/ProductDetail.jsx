import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../hooks/useCart";
import { useNotification } from "../../hooks/useNotification";

function ProductDetail({ product }) {
  const [quantityProduct, setQuantityProduct] = useState(0);
  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleAdd = (count) => { 
    const productToAdd = {...product, QuantityProduct: count}
    
    setQuantityProduct(count);

    if (isInCart(product.ID)) {
    } else {
      addItem(productToAdd);
      setNotification('success', `Se agregaron ${count} al carrito`);
    }
  }

  return (
    <div className="container mx-auto my-8">
      <div className="w-4/5 lg:w-7/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-row">
          <div className="w-1/3 p-4">
            <img className="object-cover w-full h-full rounded-full" src={product.thumbnail} alt={product.title} />
          </div>
          <div className="w-2/3 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{product.title}</div>
              <div className="text-gray-900 font-bold text-3xl mb-2">$ {product.price}</div>
              <div className="text-gray-900 font-bold text-3xl mb-2">Cantidad {product.available_quantity}</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div >
            {console.log(product.ID)}
            {
             
              isInCart(product.ID) ? (
                <Link to="/cart" className="rounded-md px-3 py-2 text-sm font-medium bg-gray-500 text-gray-900 hover:bg-orange-400 hover:text-white">Ir al Carrito</Link>
              ) : (
                <ItemCount stock={product.available_quantity} onAdd={handleAdd}/>
              )
              
            }  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail;