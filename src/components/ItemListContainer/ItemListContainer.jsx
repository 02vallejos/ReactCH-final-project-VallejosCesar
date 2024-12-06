import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx";
import { db } from "../../services/firebase/index.js"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import './ItemListContainer.css';
import { useNotification } from '../../hooks/useNotification.js'


function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { brandId } = useParams();
    const [loader, setLoader] = useState(true);
    const { setNotification } = useNotification();

    useEffect(() => {
        const collectionRef = brandId
            ? query(collection(db, "products"), where("brand", "==", brandId)) // filtrados por categoria
            : collection(db, "products") //todos los productos

        getDocs(collectionRef)
            .then((querySnapshot) => {
                const prod = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setNotification('success', 'Peticion a FireStore Exitosa')
                setLoader(false);
                setProducts(prod);
            })
            .catch(() => {
                console.log(error);
                setNotification('danger', 'No se completo la pestición')
            })
    }, [brandId])

    if (loader) {
        return (
            <>
                <div class="hourglassBackground">
                    <div class="hourglassContainer">
                        <div class="hourglassCurves"></div>
                        <div class="hourglassCapTop"></div>
                        <div class="hourglassGlassTop"></div>
                        <div class="hourglassSand"></div>
                        <div class="hourglassSandStream"></div>
                        <div class="hourglassCapBottom"></div>
                        <div class="hourglassGlass"></div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <ItemList products={products} />
        </>
    )

}

export default ItemListContainer