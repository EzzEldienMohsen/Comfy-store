/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { formatPrice } from '../utilities'
import { useLoaderData } from 'react-router-dom'

const ProductsGrid = () => {
  var { products } = useLoaderData()
  return (
    <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3  gap-4">
      {products.map((prod) => {
        return (
          <Link
            key={prod.id}
            to={`/products/${prod.id}`}
            className="bg-base-300 rounded-box shadow-xl hover:shadow-2xl duration-300 group"
          >
            <figure className="flex flex-col items-center justify-center px-4 pt-4">
              <img
                src={prod?.attributes?.image}
                alt={prod.attributes.title}
                className="w-96 h-96 justify-center shadow-xl rounded-t-md object-cover group-hover:scale-95 transition duration-300"
              />
              <div className="card-body items-center text-center flex flex-col">
                <h2 className="text-2xl text-center font-bold text-primary capitalize mt-4 tracking-wide">
                  {prod.attributes.title}
                </h2>
                <span className="rounded-box p-4 text-2xl fond-bold text-secondary text-center">
                  {formatPrice(prod.attributes.price)}
                </span>
              </div>
            </figure>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsGrid
