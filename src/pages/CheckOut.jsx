/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import { SectionTitle, CartTotals, CheckoutForm } from '../components'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export var loader = (store) => () => {
  var user = store.getState().user.user
  if (!user) {
    toast.warn('you need to be logged in to checkout')
    return redirect('/login')
  }
  return null
}
const CheckOut = () => {
  var cartTotal = useSelector((state) => state.cart.cartTotal)
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty..." />
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default CheckOut
