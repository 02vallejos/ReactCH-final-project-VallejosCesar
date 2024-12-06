import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useNotification } from '../../hooks/useNotification'

export default function Checkout() {
  const { setNotification } = useNotification();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: ""
  });
  const [orderCreated, setOrderCreated] = useState(false);

  const { cart, totalItemsinCart, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createOrder = async () => {
    const objOrder = {
      buyer: formData,
      items: cart,
      totalItems: totalItemsinCart(),
      total,
      date: new Date()
    };

    const ids = cart.map((item) => item.ID);
    const productRef = collection(db, "products");

    const productAddedFromFirestore = await getDocs(
      query(productRef, where(documentId(), "in", ids))
    );

    const { docs } = productAddedFromFirestore;

    const outOfStock = [];
    const batch = writeBatch(db);

    docs.forEach((doc) => {
      const dataDoc = doc.data();
      const stockDb = dataDoc.available_quantity;

      const productAddedToCart = cart.find((prod) => prod.ID === doc.id);
      const prodQuantity = productAddedToCart.QuantityProduct;

      if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { available_quantity: stockDb - prodQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...dataDoc });
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();
      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, objOrder);
      setNotification('success', `El id de su orden es ${orderAdded.id}`)
      // console.log(`El id de su orden es ${orderAdded.id}`);
      setOrderCreated(true);
      localStorage.removeItem("cart");
      clearCart();
    } else {
      console.log("Hay productos fuera de stock");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Confirmar Orden</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Apellido</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Teléfono</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Dirección</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={createOrder}
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Generar orden
        </button>
      </form>
      {orderCreated && <h1 className="text-green-500 mt-4">La orden fue creada</h1>}
    </div>
  );
}
