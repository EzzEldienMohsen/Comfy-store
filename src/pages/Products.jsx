/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Filters, Pagination, ProductsContainer } from '../components'
import { autoFetch } from '../utilities'

var allProductsQuery = (params) => {
  return {
    queryKey: [
      'products',
      params.search ?? '',
      params.company ?? 'all',
      params.sort ?? 'a-z',
      params.category ?? 'all',
      params.price ?? 100000,
      params.shipping ?? false,
      params.page ?? 1,
    ],
    queryFn: () => autoFetch('/products', { params }),
  }
}

export var loader =
  (queryClient) =>
  async ({ request }) => {
    var params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    var response = await queryClient.ensureQueryData(allProductsQuery(params))
    var products = response.data.data
    var meta = response.data.meta
    return { products, meta, params }
  }
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>
  )
}

export default Products
