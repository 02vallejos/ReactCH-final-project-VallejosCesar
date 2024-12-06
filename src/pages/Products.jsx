import NavBarProduct from '../components/NavBarProduct/NavBarProduct'
import { Outlet } from 'react-router-dom'
import Termos from './Termos'

function Products() {
  return (
    <>
      <NavBarProduct />
      <Outlet />
    </>
  )
}

export default Products