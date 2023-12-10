/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, redirect } from 'react-router-dom'
import { autoFetch, formatPrice } from '../utilities'
import { FormInput, SubmitBtn } from '../components'
import { clearCart } from '../features/cart/CartSlice'
import { toast } from 'react-toastify'

export var action =
  (store, queryCLient) =>
  async ({ request }) => {
    var formData = await request.formData()
    var { name, address } = Object.fromEntries(formData)
    var user = store.getState().user.user
    var { cartItems, numItemsInCart, orderTotal } = store.getState().cart
    var theData = {
      data: {
        address,
        cartItems,
        chargeTotal: orderTotal,
        name,
        numItemsInCart,
        orderTotal: formatPrice(orderTotal),
      },
    }

    try {
      var response = await autoFetch.post('/orders', theData, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      queryCLient.removeQueries(['orders'])
      store.dispatch(clearCart())
      toast.success('order placed successfully')
      return redirect('/orders')
    } catch (error) {
      var errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (error?.response?.status === (401 || 403)) return redirect('/login')
      return null
    }
  }
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="text-xl font-medium capitalize">shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  )
}

export default CheckoutForm
