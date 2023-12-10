import { BsCart3, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/user/UserSlice'

const Navbar = () => {
  var dispatch = useDispatch()
  var handleTheme = () => {
    dispatch(toggleTheme())
  }
  var numItemsInCart = useSelector((state) => state.cart.numItemsInCart)
  return (
    <div className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <div className="swap-on">
              <BsFillMoonFill className="w-4 h-4" />
            </div>
            <div className="swap-off">
              <BsFillSunFill className="w-4 h-4" />
            </div>
          </label>
          <Link to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
