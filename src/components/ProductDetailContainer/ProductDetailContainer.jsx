import ProductDetail from "../ProductDetail/ProductDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNotification } from "../../hooks/useNotification";

function ProductDetailContainer() {
  const [product, setProduct] = useState({})
  const { itemId } = useParams() 
  const {setNotification} = useNotification()

  useEffect(() => {
    getDoc(doc(db, 'products', itemId))
    .then((querySnapshot) => {
      const prod = {id: querySnapshot.id, ...querySnapshot.data()};
      setNotification('success', 'Producto encontrado')
      setProduct(prod);
    }).catch((err) => {
      setNotification('danger', 'No es posible cargar traer el producto')
    }).finally(() => {

    })

  }, [itemId])

  return (
    <>
      <ProductDetail product={product} />
    </>
  )
}

export default ProductDetailContainer