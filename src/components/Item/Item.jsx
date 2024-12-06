import { Link } from "react-router-dom"

function Item({ product }) {
    return ( 
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.thumbnail} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  
                    <div className="font-bold text-xl mb-2">{product.title}</div>
                    <div className="font-bold text-xl mb-2">Cant: {product.available_quantity}</div>
                    <Link to={`/product/detail/${product.id}`}>
                    <p className="text-black hover:text-white text-xl rounded-md px-3 py-2   ">Detalle...</p>
                    </Link>
                    
                </div>
                <div className="px-10 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">${product.price}</span>                  
                </div>
        </div>
    )
}

export default Item