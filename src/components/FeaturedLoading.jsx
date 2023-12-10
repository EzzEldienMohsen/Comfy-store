/* eslint-disable react-refresh/only-export-components */
import { autoFetch } from '../utilities'
import { SectionTitle, ProductsGrid } from './index'

var featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => autoFetch('/products?featured=true'),
}

export var loader = (queryClient) => async () => {
  var response = await queryClient.ensureQueryData(featuredProductsQuery)
  var products = response.data.data

  return { products }
}
const FeaturedLoading = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  )
}

export default FeaturedLoading
