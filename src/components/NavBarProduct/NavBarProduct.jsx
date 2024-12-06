import { Link, NavLink } from 'react-router-dom'

function NavBarProduct() {
  return (
    <nav className="bg-gray-300 mb-4">    
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink to="termos" className={({ isActive }) => `rounded-md px-3 py-2 text-xl font-medium text-gray-900 hover:bg-orange-400 hover:text-white"  ${isActive ? 'text-decoration-line: underline' : ''}`} aria-current="page">Termos</NavLink>
                <NavLink to="termos/brand/Lumilagro" className={({ isActive }) => `rounded-md px-3 py-2 text-xl font-medium text-gray-900 hover:bg-orange-400 hover:text-white"  ${isActive ? 'text-decoration-line: underline' : ''}`} aria-current="page">Lumilagro</NavLink>
                <NavLink to="termos/brand/Stanley" className={({ isActive }) => `rounded-md px-3 py-2 text-xl font-medium text-gray-900 hover:bg-orange-400 hover:text-white"  ${isActive ? 'text-decoration-line: underline' : ''}`} aria-current="page">Stanley</NavLink>
                <NavLink to="termos/brand/Peabody" className={({ isActive }) => `rounded-md px-3 py-2 text-xl font-medium text-gray-900 hover:bg-orange-400 hover:text-white"  ${isActive ? 'text-decoration-line: underline' : ''}`} aria-current="page">Peabody</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBarProduct