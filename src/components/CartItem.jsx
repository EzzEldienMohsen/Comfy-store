/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux'
import { formatPrice, amountGeneration } from '../utilities'
import { editItem, removeItem } from '../features/cart/CartSlice'
import { Link } from 'react-router-dom'
const CartItem = ({ cartItem }) => {
  var dispatch = useDispatch()

  var {
    productID,
    cartID,
    image,
    title,
    price,
    amount,
    company,
    productColor,
  } = cartItem
  var newAmount = amount + 5
  var removeItemFromCart = () => {
    dispatch(removeItem({ cartID }))
  }
  var handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
  }
  return (
    <div
      key={cartID}
      className="mb-12 flex flex-col sm:flex-row flex-wrap gap-y-4 border-b border-base-300 pb-6 last:border-b-0 "
    >
      {/* IMAGE */}
      <Link to={`/products/${productID}`}>
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg h-24 w-24 sm:h-32 sm:w32"
        />
      </Link>
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-4 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge bade-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-16">
        {/* AMOUNT */}
        <div className="form-control max-w-sm">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text"> amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select mt-2 select-base select-bordered select-sm"
            value={amount}
            onChange={handleAmount}
          >
            {amountGeneration(newAmount)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          onClick={removeItemFromCart}
          className="mt-2 link link-primary link-hover text-sm"
        >
          remove
        </button>
      </div>
      {/* PRICE */}
      <p className="text-lg font-medium sm:ml-auto">{formatPrice(price)}</p>
    </div>
  )
}

export default CartItem
