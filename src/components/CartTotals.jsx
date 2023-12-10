import { useSelector } from 'react-redux'
import { formatPrice } from '../utilities'
const CartTotals = () => {
  var { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  )

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUB TOTLAL */}
        <p className="border-b border-base-300 pb-2 flex justify-between">
          <span>subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="border-b border-base-300 pb-2 flex justify-between">
          <span>shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="border-b border-base-300 pb-2 flex justify-between">
          <span>tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className="mt-4 text-lg pb-2 flex justify-between">
          <span>order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals
