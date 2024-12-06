import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


export default function Cart() {
    const { cart, getTotalPrice, totalItemsinCart, clearCart } = useCart();

    const total = getTotalPrice();

    if (totalItemsinCart == 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }
    return (
        <>
            <section class="bg-gray-300 py-8 antialiased md:py-16">
                <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-black sm:text-2xl">Mi Carrito</h2>

                    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-2">
                            <div class="space-y-6">

                                {cart.map((item) => (
                                    <CartItem key={item.ID} {...item} />
                                ))}
                            </div>
                            {totalItemsinCart() > 0 && (
                                <button type="button" onClick={clearCart} className="w-full bg-gray-500 text-black py-2 rounded-md">
                                    Vaciar Carrito
                                </button>
                            )}
                        </div>

                        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div class="space-y-4 rounded-lg border border-gray-700 bg-gray-400 p-4 shadow-sm sm:p-6">
                                <p class="text-xl font-semibold text-gray-900 ">Mi orden</p>

                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-black ">Precio Original</dt>
                                            <dd class="text-base font-medium text-gray-900">${total}</dd>
                                        </dl>

                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-black">Descuentos</dt>
                                            <dd class="text-base font-medium text-green-600">-$0</dd>
                                        </dl>

                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-black">Envio</dt>
                                            <dd class="text-base font-medium text-black">$0</dd>
                                        </dl>

                                    </div>

                                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt class="text-base font-bold text-black">Total</dt>
                                        <dd class="text-base font-bold text-black">${total}</dd>
                                    </dl>
                                </div>

                                {totalItemsinCart() > 0 && (
                                    <Link to='/checkout' className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-primary-300">
                                        Confirmar Compra
                                    </Link>
                                )}

                                <div class="flex items-center justify-center gap-2">
                                    <span class="text-sm font-normal text-black"> or </span>
                                    <Link to="/product/termos" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continuar Comprando
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

