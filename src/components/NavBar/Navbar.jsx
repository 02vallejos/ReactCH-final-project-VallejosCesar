import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


export default function NavbarComponents({ title }) {
  return (
    <>
        <nav className="w-full bg-gray-300 mb-4">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div classNane="text-2xl font-extrabold ...">
                  <span className="bg-clip-text text-transparent text-3xl bg-gradient-to-r from-orange-500 to-red-500">
                    {title}
                  </span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink to="/" className={({ isActive }) => `rounded-md px-3 py-2 font-medium text-xl hover:bg-orange-400 hover:text-white text-gray-900 ${isActive ? 'text-decoration-line: underline' : ''}`}>Inicio</NavLink>
                  <NavLink to="/product" className={({ isActive }) => `rounded-md px-3 py-2 text-xl  font-medium  hover:bg-orange-400 hover:text-white text-gray-900 ${isActive ? 'text-decoration-line: underline' : ''}`}>Productos</NavLink>
                  <NavLink to="updates" className={({ isActive }) => `rounded-md px-3 py-2 text-xl font-medium  hover:bg-orange-400 hover:text-white text-gray-900 ${isActive ? 'text-decoration-line: underline' : ''}`}>Novedades</NavLink>
                  <NavLink to="aboutus" className={({ isActive }) => `rounded-md px-3 py-2 text-xl font-medium  hover:bg-orange-400 hover:text-white text-gray-900 ${isActive ? 'text-decoration-line: underline' : ''}`}>Contacto</NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="/cart">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <CartWidget />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink to="/" className= {({ isActive }) => `block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white aria-current="page" ${isActive ? 'text-decoration-line: underline' : ''}`}>Inicio</NavLink>
            
            <NavLink to="/product" className= {({ isActive }) => `block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white aria-current="page" ${isActive ? 'text-decoration-line: underline' : ''}`}>Productos</NavLink>

            <NavLink to="updates" className= {({ isActive }) => `block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white aria-current="page" ${isActive ? 'text-decoration-line: underline' : ''}`}>Novedades</NavLink>

            <NavLink to="aboutus" className= {({ isActive }) => `block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white aria-current="page" ${isActive ? 'text-decoration-line: underline' : ''}`}>Contacto</NavLink>
          </div>
        </div>
      </nav>
    </>)
}
