/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { formatPrice } from '../utilities'
import { useLoaderData } from 'react-router-dom'

const ProductsList = () => {
  var {products} = useLoaderData()
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((prod) => {
        return (
          <Link
            key={prod.id}
            to={`/products/${prod.id}`}
            className="bg-base-300 rounded-box items-center justify-between shadow-xl hover:shadow-2xl group duration-300 p-4 flex flex-col gap-y-4 flex-wrap sm:flex-row"
          >
            <img
              src={prod?.attributes?.image}
              alt={prod.attributes.title}
              className="transition duration-300 w-36 h-36 rounded-lg object-cover sm:h-48 sm:w-48 group-hover:scale-105"
            />
            <div className=" ">
              <h2 className="text-3xl text-center font-bold text-primary capitalize tracking-wide">
                {prod.attributes.title}
              </h2>

              <h2 className="text-xl mt-8 text-center font-bold text-accent capitalize tracking-wide">
                {prod.attributes.company}
              </h2>
            </div>
            <p className="rounded-box  mt-8 text-3xl fond-medium text-secondary ">
              {formatPrice(prod.attributes.price)}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsList
