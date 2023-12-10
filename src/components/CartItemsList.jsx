import { useSelector } from 'react-redux'
import { CartItem } from '../components'

const CartItemsList = () => {
  var { cartItems } = useSelector((state) => state.cart)
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />
      })}
    </>
  )
}

export default CartItemsList
