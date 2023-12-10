/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useLoaderData } from 'react-router-dom'
import { autoFetch, formatPrice, amountGeneration } from '../utilities'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/CartSlice'

var singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => autoFetch(`/products/${id}`),
  }
}

export var loader =
  (queryCLient) =>
  async ({ params }) => {
    var { id } = params
    var data = await queryCLient.ensureQueryData(singleProductQuery(id))

    return data
  }
const SingleProduct = () => {
  var { data } = useLoaderData()
  var { attributes, id } = data.data
  var { image, title, colors, price, description, company } = attributes
  var realPrice = formatPrice(price)
  var [productColor, setProductColor] = React.useState(colors[0])
  var [amount, setAmount] = React.useState(1)
  var handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }
  var cartProduct = {
    cartID: id + productColor,
    productID: id,
    image,
    title,
    productColor,
    price,
    amount,
    company,
  }
  var dispatch = useDispatch()
  var addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }
  return (
    <div>
      <div className="text-sm  breadcrumbs">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </div>
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 rounded-lg object-cover lg:w-full"
        />
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl text-neutral-content font-bold">
            {company}
          </h4>
          <p className="mt-3 text-xl">{realPrice}</p>
          <p className="mt-6 leading-8 text-xl">{description}.</p>
          <div className="mt-6">
            <h4 className="text-md font-md tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`w-6 h-6 badge mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label " htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              id="amount"
              className="select select-secondary select-md select-bordered"
              value={amount}
              onChange={handleAmount}
            >
              {amountGeneration(10)}
            </select>
          </div>
          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
