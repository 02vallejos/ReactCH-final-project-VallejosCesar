import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Uptades from './pages/Uptades'
import Aboutus from './pages/Aboutus'
import './App.css'
import Termos from './pages/Termos'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { NotificationProvider } from './context/NotificationContext'

function App() {

  return (
    <>
      <BrowserRouter>

        <CartProvider>
          <NotificationProvider>
          <Navbar title="Tienda Cesar" />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='product' element={<Products />}>
              <Route path='termos' element={<Termos />} />
              <Route path='termos/brand/:brandId' element={<ItemListContainer />} />
              <Route path='detail/:itemId' element={<ProductDetailContainer />} />
            </Route>
            <Route path='updates' element={<Uptades />} />
            <Route path='Aboutus' element={<Aboutus />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
          </NotificationProvider>
        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
