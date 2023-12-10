import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
var Links = [
  { name: 'home', to: '/' },
  { name: 'about', to: '/about' },
  { name: 'products', to: '/products' },
  { name: 'cart', to: '/cart' },
  { name: 'checkout', to: '/checkout' },
  { name: 'orders', to: '/orders' },
]

const NavLinks = () => {
  var user = useSelector((state) => state.user.user)
  return (
    <>
      {Links.map((link) => {
        if ((link.to === '/checkout' || link.to === '/orders') && !user) {
          return null
        }
        return (
          <li key={link.name}>
            <Link to={link.to} className="capitalize">
              {link.name}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default NavLinks
