import { createContext, useEffect, useState } from "react";
// import { useNotification } from "../context/NotificationContext";

export const CartContext = createContext();

const intialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
    // const { setNotification } = useNotification();

    const [cart, setCart] = useState(intialCart);
    
    const isInCart = (ID) => {
        return cart.some((prod) => prod.ID === ID)
    };

    const addItem = (product) => {
        console.log(product);
        if (!isInCart(product.ID)) {
            setCart((prev) => [...prev, product]);
        } else {
        console.log("El producto ya esta en el carrito");
         }
    };

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.ID !== id);
        setCart(cartUpdated);
     };

     const clearCart = () => {
        setCart([]);
     };

    const getTotalPrice = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.price * prod.QuantityProduct
        });
        return accu
    };

    const getTotalById = (id) => {
        const item = cart.find((prod) => prod.ID === id);
        return item ? item.price * item.QuantityProduct : 0;
    };

    const totalItemsinCart = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.QuantityProduct
        });
        return accu
    };

    const decrementItem  = (id) => {
        setCart((prev) =>
            prev.map((prod) =>
                prod.ID === id && prod.QuantityProduct > 1
                    ? { ...prod, QuantityProduct: prod.QuantityProduct - 1 }
                    : prod
            )
        );
    };

    const incrementItem  = (id) => {
        setCart((prev) =>
            prev.map((prod) =>
                prod.ID === id && prod.QuantityProduct < prod.available_quantity
                    ? { ...prod, QuantityProduct: prod.QuantityProduct + 1 }
                    : prod
            )
        );
    };

    const obj = {
        cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getTotalPrice,
        getTotalById,
        totalItemsinCart,
        incrementItem,
        decrementItem
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        }, [cart]);

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}